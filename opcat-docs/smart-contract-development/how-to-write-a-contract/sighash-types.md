---
sidebar_position: 4
---

# Sighash Developer Guide

In OP_CAT smart contracts, there are two distinct types of signatures to understand:

- **Context SigHash Preimage** — lets the contract read the current transaction's context (inputs, outputs, state, etc.)
- **User Signature** — the user authorizes an NFT/Token transfer with their own private key

---

## Sighash Type

The sighash type determines which parts of the transaction a signature commits to:

```typescript
import { SigHashType } from '@opcat-labs/scrypt-ts-opcat';

SigHashType.ALL               // 0x01 — signs all inputs + all outputs (default, most common)
SigHashType.NONE              // 0x02 — signs all inputs, no commitment to outputs
SigHashType.SINGLE            // 0x03 — signs all inputs + the output at the same index
SigHashType.ANYONECANPAY_ALL  // 0x81 — signs only the current input + all outputs
SigHashType.ANYONECANPAY_NONE // 0x82 — signs only the current input, no commitment to outputs
SigHashType.ANYONECANPAY_SINGLE // 0x83 — signs only the current input + the output at the same index
```

Use the `@method` decorator to specify the sighash type for a contract method. Without an argument, it defaults to `SigHashType.ALL`:

```typescript
@method()                                             // defaults to SigHashType.ALL
public unlock(...): boolean { ... }

@method({ sigHashType: SigHashType.ANYONECANPAY_ALL })
public unlock(...): boolean { ... }
```

The `sigHashType` parameter of `@method` has two effects:

1. **Determines the scope of the Context SigHash Preimage** — the framework builds the method's Context SigHash Preimage using this sigHashType, which controls which aggregate hash fields in `this.ctx` cover all inputs/outputs (see the field table below).

2. **Determines the preimage used by `checkSig` when verifying a User Signature** — `checkSig` uses `this.ctx` (i.e. the current method's Context SigHash Preimage) as the message to verify against. The user must therefore sign off-chain with the same sigHashType as `@method` for `checkSig` to pass.

---

## Context SigHash Preimage

### What it provides

When a public method executes, the framework automatically injects and validates the context of the current transaction. You can read it via `this.ctx`:

```typescript
this.ctx.inputIndex          // index of the current contract input in the transaction
this.ctx.inputCount          // total number of inputs in this transaction
this.ctx.spentScriptHash     // script hash of the UTXO spent by the current input
this.ctx.spentDataHash       // state hash of the current input
this.ctx.spentScriptHashes   // script hash list of all inputs (for reading other inputs)
this.ctx.spentDataHashes     // state hash list of all inputs
this.ctx.hashOutputs         // aggregate hash of all outputs (for constraining outputs)
```

### How to use it

The framework handles everything automatically — you do not need to manually pass in or verify the preimage. Simply use `this.ctx` directly inside contract methods:

```typescript
export class MyContract extends SmartContract<MyState> {
  @method()
  public unlock(args: MyUnlockArgs) {
    // use ctx directly, no extra steps required
    const myInputIndex = this.ctx.inputIndex;
    const totalInputs = this.ctx.inputCount;

    // verify that another input uses a specific script
    const otherScriptHash = ContextUtils.getSpentScriptHash(
      this.ctx.spentScriptHashes,
      args.otherInputIndex
    );
    assert(otherScriptHash == this.expectedScriptHash);

    // constrain transaction outputs (prevent tampering)
    const expectedOutputsHash = this.buildExpectedOutputs(...);
    assert(expectedOutputsHash == this.ctx.hashOutputs);
  }
}
```

### Complete `this.ctx` fields

`this.ctx` directly exposes all fields of `SHPreimage`, plus several derived fields:

```typescript
// --- SHPreimage fields (accessed directly, no .shPreimage prefix) ---
this.ctx.nVersion               // 4 bytes  — transaction version
this.ctx.hashPrevouts           // 32 bytes — aggregate hash of all input prevouts
this.ctx.inputIndex             // 4 bytes  — current input index
this.ctx.outpoint               // 36 bytes — prevout of the current input (txHash + outputIndex)
this.ctx.spentScriptHash        // 32 bytes — script hash of the UTXO spent by the current input
this.ctx.spentDataHash          // 32 bytes — state hash of the current input
this.ctx.value                  // 8 bytes  — satoshis of the current input
this.ctx.nSequence              // 4 bytes  — sequence of the current input
this.ctx.hashSpentAmounts       // 32 bytes — aggregate hash of all input amounts
this.ctx.hashSpentScriptHashes  // 32 bytes — aggregate hash of all input script hashes
this.ctx.hashSpentDataHashes    // 32 bytes — aggregate hash of all input state hashes
this.ctx.hashSequences          // 32 bytes — aggregate hash of all input sequences
this.ctx.hashOutputs            // 32 bytes — aggregate hash of all outputs
this.ctx.nLockTime              // 4 bytes  — transaction lock time
this.ctx.sigHashType            // 4 bytes  — sighash type flag

// --- Derived fields ---
this.ctx.inputCount             // total number of inputs in this transaction
this.ctx.prevout                // outpoint of the current input (same as outpoint field)
this.ctx.prevouts               // prevout list of all inputs
this.ctx.spentScriptHashes      // script hash list of all inputs
this.ctx.spentAmounts           // satoshi list of all inputs
this.ctx.spentDataHashes        // state hash list of all inputs
```

The coverage of aggregate hash fields varies by sighash type:

| Field | ALL | NONE | SINGLE | ANYONECANPAY_* |
|-------|-----|------|--------|----------------|
| `hashPrevouts` | all inputs | all inputs | all inputs | current input only |
| `hashSpentAmounts` | all inputs | all inputs | all inputs | current input only |
| `hashSpentScriptHashes` | all inputs | all inputs | all inputs | current input only |
| `hashSpentDataHashes` | all inputs | all inputs | all inputs | current input only |
| `hashOutputs` | all outputs | empty | output at same index | depends on base type |

---

## User Signature

### When you need it

When a contract must be callable only by a specific user, verify a User Signature. The user signs the current transaction with their private key; the contract checks that the signature is valid and the corresponding public key matches the expected identity, ensuring only that user can execute the operation.

Common scenarios: NFT/Token ownership transfers, Guard deployer authorization, contract operations requiring an admin signature, etc.

### Verifying inside a contract

```typescript
@method()
public unlock(args: MyUnlockArgs) {
  if (len(this.state.ownerAddr) == 32n) {
    // contract-controlled: verify the specified input uses the owner contract script
    assert(
      this.state.ownerAddr ==
        ContextUtils.getSpentScriptHash(this.ctx.spentScriptHashes, args.contractInputIndex)
    );
  } else {
    // user-controlled: verify the public key matches ownerAddr and verify the signature
    OwnerUtils.checkUserOwner(args.userPubKey, this.state.ownerAddr);
    assert(this.checkSig(args.userSig, args.userPubKey));
  }
}
```

### Available signature verification methods

**`checkSig`** — standard signature verification. The message is the current method's Context SigHash Preimage (i.e. the sigHashType specified by `@method`). The user must sign off-chain with the same sigHashType as `@method`:

```typescript
this.checkSig(signature: Sig, publicKey: PubKey): boolean

// example: method uses default ALL, so the user must sign with SIGHASH_ALL
@method()   // sigHashType = ALL
public unlock(args: MyUnlockArgs) {
  assert(this.checkSig(args.userSig, args.userPubKey));  // verifies ALL signature
}
```

**`checkSigWithFlag`** — unlike `checkSig`, this method lets you specify any sigHashType independently of `@method`. When the provided `sigHashFlag` differs from the method decorator's sigHashType, the framework automatically recomputes the correct preimage for that flag, so verification works correctly both on-chain and off-chain:

```typescript
this.checkSigWithFlag(signature: Sig, publicKey: PubKey, sigHashFlag: bigint): boolean
```

**Accepting multiple sigHashTypes**

If the contract needs to accept signatures with multiple sighash types (e.g. both `SIGHASH_ALL` and `ANYONECANPAY_ALL`), extract the sighash type from the sig, assert it is in the whitelist, then pass it to `checkSigWithFlag`:

```typescript
@method()
public unlock(userSig: Sig, userPubKey: PubKey) {
  OwnerUtils.checkUserOwner(userPubKey, this.state.ownerAddr);

  // extract sighash type from the last byte of the sig
  // (use fromLEUnsigned to avoid interpreting 0x81 as a negative number)
  const sigHashType = StdUtils.fromLEUnsigned(slice(userSig, len(userSig) - 1n, len(userSig)));

  // whitelist: only allow SIGHASH_ALL or ANYONECANPAY_ALL
  assert(sigHashType == 1n || sigHashType == 0x81n);

  // flag comes from the sig itself, so the flag check always passes; proceed to ECDSA verification
  assert(this.checkSigWithFlag(userSig, userPubKey, sigHashType));
}
```

When signing off-chain, specify the sighash type explicitly via the `sighashTypes` option of `getSig`:

```typescript
sendPsbt.addContractInput(utxo, (contract, tx) => {
  // explicitly sign with ANYONECANPAY_ALL
  const userSig = tx.getSig(inputIndex, { address: ownerAddress, sighashTypes: [SigHashType.ANYONECANPAY_ALL] });
  contract.unlock(userSig, PubKey(wallet.publicKey));
});
```

### Signing off-chain

Use `tx.getSig()` to obtain a User Signature. It defaults to `SIGHASH_ALL`:

```typescript
sendPsbt.addContractInput(tokenUtxo, (contract, tx) => {
  const userSig = tx.getSig(inputIndex, { address: ownerAddress });

  return contract.unlock({
    userPubKey: PubKey(wallet.publicKey),
    userSig: userSig,
    ...
  });
});
```

### Notes

- If a non-empty signature fails verification, the script **terminates immediately** (does not return false). Ensure signatures are correct when building the transaction; otherwise nodes will reject the entire transaction.
- The format (compressed/uncompressed) of the `userPubKey` passed in must be consistent with how `ownerAddr` was generated.

---

## Examples

### NFT (CAT721)

CAT721 selects the verification mode based on the length of `ownerAddr`:

```typescript
export class CAT721 extends SmartContract<CAT721State> {
  @method()
  public unlock(
    unlockArgs: CAT721ContractUnlockArgs,
    guardState: CAT721GuardConstState,
    guardInputIndex: bigint,
    backtraceInfo: BacktraceInfo
  ) {
    // verify the NFT originates from a legitimate minter
    this.backtraceToScript(backtraceInfo, this.minterScriptHash);

    // verify the transaction contains a legitimate Guard input
    this.checkGuard(guardState, this.ctx.spentScriptHash, this.ctx.inputIndex,
      guardInputIndex, this.ctx.spentScriptHashes, this.ctx.spentDataHashes);

    if (len(this.state.ownerAddr) == 32n) {
      // contract-controlled NFT
      assert(
        this.state.ownerAddr ==
          ContextUtils.getSpentScriptHash(this.ctx.spentScriptHashes, unlockArgs.contractInputIndex)
      );
    } else {
      // user-controlled NFT — requires a User Signature
      OwnerUtils.checkUserOwner(unlockArgs.userPubKey, this.state.ownerAddr);
      assert(this.checkSig(unlockArgs.userSig, unlockArgs.userPubKey));
    }
  }
}
```

**Off-chain call**:

```typescript
sendPsbt.addContractInput(nftUtxo, (cat721, tx) => {
  return cat721.unlock(
    {
      userPubKey: PubKey(wallet.publicKey),
      userSig: tx.getSig(inputIndex, { address: ownerAddress }),
      contractInputIndex: 0n,
    },
    guardState,
    BigInt(guardInputIndex),
    backtraceInfo
  );
});
```

---

### FT (CAT20)

CAT20 supports three unlock modes via `spendType`:

```typescript
export class CAT20 extends SmartContract<CAT20State> {
  @method()
  public unlock(
    unlockArgs: CAT20ContractUnlockArgs,  // { spendType, userPubKey, userSig, spendScriptInputIndex }
    guardState: CAT20GuardConstState,
    guardInputIndex: bigint,
    backtraceInfo: BacktraceInfo
  ) {
    this.backtraceToScript(backtraceInfo, this.minterScriptHash);
    this.checkGuard(guardState, this.ctx.spentScriptHash, this.ctx.inputIndex,
      guardInputIndex, this.ctx.spentScriptHashes, this.ctx.spentDataHashes);

    let spentScriptHash: ByteString = toByteString('');
    if (unlockArgs.spendType != SPEND_TYPE_USER_SPEND) {
      spentScriptHash = ContextUtils.getSpentScriptHash(
        this.ctx.spentScriptHashes, unlockArgs.spendScriptInputIndex
      );
    }

    if (unlockArgs.spendType == SPEND_TYPE_USER_SPEND) {
      // user unlock — User Signature
      OwnerUtils.checkUserOwner(unlockArgs.userPubKey, this.state.ownerAddr);
      assert(this.checkSig(unlockArgs.userSig, unlockArgs.userPubKey));

    } else if (unlockArgs.spendType == SPEND_TYPE_CONTRACT_SPEND) {
      // contract unlock — verify the script at spendScriptInputIndex equals ownerAddr
      assert(this.state.ownerAddr == spentScriptHash);

    } else {
      // admin unlock — verify the admin contract script
      assert(this.hasAdmin);
      assert(spentScriptHash == this.adminScriptHash);
    }
  }
}
```

**Off-chain call (user unlock)**:

```typescript
sendPsbt.addContractInput(tokenUtxo, (cat20, tx) => {
  return cat20.unlock(
    {
      spendType: SPEND_TYPE_USER_SPEND,
      userPubKey: PubKey(wallet.publicKey),
      userSig: tx.getSig(inputIndex, { address: ownerAddress }),
      spendScriptInputIndex: -1n,
    },
    guardState,
    BigInt(guardInputIndex),
    backtraceInfo
  );
});
```

---

### Guard

The Guard contract coordinates transfers across multiple Token inputs, verifying Token conservation (total inputs = total outputs + burned). The Guard itself also requires the deployer's User Signature to prevent the Guard from being hijacked by a third party.

```typescript
export class CAT20Guard_6_6_2 extends SmartContract<CAT20GuardConstState> {
  @method()
  public unlock(
    deployerSig: Sig,       // Guard deployer's signature (prevents Guard hijacking)
    deployerPubKey: PubKey,
    tokenAmounts: FixedArray<CAT20_AMOUNT, 4>,      // total input amount per token type
    tokenBurnAmounts: FixedArray<CAT20_AMOUNT, 4>,  // burned amount per token type
    nextStateHashes: FixedArray<ByteString, 6>,
    ownerAddrOrScriptHashes: FixedArray<ByteString, 6>,
    outputTokens: FixedArray<CAT20_AMOUNT, 6>,
    tokenScriptHashIndexes: FixedArray<bigint, 6>,
    outputSatoshis: FixedArray<bigint, 6>,
    cat20States: FixedArray<CAT20State, 6>,
    outputCount: bigint
  ) {
    // Guard deployer User Signature verification
    OwnerUtils.checkUserOwner(deployerPubKey, this.state.deployerAddr);
    assert(this.checkSig(deployerSig, deployerPubKey));

    // Token conservation check (total inputs == total outputs + burned)
    // ...

    // Constrain transaction outputs via this.ctx.hashOutputs to prevent tampering
    // ...
  }
}
```

**Off-chain call**:

```typescript
sendPsbt.addContractInput(guardUtxo, (guard, tx) => {
  return guard.unlock(
    tx.getSig(guardInputIndex, { publicKey }),  // deployer User Signature
    PubKey(publicKey),
    tokenAmounts,
    tokenBurnAmounts,
    nextStateHashes,
    ownerAddrOrScriptHashes,
    outputTokens,
    tokenScriptHashIndexes,
    outputSatoshis,
    cat20States,
    BigInt(outputCount)
  );
});
```

Guard has four variants — choose based on transaction scale:

| Variant | Max Token Inputs | Max Outputs | Max Token Types |
|---------|-----------------|-------------|-----------------|
| `CAT20Guard_6_6_2` | 6 | 6 | 2 |
| `CAT20Guard_6_6_4` | 6 | 6 | 4 |
| `CAT20Guard_12_12_2` | 12 | 12 | 2 |
| `CAT20Guard_12_12_4` | 12 | 12 | 4 |

---

## API Reference

| API | Location | Description |
|-----|----------|-------------|
| `this.ctx` | `SmartContract` | Current transaction context (inputIndex, hashOutputs, etc.) |
| `this.checkSig(sig, pubKey)` | `smartContract.ts` | Verify a user signature against the method's sighash preimage |
| `this.checkSigWithFlag(sig, pubKey, flag)` | `smartContract.ts` | Verify a signature with an explicit sighash flag, recomputing the preimage when the flag differs from `@method` |
| `ContextUtils.getSpentScriptHash(hashes, index)` | `contextUtils.ts` | Read the script hash of the input at the given index |
| `ContextUtils.getSpentDataHash(hashes, index)` | `contextUtils.ts` | Read the state hash of the input at the given index |
| `OwnerUtils.checkUserOwner(pubKey, ownerAddr)` | `ownerUtils.ts` | Assert that the public key matches ownerAddr |
| `@method({ sigHashType })` | `decorators.ts` | Specify the sighash type for a contract method |
