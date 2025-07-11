[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / SmartContract

# Class: SmartContract\<StateT\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:54](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L54)

The main contract class. To write a contract, extend this class as such:

## Onchain

## Example

```ts
class YourSmartContract extends SmartContract {
  // your smart contract code here
}
```

## Extends

- `AbstractContract`

## Type Parameters

• **StateT** *extends* [`OpcatState`](../type-aliases/OpcatState.md) = `undefined`

## Constructors

### new SmartContract()

> **new SmartContract**\<`StateT`\>(...`args`): [`SmartContract`](SmartContract.md)\<`StateT`\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:106](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L106)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`SmartContract`](SmartContract.md)\<`StateT`\>

#### Overrides

`AbstractContract.constructor`

## Backtrace

### backtraceToOutpoint()

> **backtraceToOutpoint**(`backtraceInfo`, `genesisOutpoint`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:654](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L654)

Check whether the contract can be traced back to the genesis outpoint.

#### Parameters

##### backtraceInfo

[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)

the backtrace info to verify, including prevTx and prevPrevTx informations

##### genesisOutpoint

[`ByteString`](../type-aliases/ByteString.md)

expected genesis outpoint to be traced back to

#### Returns

`boolean`

true if the contract can be backtraced to the genesis outpoint. Otherwise false.

#### Onchain

#### Overrides

`AbstractContract.backtraceToOutpoint`

***

### backtraceToScript()

> **backtraceToScript**(`backtraceInfo`, `genesisScript`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:666](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L666)

Check whether the contract can be traced back to the genesis script.

#### Parameters

##### backtraceInfo

[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)

the backtrace info to verify, including prevTx and prevPrevTx informations

##### genesisScript

[`ByteString`](../type-aliases/ByteString.md)

expected genesis script to be traced back to

#### Returns

`boolean`

true if the contract can be backtraced to the genesis script. Otherwise false.

#### Onchain

#### Overrides

`AbstractContract.backtraceToScript`

## Other

### lockingScript

> `readonly` **lockingScript**: `Script`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:89](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L89)

Locking script corresponding to the SmartContract

***

### state

> **state**: `StateT`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:84](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L84)

The state of the contract UTXO, usually committed to the first OP_RETURN output, is revealed when spending.

#### Onchain

***

### utxo?

> `optional` **utxo**: [`ExtUtxo`](../type-aliases/ExtUtxo.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:78](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L78)

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:60](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L60)

Bitcoin Contract Artifact

***

### changeInfo

#### Get Signature

> **get** **changeInfo**(): [`TxOut`](../type-aliases/TxOut.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:518](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L518)

Get the change info of the change output for current psbt.

##### Onchain

##### Returns

[`TxOut`](../type-aliases/TxOut.md)

the change info of current psbt

***

### ctx

#### Get Signature

> **get** **ctx**(): `IContext`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:319](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L319)

Get the context details of the current PSBT input in which this contract is called or spent.

##### Onchain

##### Returns

`IContext`

#### Overrides

`AbstractContract.ctx`

***

### debug

#### Get Signature

> **get** **debug**(): `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:527](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L527)

A set of functions for debugging contracts, which can only be called in `@method` methods.

##### Onchain

##### Returns

`object`

###### diffOutputs()

> **diffOutputs**: (`outputsByte`) => `void`

###### Parameters

###### outputsByte

[`ByteString`](../type-aliases/ByteString.md)

###### Returns

`void`

***

### inputContext

#### Get Signature

> **get** **inputContext**(): `InputContext`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:371](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L371)

Get the context of the current PSBT input in which this contract is called or spent.

##### Returns

`InputContext`

the context of the current PSBT input

***

### spentPsbt

#### Get Signature

> **get** **spentPsbt**(): `Contextual`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:354](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L354)

Gets the PSBT (Partially Signed Bitcoin Transaction) that was used to spend this contract.
Returns undefined if no spending transaction exists.

##### Returns

`Contextual`

***

### bindToUtxo()

> **bindToUtxo**(`utxo`): `this`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:690](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L690)

Binds the smart contract to a UTXO by verifying and setting its script.

#### Parameters

##### utxo

The UTXO to bind to (script field is optional)

`Optional`\<[`ExtUtxo`](../type-aliases/ExtUtxo.md), `"script"`\> | `Optional`\<[`UTXO`](../interfaces/UTXO.md), `"script"`\>

#### Returns

`this`

The contract instance for chaining

#### Throws

Error if the UTXO's script exists and doesn't match the contract's locking script

***

### buildChangeOutput()

> **buildChangeOutput**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:208](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L208)

A built-in function to create an [change output][https://en.bitcoin.it/wiki/Change](https://en.bitcoin.it/wiki/Change).

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

#### Onchain

#### Overrides

`AbstractContract.buildChangeOutput`

***

### checkInputState()

> **checkInputState**(`inputIndex`, `serializedState`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:299](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L299)

check state of the input. 
option in the `@method()` decorator to false.

#### Parameters

##### inputIndex

[`Int32`](../type-aliases/Int32.md)

index of the input

##### serializedState

[`ByteString`](../type-aliases/ByteString.md)

the state of the input

#### Returns

`boolean`

success if stateHash is valid

#### Onchain

#### Overrides

`AbstractContract.checkInputState`

***

### checkOutputs()

> **checkOutputs**(`outputs`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:568](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L568)

Check the outputs with the context of current transaction.

#### Parameters

##### outputs

[`ByteString`](../type-aliases/ByteString.md)

the expected serialized outputs of the current transaction

#### Returns

`boolean`

true if the outputs are not consistent with the transaction context, otherwise false.

#### Onchain

#### Overrides

`AbstractContract.checkOutputs`

***

### checkSHPreimage()

> **checkSHPreimage**(`shPreimage`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:161](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L161)

Using the [OP_PUSH_TX][https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1](https://medium.com/@xiaohuiliu/op-push-tx-3d3d279174c1) technique, check if `shPreimage` is the preimage of the current transaction.

#### Parameters

##### shPreimage

[`SHPreimage`](../type-aliases/SHPreimage.md)

#### Returns

`boolean`

true if `shPreimage` is the preimage of the current transaction. Otherwise false.

#### Onchain

#### Overrides

`AbstractContract.checkSHPreimage`

***

### getCallData()

> **getCallData**(): `MethodCallData`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:591](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L591)

Gets the method call data for the current smart contract.

#### Returns

`MethodCallData`

The method call data object.

#### Throws

If no method call is found.

***

### getUnlockingScript()

> **getUnlockingScript**(): `Script`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:581](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L581)

Returns the raw arguments from the call data of the smart contract.

#### Returns

`Script`

The raw arguments extracted from the call data.

***

### isPubFunction()

> **isPubFunction**(`method`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:407](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L407)

Checks if the given method is a public function in the smart contract.

#### Parameters

##### method

`string`

The method name to check.

#### Returns

`boolean`

True if the method is a public function, false otherwise.

***

### next()

> **next**(`newState`): `this`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:676](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L676)

Get a new contract instance with the new state.

#### Parameters

##### newState

`StateT`

the new state

#### Returns

`this`

the new covenant

***

### setSighashType()

> **setSighashType**(`sigHashType`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:362](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L362)

Sets the signature hash type for the current input in the PSBT.

#### Parameters

##### sigHashType

[`SigHashType`](../enumerations/SigHashType.md)

The signature hash type to set

#### Returns

`void`

***

### spentFromInput()

> **spentFromInput**(`psbt`, `inputIndex`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:345](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L345)

Mark the contract instance as spent from the input of the PSBT.

#### Parameters

##### psbt

`Contextual`

##### inputIndex

`number`

#### Returns

`void`

***

### timeLock()

> **timeLock**(`nLockTime`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:623](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L623)

Checks a locktime parameter with the transaction's locktime.
There are two times of nLockTime: lock-by-blockheight and lock-by-blocktime,
distinguished by whether nLockTime < LOCKTIME_THRESHOLD = 500000000

See the corresponding code on bitcoin core:
https://github.com/bitcoin/bitcoin/blob/ffd75adce01a78b3461b3ff05bcc2b530a9ce994/src/script/interpreter.cpp#L1129

See the bip65 for specification
https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki#summary

#### Parameters

##### nLockTime

[`Int32`](../type-aliases/Int32.md)

the locktime read from the script

#### Returns

`boolean`

true if the transaction's locktime is less than or equal to
                  the transaction's locktime

#### Onchain

#### Overrides

`AbstractContract.timeLock`

***

### create()

> `static` **create**\<`T`\>(`this`, ...`args`): `InstanceType`\<`T`\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:144](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L144)

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

***

### deserializeState()

> `static` **deserializeState**\<`T`\>(`this`, `serializedState`): `T`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:258](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L258)

Deserializes the contract state from a ByteString.

#### Type Parameters

• **T** *extends* `StructObject`

The type of the contract state extending OpcatState

#### Parameters

##### this

(...`args`) => [`SmartContract`](SmartContract.md)\<`T`\>

##### serializedState

[`ByteString`](../type-aliases/ByteString.md)

The serialized state as a ByteString

#### Returns

`T`

The deserialized state object of type T

#### Throws

Error if artifact is not loaded or state type is not defined

***

### isStateful()

> `static` **isStateful**(): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:708](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L708)

Checks if the contract has state by verifying if the state object exists and is not empty.

#### Returns

`boolean`

True if the contract has state, false otherwise.

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContract`](SmartContract.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:96](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L96)

This function is usually called on the frontend.
The contract class needs to call this function before instantiating.

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

a contract artifact json object

#### Returns

*typeof* [`SmartContract`](SmartContract.md)

***

### serializeState()

> `static` **serializeState**\<`T`\>(`this`, `state`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:232](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L232)

Serializes the contract state into a ByteString.

#### Type Parameters

• **T** *extends* `StructObject`

Type of the contract state extending OpcatState

#### Parameters

##### this

(...`args`) => [`SmartContract`](SmartContract.md)\<`T`\>

Constructor reference for type inference

##### state

`T`

The contract state object to serialize

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

Serialized state as ByteString

#### Throws

Error if artifact is not loaded or state type is not defined

#### Overrides

`AbstractContract.serializeState`

***

### stateHash()

> `static` **stateHash**\<`T`\>(`this`, `state`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:284](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L284)

Computes the SHA-256 hash of the serialized contract state.

#### Type Parameters

• **T** *extends* `StructObject`

Type extending OpcatState

#### Parameters

##### this

(...`args`) => [`SmartContract`](SmartContract.md)\<`T`\>

##### state

`T`

The contract state to hash

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

ByteString containing the SHA-256 hash of the serialized state

#### Overrides

`AbstractContract.stateHash`

## Signature Verification

### checkMultiSig()

> **checkMultiSig**(`signatures`, `publickeys`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:199](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L199)

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

[`Sig`](../type-aliases/Sig.md)[]

##### publickeys

[`PubKey`](../type-aliases/PubKey.md)[]

#### Returns

`boolean`

#### Onchain

***

### checkSig()

> **checkSig**(`signature`, `publickey`, `errorMsg`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts:171](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContract.ts#L171)

A built-in function verifies an Schnorr signature. It takes two inputs from the stack, a public key (on top of the stack) and an Schnorr signature in its DER_CANONISED format concatenated with sighash flags.
It outputs true or false on the stack based on whether the signature check passes or fails. [see][https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#specification](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#specification)

#### Parameters

##### signature

[`Sig`](../type-aliases/Sig.md)

##### publickey

[`PubKey`](../type-aliases/PubKey.md)

##### errorMsg

`string` = `'signature check failed'`

#### Returns

`boolean`

#### Onchain

#### Overrides

`AbstractContract.checkSig`
