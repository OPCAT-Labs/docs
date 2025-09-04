---
sidebar_position: 2
---

# Built-in Functions

## Global Functions

The following functions come with sCrypt:

### Assert

- `assert(condition: boolean, errorMsg?: string)` Throw an `Error` with the optional error message if `condition` is `false`. Otherwise, nothing happens.

```ts
assert(1n === 1n)        // nothing happens
assert(1n === 2n)        // throws Error('Execution failed')
assert(false, 'hello')   // throws Error('Execution failed, hello')
```

### Fill

- `fill(value: T, length: number): T[length] ` Returns an `FixedArray` with all `size` elements set to `value`, where `value` can be any type.

:::note
`length` must be a [compiled-time constant](./basics#compile-time-constant).
:::


```ts
// good
fill(1n, 3) // numeric literal 3
fill(1n, M) // const M = 3
fill(1n, Demo.N) // `N` is a static readonly property of class `Demo`
```

### Math

- `abs(a: bigint): bigint` Returns the absolute value of `a`.

```ts
abs(1n)  // 1n
abs(0n)  // 0n
abs(-1n) // 1n
```

- `min(a: bigint, b: bigint): bigint` Returns the smallest of `a` and `b`.

```ts
min(1n, 2n) // 1n
```

- `max(a: bigint, b: bigint): bigint` Returns the lagest of `a` and `b`.

```ts
max(1n, 2n) // 2n
```

- `within(x: bigint, min: bigint, max: bigint): boolean` Returns `true` if `x` is within the specified range (left-inclusive and right-exclusive), `false` otherwise.

```ts
within(0n, 0n, 2n) // true
within(1n, 0n, 2n) // true
within(2n, 0n, 2n) // false
```

### Hashing

- `ripemd160(a: ByteString): Ripemd160` Returns the [RIPEMD160](https://en.wikipedia.org/wiki/RIPEMD) hash result of `a`.
- `sha1(a: ByteString): Sha1` Returns the [SHA1](https://en.wikipedia.org/wiki/SHA-1) hash result of `a`.
- `sha256(a: ByteString): Sha256` Returns the [SHA256](https://www.movable-type.co.uk/scripts/sha256.html) hash result of `a`.
- `hash160(a: ByteString): Ripemd160` Actually returns `ripemd160(sha256(a))`.
- `pubKey2Addr(pk: PubKey): Addr` Wrapper function of `hash160`.
- `hash256(a: ByteString): Sha256` Actually returns `sha256(sha256(a))`.

### ByteString Operations

Basic types allowed to be used in `@props` and `@methods` are `boolean` and `bigint`, along with their wrapper types `Boolean` and `BigInt`.

A `string` literal is not allowed to be used directly without being converted into a ByteString.

```ts
@method()
public example(x: bigint, y: ByteString, z: boolean) {

    assert(x == 5n)

    assert(z)

    // Strings must by converted to ByteString before being used
    // in a smart contract:
    assert(y == toByteString("hello world!", true))

    // Vice versa, we can turn integers into ByteStrings:
    assert(intToByteString(x) == toByteString('05'))

    // Little-endian signed-magnitude representation is being used:
    assert(intToByteString(-x) == toByteString('85'))
    assert(intToByteString(-x * 1000n) == toByteString('8893'))

}

```

- `intToByteString(n: bigint): ByteString` If `size` is omitted, convert `n` is converted to a `ByteString` in [sign-magnitude](https://en.wikipedia.org/wiki/Signed_number_representations#Sign%E2%80%93magnitude) little endian format, with as few bytes as possible (a.k.a., minimally encoded). Otherwise, converts the number `n` to a `ByteString` of the specified size, including the sign bit; fails if the number cannot be accommodated.

```ts
// as few bytes as possible
intToByteString(128n)   // '8000', little endian
intToByteString(127n)   // '7f'
intToByteString(0n)     // ''
intToByteString(-1n)    // '81'
intToByteString(-129n)  // '8180', little endian
```

- `len(a: ByteString): number` Returns the byte length of `a`.

```ts
const s1 = toByteString('0011', false) // '0011', 2 bytes
len(s1) // 2

const s2 = toByteString('hello', true) // '68656c6c6f', 5 bytes
len(s2) // 5
```


### Bitwise Operator

Bigint in the Bitcoin is stored in [sign–magnitude format](https://en.wikipedia.org/wiki/Signed_number_representations#Sign%E2%80%93magnitude), not [two's complement format](https://en.wikipedia.org/wiki/Signed_number_representations#Two's_complement) commonly used. If the operands are all nonnegative, the result of the operation is consistent with TypeScript's bitwise operator, except `~`. Otherwise, the operation results may be inconsistent and thus undefined. It is strongly recommended to **NEVER** apply bitwise operations on negative numbers.

- `and(x: bigint, y: bigint): bigint` Bitwise AND

```ts
and(13n, 5n) // 5n
and(0x0a32c845n, 0x149f72n) // 0x00108840n, 1083456n
```

- `or(x: bigint, y: bigint): bigint` Bitwise OR

```ts
or(13n, 5n) // 13n
or(0x0a32c845n, 0x149f72n) // 0xa36df77n, 171368311n
```

- `xor(x: bigint, y: bigint): bigint` Bitwise XOR

```ts
xor(13n, 5n) // 8n
xor(0x0a32c845n, 0x149f72n) // 0x0a265737n, 170284855n
```

- `invert(x: bigint): bigint` Bitwise NOT

```ts
invert(13n)  // -114n
```

- `lshift(x: bigint, n: bigint): bigint` Arithmetic left shift, returns `x * 2^n`.

```ts
lshift(2n, 3n)   // 16n
```

- `rshift(x: bigint, n: bigint): bigint` Arithmetic right shift, returns `x / 2^n`.

```ts
rshift(21n, 3n)    // 2n
rshift(1024n, 11n) // 0n
```

### Exit

- `exit(status: boolean): void` Calling this function will terminate contract execution. If `status` is `true` then the contract succeeds; otherwise, it fails.

## `SmartContract` Methods

The following `@method`s come with the `SmartContract` base class.


### `loadArtifact`

Function `static loadArtifact(artifactFile: Artifact)` loads the contract artifact file from the path you passed in to initialize the contract class.

If no parameter is passed when calling, the function will load the artifact file from the default directory. This is generally used during [testing](../how-to-test-a-contract.md#load-artifact).

You can also pass the artifact path directly. This is usually used when the method is called when interacting with a contract at the front-end.

```ts
import { TicTacToe } from './contracts/tictactoe';
import artifact from '../artifacts/tictactoe.json';
TicTacToe.loadArtifact(artifact);
```

### `checkSig`

Function `checkSig(signature: Sig, publicKey: PubKey): boolean` verifies an ECDSA signature. It takes two inputs: an ECDSA signature and a public key.

It returns if the signature matches the public key.

:::caution
All signature checking functions (`checkSig` and `checkMultiSig`) follow the [**NULLFAIL** rule](https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#NULLFAIL): if the signature is invalid, the entire contract aborts and fails immediately, unless the signature is an empty ByteString, in which case these functions return `false`.
:::

For example, Pay-to-Public-Key-Hash ([P2PKH](https://learnmeabitcoin.com/guide/p2pkh)) can be implemented as below.

```ts
class P2PKH extends SmartContract {
  // Address of the recipient.
  @prop()
  readonly address: Addr

  constructor(address: Addr) {
    super(...arguments)
    this.address = address
  }

  @method()
  public unlock(sig: Sig, pubkey: PubKey) {
    // Check if the passed public key belongs to the specified public key hash.
    assert(pubKey2Addr(pubkey) == this.address, 'address does not correspond to address')
    // Check signature validity.
    assert(this.checkSig(sig, pubkey), 'signature check failed')
  }
}
```

### `checkMultiSig`

Function `checkMultiSig(signatures: Sig[], publickeys: PubKey[]): boolean` verifies an array of ECDSA signatures. It takes two inputs: an array of ECDSA signatures and an array of public keys.

The function compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the `signatures` array using the same order as their corresponding public keys were placed in the `publickeys` array. If all signatures are valid, `true` is returned, `false` otherwise.

```ts
class MultiSigPayment extends SmartContract {
  // Addresses of the 3 recipients.
  @prop()
  readonly addresses: FixedArray<Addr, 3>

  constructor(addresses: FixedArray<Addr, 3>) {
    super(...arguments)
    this.addresses = addresses
  }

  @method()
  public unlock(
      signatures: FixedArray<Sig, 3>,
      publicKeys: FixedArray<PubKey, 3>
    ) {
    // Check if the passed public keys belong to the specified addresses.
    for (let i = 0; i < 3; i++) {
      assert(pubKey2Addr(publicKeys[i]) == this.addresses[i], 'address mismatch')
    }
    // Validate signatures.
    assert(this.checkMultiSig(signatures, publicKeys), 'checkMultiSig failed')
  }
}
```


### `buildChangeOutput`

Function `buildChangeOutput(): ByteString` creates a change output.

```ts
class Auction extends SmartContract {

  // ...

  @method()
  public bid(bidder: Addr, bid: bigint) {

    // Addr
    const auctionOutput: ByteString = ...

    // Refund previous highest bidder.
    const refundOutput: ByteString = ...

    let outputs: ByteString = auctionOutput + refundOutput

    // Add change output.
    outputs += this.buildChangeOutput()

    assert(sha256(outputs) == this.ctx.hashOutputs, 'hashOutputs check failed')
  }
}
```


Specify the change address via PSBT:


```ts

const address = await signer.getAddress();
const feeRate = await provider.getFeeRate();
const psbt = new ExtPsbt();

psbt.addUTXO(utxos)   // add inputs and outputs
.addContractOutput(contract, satoshis)
.change(address, feeRate);   // add change output explicitly
```


### `timeLock`

Function `timeLock(locktime: bigint): boolean` returns whether the calling transaction has its [`nLocktime`](https://learnmeabitcoin.com/technical/transaction/locktime/) value set to a point past the passed `locktime` value. This value can either be a UNIX timestamp or a block height. Additionally, it ensures the value of `nSequence` is set to less than `0xFFFFFFFF`.

If we assert the returned value to be `true`, we have effectively ensured that the public method of our smart contract cannot be successfully invoked until the specified time has passed.

```ts
class TimeLock extends SmartContract {

  @prop()
  locktime: bigint

  // ...

  @method()
  public unlock() {
    assert(this.timeLock(this.locktime), 'time lock not yet expired')
  }

}
```

:::note
This mechanism can be employed solely to ensure that a method can be called **after** a specific point in time. In contrast, it cannot be employed to ensure that a method is called **before** a specific point in time.
:::


### `checkInputState`

Check state of the input. By default, the system checks the state of the input.
If you use this function to specify checking only specific inputs' State, you must set the `autoCheckInputState`
option in the `@method()` decorator to false.

```ts
export class Counter extends SmartContract<CounterState> {
  @method({
      autoCheckInputState: false
    })
  public increase() {
    this.checkInputState(this.ctx.inputIndex, CounterStateLib.serializeState(this.state))
    this.state.count++;
    const nextOutput = TxUtils.buildDataOutput(this.ctx.spentScriptHash, this.ctx.value, CounterStateLib.stateHash(this.state))
    const outputs = nextOutput + this.buildChangeOutput();
    assert(this.checkOutputs(outputs), 'Outputs mismatch with the transaction context');
  }
}
```

### `backtraceToOutpoint` and `backtraceToScript`

Funtion `backtraceToOutpoint` is for checking whether the contract can be traced back to the genesis outpoint.

Funtion `backtraceToScript` is for checking whether the contract can be traced back to the genesis script.

Both functions accept the `BacktraceInfo` parameter, which contains the following fields: 

```ts
/**
 * @type {TxIn}
 * the traceable input in the previous transaction
 */
prevTxInput: TxIn;

/**
 * @type {Int32}
 * the index of the traceable input in the previous transaction
 */
prevTxInputIndex: Int32;

/**
 * @type {TxHashPreimage}
 * the preimage of the previous previous transaction
 */
prevPrevTxPreimage: TxHashPreimage;
```

To retrieve the `BacktraceInfo`, specify `{"withBackTraceInfo" : true}` in [CallOptions](../how-to-deploy-and-call-a-contract/call-deployed#calloptions).

If `withBackTraceInfo` is specified, you can also set `prevPrevTxFinder` to determine how to locate previous transactions. If not specified, the default finder will be used. The default finder starts searching from the 0th input of the transaction.  Here is the implementation of the default finder:

```ts
const prevPrevTxFinder = async (prevTx: Transaction, provider: UtxoProvider & ChainProvider, _inputIndex: InputIndex) => {
    const prevTxId = uint8ArrayToHex(prevTx.inputs[0].prevTxId);
    const prevTxHex = await provider.getRawTransaction(prevTxId);
    return prevTxHex;
}
```




## Standard Libraries

`sCrypt` comes with standard libraries that define many commonly used functions.

### `TxUtils`

The `TxUtils` library provides a set of commonly used utility functions.


- `static buildOutput(scriptHash: ByteString, outputSatoshis: UInt64): ByteString` Build a transaction output with the specified script hash, satoshi amount and empty data.

```ts
const scriptHash = toByteString('f746ec16e2e791f6dc6507ced214429db32f2db3afe4648a55a49d8bbdc6e03d')
TxUtils.buildOutput(scriptHash, 1n) // '0100000000000000f746ec16e2e791f6dc6507ced214429db32f2db3afe4648a55a49d8bbdc6e03de3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
```

- `static buildP2PKHScript(pubKeyHash: PubKeyHash ): ByteString` Build a [Pay to Public Key Hash (P2PKH)](https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash) script from a public key hash / address.

```ts
const address = Addr(toByteString('0011223344556677889900112233445566778899'))
TxUtils.buildP2PKHScript(address) // '76a914001122334455667788990011223344556677889988ac'
```

- `static buildP2PKHOutput(amount: UInt64, pubKeyHash: PubKeyHash): ByteString` Build a P2PKH output from the public key hash.

```ts
const address = Addr(toByteString('0011223344556677889900112233445566778899'))
TxUtils.buildP2PKHOutput(1n, address) // '01000000000000005df43715170dedc3e6ed31224f6a29c16014e1329b37c9f225b0f917c3f6323fe3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
```


- `static buildDataOutput(scriptHash: ByteString, satoshis: UInt64, dataHash: ByteString ): ByteString` Build a transaction output with the specified script hash, satoshi amount and data hash.

```ts
const scriptHash = toByteString('f746ec16e2e791f6dc6507ced214429db32f2db3afe4648a55a49d8bbdc6e03d')
const dataHash = toByteString('48615e1ab34c2c9abeacf9cf6b4fea9093020829f974b8280c8f3fd826cbb9cf')
TxUtils.buildDataOutput(scriptHash, 1n, dataHash) // '0100000000000000f746ec16e2e791f6dc6507ced214429db32f2db3afe4648a55a49d8bbdc6e03d48615e1ab34c2c9abeacf9cf6b4fea9093020829f974b8280c8f3fd826cbb9cf'
```

- `static satoshisToByteString(n: UInt64): ByteString` Convert a satoshis amount to ByteString

```ts
TxUtils.satoshisToByteString(100000000n) // '00e1f50500000000'
```


- `static byteStringToSatoshis(bs: ByteString): UInt64` Convert a ByteString to satoshis amount

```ts
TxUtils.byteStringToSatoshis(toByteString('00e1f50500000000')) // 100000000n
```

### `StdUtils`

`StdUtils` is a utility class providing standard helper methods for working with `ByteStrings` and `numeric` conversions.

- `checkLenDivisibleBy` Checks if the length of a ByteString is divisible by a given number and returns the quotient.

```ts
assert(inputCount == StdUtils.checkLenDivisibleBy(spentScriptHashes, 32n), 'invalid spentScriptHashes');
```

- `uint64ToByteString` Converts a UInt64 value to a little-endian ByteString.

```ts
StdUtils.uint64ToByteString(100n);
```

- `uint32ToByteString` Converts a UInt32 number to a 4-byte little-endian ByteString.

```ts
StdUtils.uint32ToByteString(100n);
```

- `byteStringToUInt32` Converts a 4-byte ByteString to an unsigned 32-bit integer in little-endian format.

```ts
StdUtils.byteStringToUInt32(tobyteString('00000064'));
```

- `toLEUnsigned`  Converts signed integer `n` to unsigned integer of `l` string, in little endian

```ts
StdUtils.toLEUnsigned(100n, 4n)
```

- `fromLEUnsigned` Converts `ByteString` to unsigned integer, in sign-magnitude little endian

```ts
StdUtils.fromLEUnsigned(tobyteString('00000064'))
```

- `writeVarInt` Encodes a bigint into a variable-length integer (VarInt) format as ByteString.

```ts
StdUtils.writeVarInt(1n)
```

- `pushData` Pushes data to a buffer with appropriate size header.

```ts
StdUtils.pushData(tobyteString('00000064'))
```

- `readVarint`  read [VarInt (variable integer)]{@link https://learnmeabitcoin.com/technical/general/compact-size/}-encoded data from the `pos` of `buf`

```ts
StdUtils.readVarint(StdUtils.writeVarInt(1n), 0n)
```

### `StateLib`

When a contract's state must be shared across contracts or be accessible to other contracts, the `StateLib` library should be employed.

- `serializeState` Serializes the given state object into a ByteString.

```ts
MyStateLib.serializeState(contractState)
```

- `stateHash` Computes the SHA-256 hash of the given state object.

```ts
MyStateLib.stateHash(contractState)
```

### `ByteStringWriter`

`ByteStringWriter` is a writer for serializing `ByteString`, `boolean`, `bigint`

```ts
let writer = new ByteStringWriter();
writer.writeByteString(tobyteString('00000064'));
writer.writeBoolean(true);
writer.writeVarInt(100n);
let bs = writer.buf;
```

### `ByteStringReader`

`ByteStringReader` is a reader for deserializing `ByteString`, `boolean`, `bigint`


```ts
let reader = new ByteStringReader(data);
let data1 = reader.readBytes();
let data2 = reader.readBoolean();
let data3 = reader.readVarint();
```

### `ContextUtils`

`ContextUtils` is a Utility class for smart contract context operations.

It provides methods for:

- ECDSA signature generation and verification
- Transaction preimage serialization and validation
- Prevouts and spent data verification
- Lock time checking
- Various cryptographic and serialization utilities

- `sign`  Generates a DER-encoded ECDSA signature from given parameters.

```ts
const preimage = ContextUtils.serializeSHPreimage(shPreimage);

const h: ByteString = hash256(preimage);
const sig: Sig = ContextUtils.sign(
  ContextUtils.fromBEUnsigned(h), 
  ContextUtils.privKey, 
  ContextUtils.invK,
    ContextUtils.r, 
    ContextUtils.rBigEndian,
    sigHashType);
```

- `serializeSHPreimage` Serializes a `SHPreimage` object into a ByteString.

```ts
const preimage = ContextUtils.serializeSHPreimage(shPreimage);
```

- `checkPrevouts` Verify that the prevouts context passed in by the user is authentic

```ts
// verify this.ctx.shaPrevouts and Prevouts
ContextUtils.checkPrevouts(
  this.ctx.prevouts,
  this.ctx.hashPrevouts,
  this.ctx.inputIndex,
  this.ctx.inputCount,
);
```

- `checkSpentScripts` Check if the spent scripts array passed in matches the `hashSpentDataHashes`

```ts
// verify this.ctx.hashSpentDataHashes and SpentScripts
ContextUtils.checkSpentScripts(this.ctx.spentScriptHashes, this.ctx.hashSpentDataHashes, inputCount);
```


- `checkSpentAmounts` Check if the spent amounts array passed in matches the hashSpentAmounts

```ts
// verify this.ctx.hashSpentAmounts and SpentAmounts
ContextUtils.checkSpentAmounts(this.ctx.spentAmounts, this.ctx.hashSpentAmounts, inputCount);
```

- `checkSpentDataHashes` Verifies the integrity of spent data hashes against the provided transaction hash and input count.

```ts
ContextUtils.checkSpentDataHashes(this.ctx.spentDataHashes, this.ctx.hashSpentDataHashes, inputCount);
```

- `getSpentScriptHash` Retrieves the script hash of a spent input at the specified index.

```ts
const spentScriptHash = ContextUtils.getSpentScriptHash(this.ctx.spentScriptHashes, this.ctx.inputIndex)
```


- `getSpentAmount` Retrieves the spent amount for a specific input index from the given SpentAmounts.

```ts
const spentAmount = ContextUtils.getSpentAmount(this.ctx.spentAmounts, this.ctx.inputIndex)
```

- `getSpentDataHash` Retrieves the data hash for a specific input from the spent data hashes.

```ts
const dataHash = ContextUtils.getSpentDataHash(this.ctx.spentDataHashes, this.ctx.inputIndex)
```

- `checknLockTime` Checks if the lock time conditions are met for a given preimage and lock time.

```ts
let block = 10000n
assert(ContextUtils.checknLockTime(this.ctx, block), "Locktime not met");
```


### `TxHashPreimageUtils`

A utility class for working with transaction hash preimages in Opcat smart contracts.

It provides methods to:

- Calculate transaction hash from preimage data
- Extract individual input/output byte strings from preimage

- `getTxHashFromTxHashPreimage` Computes the transaction hash from a given transaction hash preimage.

```ts
const txHash = TxHashPreimageUtils.getTxHashFromTxHashPreimage(txHashPreimage);
assert(txHash == slice(this.ctx.prevouts, inputIndex * 36n, inputIndex * 36n + 32n), 'prevTxHash mismatch');
```

- `getInputByteString` Extracts the byte string of a specific input from the transaction hash preimage.

```ts
// inputByteString = prevout(36 bytes) + unlockScriptHash(32 bytes) + sequence(4 bytes)
const inputByteString = TxHashPreimageUtils.InputByteString(txHashPreimage, inputIndex);
```

- `getOutputByteString` Extracts the byte string of a specific output from the transaction hash preimage.

```ts
// outputByteString = amount(8 bytes) + lockingScriptHash(32 bytes) + dataHash(32 bytes)
const outputByteString = TxHashPreimageUtils.getOutputByteString(txHashPreimage, inputIndex);
```