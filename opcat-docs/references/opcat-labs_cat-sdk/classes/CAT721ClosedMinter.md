[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / CAT721ClosedMinter

# Class: CAT721ClosedMinter

Defined in: [packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts:14](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts#L14)

The CAT721 closed minter contract

## Onchain

## Extends

- `SmartContract`\<[`CAT721ClosedMinterState`](../type-aliases/CAT721ClosedMinterState.md)\>

## Constructors

### new CAT721ClosedMinter()

> **new CAT721ClosedMinter**(`issuerAddress`, `genesisOutpoint`, `max`): [`CAT721ClosedMinter`](CAT721ClosedMinter.md)

Defined in: [packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts:24](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts#L24)

#### Parameters

##### issuerAddress

`ByteString`

##### genesisOutpoint

`ByteString`

##### max

`bigint`

#### Returns

[`CAT721ClosedMinter`](CAT721ClosedMinter.md)

#### Overrides

`SmartContract<CAT721ClosedMinterState>.constructor`

## Backtrace

### backtraceToOutpoint()

> **backtraceToOutpoint**(`backtraceInfo`, `genesisOutpoint`): `boolean`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:283

Check whether the contract can be traced back to the genesis outpoint.

#### Parameters

##### backtraceInfo

`BacktraceInfo`

the backtrace info to verify, including prevTx and prevPrevTx informations

##### genesisOutpoint

`ByteString`

expected genesis outpoint to be traced back to

#### Returns

`boolean`

true if the contract can be backtraced to the genesis outpoint. Otherwise false.

#### Onchain

#### Inherited from

`SmartContract.backtraceToOutpoint`

***

### backtraceToScript()

> **backtraceToScript**(`backtraceInfo`, `genesisScript`): `boolean`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:292

Check whether the contract can be traced back to the genesis script.

#### Parameters

##### backtraceInfo

`BacktraceInfo`

the backtrace info to verify, including prevTx and prevPrevTx informations

##### genesisScript

`ByteString`

expected genesis script to be traced back to

#### Returns

`boolean`

true if the contract can be backtraced to the genesis script. Otherwise false.

#### Onchain

#### Inherited from

`SmartContract.backtraceToScript`

## Other

### \_state

> **\_state**: [`CAT721ClosedMinterState`](../type-aliases/CAT721ClosedMinterState.md)

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:50

The state of the contract UTXO, usually committed to the first OP_RETURN output, is revealed when spending.

#### Onchain

#### Inherited from

`SmartContract._state`

***

### genesisOutpoint

> **genesisOutpoint**: `ByteString`

Defined in: [packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts#L19)

***

### issuerAddress

> **issuerAddress**: `ByteString`

Defined in: [packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts:16](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts#L16)

***

### lockingScript

> `readonly` **lockingScript**: `Script`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:56

Locking script corresponding to the SmartContract

#### Inherited from

`SmartContract.lockingScript`

***

### max

> **max**: `bigint`

Defined in: [packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts:22](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts#L22)

***

### utxo?

> `optional` **utxo**: `ExtUtxo`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:45

#### Inherited from

`SmartContract.utxo`

***

### artifact

> `static` **artifact**: `Artifact`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:33

Bitcoin Contract Artifact

#### Inherited from

`SmartContract.artifact`

***

### changeInfo

#### Get Signature

> **get** **changeInfo**(): `TxOut`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:226

Get the change info of the change output for current psbt.

##### Onchain

##### Returns

`TxOut`

the change info of current psbt

#### Inherited from

`SmartContract.changeInfo`

***

### ctx

#### Get Signature

> **get** **ctx**(): `IContext`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:171

Get the context details of the current PSBT input in which this contract is called or spent.

##### Onchain

##### Returns

`IContext`

#### Inherited from

`SmartContract.ctx`

***

### debug

#### Get Signature

> **get** **debug**(): `object`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:231

A set of functions for debugging contracts, which can only be called in `@method` methods.

##### Onchain

##### Returns

`object`

###### diffOutputs()

> **diffOutputs**: (`outputsByte`) => `void`

###### Parameters

###### outputsByte

`ByteString`

###### Returns

`void`

#### Inherited from

`SmartContract.debug`

***

### inputContext

#### Get Signature

> **get** **inputContext**(): `InputContext`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:192

Get the context of the current PSBT input in which this contract is called or spent.

##### Returns

`InputContext`

the context of the current PSBT input

#### Inherited from

`SmartContract.inputContext`

***

### lockingScriptHash

#### Get Signature

> **get** **lockingScriptHash**(): `Sha256`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:57

##### Returns

`Sha256`

#### Inherited from

`SmartContract.lockingScriptHash`

***

### spentPsbt

#### Get Signature

> **get** **spentPsbt**(): `undefined` \| `Contextual`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:182

Gets the PSBT (Partially Signed Bitcoin Transaction) that was used to spend this contract.
Returns undefined if no spending transaction exists.

##### Returns

`undefined` \| `Contextual`

#### Inherited from

`SmartContract.spentPsbt`

***

### state

#### Get Signature

> **get** **state**(): `StateT`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:51

##### Returns

`StateT`

#### Set Signature

> **set** **state**(`state`): `void`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:52

##### Parameters

###### state

`StateT`

##### Returns

`void`

#### Inherited from

`SmartContract.state`

***

### asyncBindToUtxo()

> **asyncBindToUtxo**(`utxo`, `callback`): `Promise`\<[`CAT721ClosedMinter`](CAT721ClosedMinter.md)\>

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:306

#### Parameters

##### utxo

`Optional`\<`ExtUtxo`, `"script"`\> | `Optional`\<`UTXO`, `"script"`\>

##### callback

(`contract`) => `Promise`\<`void`\>

#### Returns

`Promise`\<[`CAT721ClosedMinter`](CAT721ClosedMinter.md)\>

#### Inherited from

`SmartContract.asyncBindToUtxo`

***

### bindToUtxo()

> **bindToUtxo**(`utxo`): `this`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:305

Binds the smart contract to a UTXO by verifying and setting its script.

#### Parameters

##### utxo

The UTXO to bind to (script field is optional)

`Optional`\<`ExtUtxo`, `"script"`\> | `Optional`\<`UTXO`, `"script"`\>

#### Returns

`this`

The contract instance for chaining

#### Throws

Error if the UTXO's script exists and doesn't match the contract's locking script

#### Inherited from

`SmartContract.bindToUtxo`

***

### buildChangeOutput()

> **buildChangeOutput**(): `ByteString`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:112

A built-in function to create an [change output][https://en.bitcoin.it/wiki/Change](https://en.bitcoin.it/wiki/Change).

#### Returns

`ByteString`

#### Onchain

#### Inherited from

`SmartContract.buildChangeOutput`

***

### checkInputState()

> **checkInputState**(`inputIndex`, `serializedState`): `boolean`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:158

check state of the input.
option in the `@method()` decorator to false.

#### Parameters

##### inputIndex

`Int32`

index of the input

##### serializedState

`ByteString`

the state of the input

#### Returns

`boolean`

success if stateHash is valid

#### Onchain

#### Inherited from

`SmartContract.checkInputState`

***

### checkOutputs()

> **checkOutputs**(`outputs`): `boolean`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:240

Check the outputs with the context of current transaction.

#### Parameters

##### outputs

`ByteString`

the expected serialized outputs of the current transaction

#### Returns

`boolean`

true if the outputs are not consistent with the transaction context, otherwise false.

#### Onchain

#### Inherited from

`SmartContract.checkOutputs`

***

### checkProps()

> **checkProps**(): `void`

Defined in: [packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts:81](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts#L81)

#### Returns

`void`

***

### checkSHPreimage()

> **checkSHPreimage**(`shPreimage`): `boolean`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:85

Using the [OP_PUSH_TX][https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1](https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1) technique, check if `shPreimage` is the preimage of the current transaction.

#### Parameters

##### shPreimage

`SHPreimage`

#### Returns

`boolean`

true if `shPreimage` is the preimage of the current transaction. Otherwise false.

#### Onchain

#### Inherited from

`SmartContract.checkSHPreimage`

***

### getCallData()

> **getCallData**(): `MethodCallData`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:251

Gets the method call data for the current smart contract.

#### Returns

`MethodCallData`

The method call data object.

#### Throws

If no method call is found.

#### Inherited from

`SmartContract.getCallData`

***

### getUnlockingScript()

> **getUnlockingScript**(): `Script`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:245

Returns the raw arguments from the call data of the smart contract.

#### Returns

`Script`

The raw arguments extracted from the call data.

#### Inherited from

`SmartContract.getUnlockingScript`

***

### isPubFunction()

> **isPubFunction**(`method`): `boolean`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:210

Checks if the given method is a public function in the smart contract.

#### Parameters

##### method

`string`

The method name to check.

#### Returns

`boolean`

True if the method is a public function, false otherwise.

#### Inherited from

`SmartContract.isPubFunction`

***

### mint()

> **mint**(`nftMint`, `issuerPubKey`, `issuerSig`, `minterSatoshis`, `nftSatoshis`, `backtraceInfo`): `void`

Defined in: [packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/cat721/minters/cat721ClosedMinter.ts#L32)

#### Parameters

##### nftMint

[`CAT721State`](../type-aliases/CAT721State.md)

##### issuerPubKey

`PubKey`

##### issuerSig

`Sig`

##### minterSatoshis

`UInt64`

##### nftSatoshis

`UInt64`

##### backtraceInfo

`BacktraceInfo`

#### Returns

`void`

***

### next()

> **next**(`newState`): `this`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:298

Get a new contract instance with the new state.

#### Parameters

##### newState

[`CAT721ClosedMinterState`](../type-aliases/CAT721ClosedMinterState.md)

the new state

#### Returns

`this`

the new covenant

#### Inherited from

`SmartContract.next`

***

### setSighashType()

> **setSighashType**(`sigHashType`): `void`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:187

Sets the signature hash type for the current input in the PSBT.

#### Parameters

##### sigHashType

`SigHashType`

The signature hash type to set

#### Returns

`void`

#### Inherited from

`SmartContract.setSighashType`

***

### spentFromInput()

> **spentFromInput**(`psbt`, `inputIndex`): `void`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:177

Mark the contract instance as spent from the input of the PSBT.

#### Parameters

##### psbt

`Contextual`

##### inputIndex

`number`

#### Returns

`void`

#### Inherited from

`SmartContract.spentFromInput`

***

### timeLock()

> **timeLock**(`nLockTime`): `boolean`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:274

Checks a locktime parameter with the transaction's locktime.
There are two times of nLockTime: lock-by-blockheight and lock-by-blocktime,
distinguished by whether nLockTime < LOCKTIME_THRESHOLD = 500000000

See the corresponding code on bitcoin core:
https://github.com/bitcoin/bitcoin/blob/ffd75adce01a78b3461b3ff05bcc2b530a9ce994/src/script/interpreter.cpp#L1129

See the bip65 for specification
https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki#summary

#### Parameters

##### nLockTime

`Int32`

the locktime read from the script

#### Returns

`boolean`

true if the transaction's locktime is less than or equal to
                  the transaction's locktime

#### Onchain

#### Inherited from

`SmartContract.timeLock`

***

### create()

> `static` **create**\<`T`\>(`this`, ...`args`): `InstanceType`\<`T`\>

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:76

Used to create an instance of a smart contract. If your smart contract has a base class, you must use this method to instantiate it.

#### Type Parameters

• **T** *extends* (...`args`) => `InstanceType`\<`T`\>

#### Parameters

##### this

`T`

##### args

...`ConstructorParameters`\<`T`\>

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

`SmartContract.create`

***

### deserializeState()

> `static` **deserializeState**\<`T`\>(`this`, `serializedState`): `T`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:136

Deserializes the contract state from a ByteString.

#### Type Parameters

• **T** *extends* `OpcatState`

The type of the contract state extending OpcatState

#### Parameters

##### this

(...`args`) => `SmartContract`\<`T`\>

##### serializedState

`ByteString`

The serialized state as a ByteString

#### Returns

`T`

The deserialized state object of type T

#### Throws

Error if artifact is not loaded or state type is not defined

#### Inherited from

`SmartContract.deserializeState`

***

### isStateful()

> `static` **isStateful**(): `boolean`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:311

Checks if the contract has state by verifying if the state object exists and is not empty.

#### Returns

`boolean`

True if the contract has state, false otherwise.

#### Inherited from

`SmartContract.isStateful`

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* `SmartContract`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:63

This function is usually called on the frontend.
The contract class needs to call this function before instantiating.

#### Parameters

##### artifact

`Artifact`

a contract artifact json object

#### Returns

*typeof* `SmartContract`

#### Inherited from

`SmartContract.loadArtifact`

***

### serializeState()

> `static` **serializeState**\<`T`\>(`this`, `state`): `ByteString`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:126

Serializes the contract state into a ByteString.

#### Type Parameters

• **T** *extends* `OpcatState`

Type of the contract state extending OpcatState

#### Parameters

##### this

(...`args`) => `SmartContract`\<`T`\>

Constructor reference for type inference

##### state

`T`

The contract state object to serialize

#### Returns

`ByteString`

Serialized state as ByteString

#### Throws

Error if artifact is not loaded or state type is not defined

#### Inherited from

`SmartContract.serializeState`

***

### stateHash()

> `static` **stateHash**\<`T`\>(`this`, `state`): `ByteString`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:147

Computes the SHA-256 hash of the serialized contract state.

#### Type Parameters

• **T** *extends* `OpcatState`

Type extending OpcatState

#### Parameters

##### this

(...`args`) => `SmartContract`\<`T`\>

##### state

`T`

The contract state to hash

#### Returns

`ByteString`

ByteString containing the SHA-256 hash of the serialized state

#### Inherited from

`SmartContract.stateHash`

## Signature Verification

### checkMultiSig()

> **checkMultiSig**(`signatures`, `publickeys`): `boolean`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:106

Compares the first signature against each public key until it finds an ECDSA match.
Starting with the subsequent public key, it compares the second signature against
each remaining public key until it finds an ECDSA match. The process is repeated
until all signatures have been checked or not enough public keys remain
to produce a successful result. All signatures need to match a public key.
Because public keys are not checked again if they fail any signature comparison,
signatures must be placed in the scriptSig using the same order as their corresponding
public keys were placed in the scriptPubKey or redeemScript. If all signatures are
valid, 1 is returned, 0 otherwise. Due to a bug, one extra unused value is removed from the stack.

#### Parameters

##### signatures

`Sig`[]

##### publickeys

`PubKey`[]

#### Returns

`boolean`

#### Onchain

#### Inherited from

`SmartContract.checkMultiSig`

***

### checkSig()

> **checkSig**(`signature`, `publickey`, `errorMsg`?): `boolean`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContract.d.ts:92

A built-in function verifies an Schnorr signature. It takes two inputs from the stack, a public key (on top of the stack) and an Schnorr signature in its DER_CANONISED format concatenated with sighash flags.
It outputs true or false on the stack based on whether the signature check passes or fails. [see][https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#specification](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#specification)

#### Parameters

##### signature

`Sig`

##### publickey

`PubKey`

##### errorMsg?

`string`

#### Returns

`boolean`

#### Onchain

#### Inherited from

`SmartContract.checkSig`
