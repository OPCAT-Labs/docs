[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / IExtPsbt

# Interface: IExtPsbt

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:69](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/types.ts#L69)

Extended PSBT (Partially Signed Bitcoin Transaction) interface with additional contract-related functionality.

This interface extends the standard Psbt with methods for:
- Adding contract inputs/outputs
- Handling change outputs
- Estimating transaction size and fees
- Managing signatures

It provides a higher-level abstraction for working with smart contracts in Bitcoin transactions.

## Extends

- `Psbt`.`Contextual`

## Properties

### data

> `readonly` **data**: `Psbt`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:134](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L134)

#### Inherited from

`Psbt.data`

***

### isFinalized

> **isFinalized**: `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:137](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L137)

Whether the PSBT is finalized.

#### Inherited from

`Contextual.isFinalized`

***

### isFinalizing

> **isFinalizing**: `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:132](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L132)

Whether the PSBT starts finalizing.

#### Inherited from

`Contextual.isFinalizing`

***

### unsignedTx

> **unsignedTx**: [`Transaction`](../classes/Transaction.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:108](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/types.ts#L108)

The unsigned transaction when the PSBT is not finalized.
note:

## Accessors

### inputCount

#### Get Signature

> **get** **inputCount**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:180](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L180)

##### Returns

`number`

#### Inherited from

`Psbt.inputCount`

***

### locktime

#### Get Signature

> **get** **locktime**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:192](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L192)

##### Returns

`number`

#### Set Signature

> **set** **locktime**(`locktime`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:196](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L196)

##### Parameters

###### locktime

`number`

##### Returns

`void`

#### Inherited from

`Psbt.locktime`

***

### txInputs

#### Get Signature

> **get** **txInputs**(): `PsbtTxInput`[]

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:200](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L200)

##### Returns

`PsbtTxInput`[]

#### Inherited from

`Psbt.txInputs`

***

### txOutputs

#### Get Signature

> **get** **txOutputs**(): `PsbtTxOutput`[]

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:208](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L208)

##### Returns

`PsbtTxOutput`[]

#### Inherited from

`Psbt.txOutputs`

***

### version

#### Get Signature

> **get** **version**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:184](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L184)

##### Returns

`number`

#### Set Signature

> **set** **version**(`version`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:188](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L188)

##### Parameters

###### version

`number`

##### Returns

`void`

#### Inherited from

`Psbt.version`

## Methods

### addContractInput()

> **addContractInput**\<`Contract`\>(`contract`, `contractCall`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:75](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/types.ts#L75)

Add an input to spend the contract.

#### Type Parameters

• **Contract** *extends* [`SmartContract`](../classes/SmartContract.md)\<`StructObject`\>

#### Parameters

##### contract

`Contract`

the contract

##### contractCall

[`ContractCall`](../type-aliases/ContractCall.md)\<`Contract`\>

the contract call function, such as `(contract: Counter) => { contract.increase() }`, used to determine how to unlock the contract.

#### Returns

`this`

***

### addContractOutput()

> **addContractOutput**(`contract`, `satoshis`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:82](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/types.ts#L82)

Add an output to create new contract.

#### Parameters

##### contract

[`SmartContract`](../classes/SmartContract.md)\<`StructObject`\>

a new contract

##### satoshis

`number`

the output includes the amount of satoshis.

#### Returns

`this`

***

### addInput()

> **addInput**(`inputData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:276](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L276)

#### Parameters

##### inputData

`PsbtInputExtended`

#### Returns

`this`

#### Inherited from

`Psbt.addInput`

***

### addInputs()

> **addInputs**(`inputDatas`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:271](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L271)

#### Parameters

##### inputDatas

`PsbtInputExtended`[]

#### Returns

`this`

#### Inherited from

`Psbt.addInputs`

***

### addOutput()

> **addOutput**(`outputData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:306](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L306)

#### Parameters

##### outputData

`PsbtOutputExtended`

#### Returns

`this`

#### Inherited from

`Psbt.addOutput`

***

### addOutputs()

> **addOutputs**(`outputDatas`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:301](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L301)

#### Parameters

##### outputDatas

`PsbtOutputExtended`[]

#### Returns

`this`

#### Inherited from

`Psbt.addOutputs`

***

### addUnknownKeyValToGlobal()

> **addUnknownKeyValToGlobal**(`keyVal`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:753](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L753)

#### Parameters

##### keyVal

`KeyValue`

#### Returns

`this`

#### Inherited from

`Psbt.addUnknownKeyValToGlobal`

***

### addUnknownKeyValToInput()

> **addUnknownKeyValToInput**(`inputIndex`, `keyVal`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:758](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L758)

#### Parameters

##### inputIndex

`number`

##### keyVal

`KeyValue`

#### Returns

`this`

#### Inherited from

`Psbt.addUnknownKeyValToInput`

***

### addUnknownKeyValToOutput()

> **addUnknownKeyValToOutput**(`outputIndex`, `keyVal`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:763](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L763)

#### Parameters

##### outputIndex

`number`

##### keyVal

`KeyValue`

#### Returns

`this`

#### Inherited from

`Psbt.addUnknownKeyValToOutput`

***

### change()

> **change**(`address`, `feeRate`, `data`?): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:90](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/types.ts#L90)

Add a change output to the transaction if neccesarry.

#### Parameters

##### address

`string`

the address to send the change to

##### feeRate

`number`

the fee rate in satoshi per byte

##### data?

`Uint8Array`

optional data to be included in the change output

#### Returns

`this`

***

### clearFinalizedInput()

> **clearFinalizedInput**(`inputIndex`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:768](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L768)

#### Parameters

##### inputIndex

`number`

#### Returns

`this`

#### Inherited from

`Psbt.clearFinalizedInput`

***

### clone()

> **clone**(): `Psbt`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:229](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L229)

#### Returns

`Psbt`

#### Inherited from

`Psbt.clone`

***

### combine()

> **combine**(...`those`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:224](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L224)

#### Parameters

##### those

...`Psbt`[]

#### Returns

`this`

#### Inherited from

`Psbt.combine`

***

### estimateFee()

> **estimateFee**(`feeRate`): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:102](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/types.ts#L102)

Estimate the fee of the transaction.

#### Parameters

##### feeRate

`number`

the fee rate in satoshi per byte

#### Returns

`number`

the estimated fee in satoshis

***

### estimateSize()

> **estimateSize**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:95](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/types.ts#L95)

Estimate the size of the transaction.

#### Returns

`number`

***

### extractTransaction()

> **extractTransaction**(`disableFeeCheck`?): [`Transaction`](../classes/Transaction.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:337](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L337)

#### Parameters

##### disableFeeCheck?

`boolean`

#### Returns

[`Transaction`](../classes/Transaction.md)

#### Inherited from

`Psbt.extractTransaction`

***

### finalizeAllInputs()

> **finalizeAllInputs**(): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:367](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L367)

#### Returns

`this`

#### Inherited from

`Psbt.finalizeAllInputs`

***

### finalizeInput()

> **finalizeInput**(`inputIndex`, `finalScriptsFunc`?): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:373](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L373)

#### Parameters

##### inputIndex

`number`

##### finalScriptsFunc?

`FinalScriptsFunc`

#### Returns

`this`

#### Inherited from

`Psbt.finalizeInput`

***

### getB2GInputUtxo()

> **getB2GInputUtxo**(`inputIndex`): [`B2GUTXO`](../type-aliases/B2GUTXO.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:150](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L150)

Get the b2g contract utxo of the current input

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

[`B2GUTXO`](../type-aliases/B2GUTXO.md)

the stateful contract utxo of the current input

#### Inherited from

`Contextual.getB2GInputUtxo`

***

### getChangeInfo()

> **getChangeInfo**(): [`TxOut`](../type-aliases/TxOut.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:127](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L127)

Get the change output information.

#### Returns

[`TxOut`](../type-aliases/TxOut.md)

#### Inherited from

`Contextual.getChangeInfo`

***

### getFee()

> **getFee**(): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:358](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L358)

#### Returns

`bigint`

#### Inherited from

`Psbt.getFee`

***

### getFeeRate()

> **getFeeRate**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:349](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L349)

#### Returns

`number`

#### Inherited from

`Psbt.getFeeRate`

***

### getInputCtx()

> **getInputCtx**(`inputIndex`): `InputContext`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:93](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L93)

Get the context of the current PSBT input in which this contract is called or spent.

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

`InputContext`

the context of the current PSBT input

#### Inherited from

`Contextual.getInputCtx`

***

### getInputType()

> **getInputType**(`inputIndex`): `AllScriptType`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:412](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L412)

#### Parameters

##### inputIndex

`number`

#### Returns

`AllScriptType`

#### Inherited from

`Psbt.getInputType`

***

### getlockTime()

> **getlockTime**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:99](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L99)

Get the lockTime of the current PSBT.

#### Returns

`number`

lockTime of the current PSBT input

#### Inherited from

`Contextual.getlockTime`

***

### getSequence()

> **getSequence**(`inputIndex`): `number`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:106](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L106)

Get the sequence of the input by inputIndex.

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

`number`

the sequence of the PSBT input

#### Inherited from

`Contextual.getSequence`

***

### getSig()

> **getSig**(`inputIndex`, `options`): [`Sig`](../type-aliases/Sig.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:116](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/types.ts#L116)

Get signature from signed psbt by inputIndex

#### Parameters

##### inputIndex

`number`

index of the input

##### options

`Omit`\<[`ToSignInput`](ToSignInput.md), `"index"`\>

options to find signatures

#### Returns

[`Sig`](../type-aliases/Sig.md)

the signature, if no signature found, return a dummy signature.

***

### getSigHashType()

> **getSigHashType**(`inputIndex`): [`SigHashType`](../enumerations/SigHashType.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:122](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L122)

Get the sighash type for the current input.

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

#### Returns

[`SigHashType`](../enumerations/SigHashType.md)

the sighash type for the current input

#### Inherited from

`Contextual.getSigHashType`

***

### getSpentDataHashes()

> **getSpentDataHashes**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:143](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L143)

Get the output state hashes of the current transaction

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

the output state hashes of the current transaction

#### Inherited from

`Contextual.getSpentDataHashes`

***

### inputHasHDKey()

> **inputHasHDKey**(`inputIndex`, `root`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:428](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L428)

#### Parameters

##### inputIndex

`number`

##### root

`HDSigner`

#### Returns

`boolean`

#### Inherited from

`Psbt.inputHasHDKey`

***

### inputHasPubkey()

> **inputHasPubkey**(`inputIndex`, `pubkey`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:423](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L423)

#### Parameters

##### inputIndex

`number`

##### pubkey

`Uint8Array`

#### Returns

`boolean`

#### Inherited from

`Psbt.inputHasPubkey`

***

### outputHasHDKey()

> **outputHasHDKey**(`outputIndex`, `root`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:440](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L440)

#### Parameters

##### outputIndex

`number`

##### root

`HDSigner`

#### Returns

`boolean`

#### Inherited from

`Psbt.outputHasHDKey`

***

### outputHasPubkey()

> **outputHasPubkey**(`outputIndex`, `pubkey`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:436](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L436)

#### Parameters

##### outputIndex

`number`

##### pubkey

`Uint8Array`

#### Returns

`boolean`

#### Inherited from

`Psbt.outputHasPubkey`

***

### setInputSequence()

> **setInputSequence**(`inputIndex`, `sequence`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:259](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L259)

#### Parameters

##### inputIndex

`number`

##### sequence

`number`

#### Returns

`this`

#### Inherited from

`Psbt.setInputSequence`

***

### setLocktime()

> **setLocktime**(`locktime`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:250](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L250)

#### Parameters

##### locktime

`number`

#### Returns

`this`

#### Inherited from

`Psbt.setLocktime`

***

### setMaximumFeeRate()

> **setMaximumFeeRate**(`satoshiPerByte`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:236](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L236)

#### Parameters

##### satoshiPerByte

`number`

#### Returns

`void`

#### Inherited from

`Psbt.setMaximumFeeRate`

***

### setSighashType()

> **setSighashType**(`inputIndex`, `sigHashType`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:115](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L115)

Set the sighash type for the current input.
used for `@method` decorator to set the sighash type for the current input.
sighash type is used to generate the preimage for the current input.

#### Parameters

##### inputIndex

`number`

the index of the input in the PSBT

##### sigHashType

[`SigHashType`](../enumerations/SigHashType.md)

the sighash type to set

#### Returns

`void`

#### Inherited from

`Contextual.setSighashType`

***

### setVersion()

> **setVersion**(`version`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:241](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L241)

#### Parameters

##### version

`number`

#### Returns

`this`

#### Inherited from

`Psbt.setVersion`

***

### signAllInputs()

> **signAllInputs**(`keyPair`, `sighashTypes`?): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:596](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L596)

#### Parameters

##### keyPair

`Signer`

##### sighashTypes?

`number`[]

#### Returns

`this`

#### Inherited from

`Psbt.signAllInputs`

***

### signAllInputsAsync()

> **signAllInputsAsync**(`keyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:618](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L618)

#### Parameters

##### keyPair

`Signer` | `SignerAsync`

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Psbt.signAllInputsAsync`

***

### signAllInputsHD()

> **signAllInputsHD**(`hdKeyPair`, `sighashTypes`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:503](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L503)

#### Parameters

##### hdKeyPair

`HDSigner`

##### sighashTypes

`number`[] = `...`

#### Returns

`this`

#### Inherited from

`Psbt.signAllInputsHD`

***

### signAllInputsHDAsync()

> **signAllInputsHDAsync**(`hdKeyPair`, `sighashTypes`): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:526](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L526)

#### Parameters

##### hdKeyPair

`HDSigner` | `HDSignerAsync`

##### sighashTypes

`number`[] = `...`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Psbt.signAllInputsHDAsync`

***

### signAndFinalize()

> **signAndFinalize**(`singer`): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:123](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/types.ts#L123)

Signs the PSBT with the provided signer and finalizes all inputs.

#### Parameters

##### singer

[`Signer`](Signer.md)

#### Returns

`Promise`\<`void`\>

A promise that resolves when signing and finalization are complete.

***

### signInput()

> **signInput**(`inputIndex`, `keyPair`, `sighashTypes`?): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:652](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L652)

#### Parameters

##### inputIndex

`number`

##### keyPair

`Signer`

##### sighashTypes?

`number`[]

#### Returns

`this`

#### Inherited from

`Psbt.signInput`

***

### signInputAsync()

> **signInputAsync**(`inputIndex`, `keyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:685](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L685)

#### Parameters

##### inputIndex

`number`

##### keyPair

`Signer` | `SignerAsync`

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Psbt.signInputAsync`

***

### signInputHD()

> **signInputHD**(`inputIndex`, `hdKeyPair`, `sighashTypes`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:558](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L558)

#### Parameters

##### inputIndex

`number`

##### hdKeyPair

`HDSigner`

##### sighashTypes

`number`[] = `...`

#### Returns

`this`

#### Inherited from

`Psbt.signInputHD`

***

### signInputHDAsync()

> **signInputHDAsync**(`inputIndex`, `hdKeyPair`, `sighashTypes`): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:575](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L575)

#### Parameters

##### inputIndex

`number`

##### hdKeyPair

`HDSigner` | `HDSignerAsync`

##### sighashTypes

`number`[] = `...`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Psbt.signInputHDAsync`

***

### toBase64()

> **toBase64**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:733](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L733)

#### Returns

`string`

#### Inherited from

`Psbt.toBase64`

***

### toBuffer()

> **toBuffer**(): `Uint8Array`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:723](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L723)

#### Returns

`Uint8Array`

#### Inherited from

`Psbt.toBuffer`

***

### toHex()

> **toHex**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:728](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L728)

#### Returns

`string`

#### Inherited from

`Psbt.toHex`

***

### updateGlobal()

> **updateGlobal**(`updateData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:738](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L738)

#### Parameters

##### updateData

`PsbtGlobalUpdate`

#### Returns

`this`

#### Inherited from

`Psbt.updateGlobal`

***

### updateInput()

> **updateInput**(`inputIndex`, `updateData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:743](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L743)

#### Parameters

##### inputIndex

`number`

##### updateData

`PsbtInputUpdate`

#### Returns

`this`

#### Inherited from

`Psbt.updateInput`

***

### updateOutput()

> **updateOutput**(`outputIndex`, `updateData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:748](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L748)

#### Parameters

##### outputIndex

`number`

##### updateData

`PsbtOutputUpdate`

#### Returns

`this`

#### Inherited from

`Psbt.updateOutput`

***

### validateSignaturesOfAllInputs()

> **validateSignaturesOfAllInputs**(`validator`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:448](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L448)

#### Parameters

##### validator

`ValidateSigFunction`

#### Returns

`boolean`

#### Inherited from

`Psbt.validateSignaturesOfAllInputs`

***

### validateSignaturesOfInput()

> **validateSignaturesOfInput**(`inputIndex`, `validator`, `pubkey`?): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:456](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L456)

#### Parameters

##### inputIndex

`number`

##### validator

`ValidateSigFunction`

##### pubkey?

`Uint8Array`

#### Returns

`boolean`

#### Inherited from

`Psbt.validateSignaturesOfInput`
