[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / IExtPsbt

# Interface: IExtPsbt

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:69](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/types.ts#L69)

Extended PSBT (Partially Signed Bitcoin Transaction) interface with additional contract-related functionality.

This interface extends the standard Psbt with methods for:
- Adding contract inputs/outputs
- Handling change outputs
- Estimating transaction size and fees
- Managing signatures

It provides a higher-level abstraction for working with smart contracts in Bitcoin transactions.

## Extends

- [`Psbt`](../classes/Psbt.md).`Contextual`

## Properties

### data

> `readonly` **data**: `Psbt`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:134](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L134)

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`data`](../classes/Psbt.md#data-1)

***

### isFinalized

> **isFinalized**: `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:137](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L137)

Whether the PSBT is finalized.

#### Inherited from

`Contextual.isFinalized`

***

### isFinalizing

> **isFinalizing**: `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:132](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L132)

Whether the PSBT starts finalizing.

#### Inherited from

`Contextual.isFinalizing`

***

### unsignedTx

> **unsignedTx**: [`Transaction`](../classes/Transaction.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:108](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/types.ts#L108)

The unsigned transaction when the PSBT is not finalized.
note:

## Accessors

### inputCount

#### Get Signature

> **get** **inputCount**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:180](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L180)

##### Returns

`number`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`inputCount`](../classes/Psbt.md#inputcount)

***

### locktime

#### Get Signature

> **get** **locktime**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:192](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L192)

##### Returns

`number`

#### Set Signature

> **set** **locktime**(`locktime`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:196](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L196)

##### Parameters

###### locktime

`number`

##### Returns

`void`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`locktime`](../classes/Psbt.md#locktime)

***

### txInputs

#### Get Signature

> **get** **txInputs**(): `PsbtTxInput`[]

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:200](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L200)

##### Returns

`PsbtTxInput`[]

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`txInputs`](../classes/Psbt.md#txinputs)

***

### txOutputs

#### Get Signature

> **get** **txOutputs**(): `PsbtTxOutput`[]

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:208](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L208)

##### Returns

`PsbtTxOutput`[]

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`txOutputs`](../classes/Psbt.md#txoutputs)

***

### version

#### Get Signature

> **get** **version**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:184](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L184)

##### Returns

`number`

#### Set Signature

> **set** **version**(`version`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:188](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L188)

##### Parameters

###### version

`number`

##### Returns

`void`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`version`](../classes/Psbt.md#version)

## Methods

### addContractInput()

> **addContractInput**\<`Contract`\>(`contract`, `contractCall`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:75](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/types.ts#L75)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:82](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/types.ts#L82)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:284](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L284)

#### Parameters

##### inputData

`PsbtInputExtended`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`addInput`](../classes/Psbt.md#addinput)

***

### addInputs()

> **addInputs**(`inputDatas`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:279](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L279)

#### Parameters

##### inputDatas

`PsbtInputExtended`[]

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`addInputs`](../classes/Psbt.md#addinputs)

***

### addOutput()

> **addOutput**(`outputData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:317](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L317)

#### Parameters

##### outputData

`PsbtOutputExtended` & `object`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`addOutput`](../classes/Psbt.md#addoutput)

***

### addOutputs()

> **addOutputs**(`outputDatas`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:312](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L312)

#### Parameters

##### outputDatas

`PsbtOutputExtended`[]

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`addOutputs`](../classes/Psbt.md#addoutputs)

***

### addUnknownKeyValToGlobal()

> **addUnknownKeyValToGlobal**(`keyVal`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:805](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L805)

#### Parameters

##### keyVal

`KeyValue`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`addUnknownKeyValToGlobal`](../classes/Psbt.md#addunknownkeyvaltoglobal)

***

### addUnknownKeyValToInput()

> **addUnknownKeyValToInput**(`inputIndex`, `keyVal`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:810](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L810)

#### Parameters

##### inputIndex

`number`

##### keyVal

`KeyValue`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`addUnknownKeyValToInput`](../classes/Psbt.md#addunknownkeyvaltoinput)

***

### addUnknownKeyValToOutput()

> **addUnknownKeyValToOutput**(`outputIndex`, `keyVal`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:815](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L815)

#### Parameters

##### outputIndex

`number`

##### keyVal

`KeyValue`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`addUnknownKeyValToOutput`](../classes/Psbt.md#addunknownkeyvaltooutput)

***

### change()

> **change**(`address`, `feeRate`, `data`?): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:90](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/types.ts#L90)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:820](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L820)

#### Parameters

##### inputIndex

`number`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`clearFinalizedInput`](../classes/Psbt.md#clearfinalizedinput)

***

### clone()

> **clone**(): [`Psbt`](../classes/Psbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:237](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L237)

#### Returns

[`Psbt`](../classes/Psbt.md)

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`clone`](../classes/Psbt.md#clone)

***

### combine()

> **combine**(...`those`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:232](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L232)

#### Parameters

##### those

...[`Psbt`](../classes/Psbt.md)[]

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`combine`](../classes/Psbt.md#combine)

***

### estimateFee()

> **estimateFee**(`feeRate`): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:102](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/types.ts#L102)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:95](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/types.ts#L95)

Estimate the size of the transaction.

#### Returns

`number`

***

### extractTransaction()

> **extractTransaction**(`disableFeeCheck`?): [`Transaction`](../classes/Transaction.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:348](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L348)

#### Parameters

##### disableFeeCheck?

`boolean`

#### Returns

[`Transaction`](../classes/Transaction.md)

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`extractTransaction`](../classes/Psbt.md#extracttransaction)

***

### finalizeAllInputs()

> **finalizeAllInputs**(): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:378](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L378)

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`finalizeAllInputs`](../classes/Psbt.md#finalizeallinputs)

***

### finalizeInput()

> **finalizeInput**(`inputIndex`, `finalScriptsFunc`?): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:384](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L384)

#### Parameters

##### inputIndex

`number`

##### finalScriptsFunc?

`FinalScriptsFunc`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`finalizeInput`](../classes/Psbt.md#finalizeinput)

***

### getB2GInputUtxo()

> **getB2GInputUtxo**(`inputIndex`): [`B2GUTXO`](../type-aliases/B2GUTXO.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:150](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L150)

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

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:127](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L127)

Get the change output information.

#### Returns

[`TxOut`](../type-aliases/TxOut.md)

#### Inherited from

`Contextual.getChangeInfo`

***

### getFee()

> **getFee**(): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:369](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L369)

#### Returns

`bigint`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`getFee`](../classes/Psbt.md#getfee)

***

### getFeeRate()

> **getFeeRate**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:360](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L360)

#### Returns

`number`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`getFeeRate`](../classes/Psbt.md#getfeerate)

***

### getInputCtx()

> **getInputCtx**(`inputIndex`): `InputContext`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:93](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L93)

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

### getInputOutput()

> **getInputOutput**(`inputIndex`): [`OpcatUtxo`](OpcatUtxo.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:228](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L228)

#### Parameters

##### inputIndex

`number`

The index of the input to get the output for.

#### Returns

[`OpcatUtxo`](OpcatUtxo.md)

The previous output of the input.

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`getInputOutput`](../classes/Psbt.md#getinputoutput)

***

### getInputType()

> **getInputType**(`inputIndex`): `AllScriptType`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:421](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L421)

#### Parameters

##### inputIndex

`number`

#### Returns

`AllScriptType`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`getInputType`](../classes/Psbt.md#getinputtype)

***

### getlockTime()

> **getlockTime**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:99](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L99)

Get the lockTime of the current PSBT.

#### Returns

`number`

lockTime of the current PSBT input

#### Inherited from

`Contextual.getlockTime`

***

### getSequence()

> **getSequence**(`inputIndex`): `number`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:106](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L106)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:116](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/types.ts#L116)

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

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:122](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L122)

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

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:143](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L143)

Get the output state hashes of the current transaction

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

the output state hashes of the current transaction

#### Inherited from

`Contextual.getSpentDataHashes`

***

### inputHasHDKey()

> **inputHasHDKey**(`inputIndex`, `root`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:437](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L437)

#### Parameters

##### inputIndex

`number`

##### root

`HDSigner`

#### Returns

`boolean`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`inputHasHDKey`](../classes/Psbt.md#inputhashdkey)

***

### inputHasPubkey()

> **inputHasPubkey**(`inputIndex`, `pubkey`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:432](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L432)

#### Parameters

##### inputIndex

`number`

##### pubkey

`Uint8Array`

#### Returns

`boolean`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`inputHasPubkey`](../classes/Psbt.md#inputhaspubkey)

***

### outputHasHDKey()

> **outputHasHDKey**(`outputIndex`, `root`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:449](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L449)

#### Parameters

##### outputIndex

`number`

##### root

`HDSigner`

#### Returns

`boolean`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`outputHasHDKey`](../classes/Psbt.md#outputhashdkey)

***

### outputHasPubkey()

> **outputHasPubkey**(`outputIndex`, `pubkey`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:445](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L445)

#### Parameters

##### outputIndex

`number`

##### pubkey

`Uint8Array`

#### Returns

`boolean`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`outputHasPubkey`](../classes/Psbt.md#outputhaspubkey)

***

### setInputSequence()

> **setInputSequence**(`inputIndex`, `sequence`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:267](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L267)

#### Parameters

##### inputIndex

`number`

##### sequence

`number`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`setInputSequence`](../classes/Psbt.md#setinputsequence)

***

### setLocktime()

> **setLocktime**(`locktime`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:258](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L258)

#### Parameters

##### locktime

`number`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`setLocktime`](../classes/Psbt.md#setlocktime)

***

### setMaximumFeeRate()

> **setMaximumFeeRate**(`satoshiPerByte`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:244](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L244)

#### Parameters

##### satoshiPerByte

`number`

#### Returns

`void`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`setMaximumFeeRate`](../classes/Psbt.md#setmaximumfeerate)

***

### setSighashType()

> **setSighashType**(`inputIndex`, `sigHashType`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/context.ts:115](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/context.ts#L115)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:249](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L249)

#### Parameters

##### version

`number`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`setVersion`](../classes/Psbt.md#setversion)

***

### signAllInputs()

> **signAllInputs**(`keyPair`, `sighashTypes`?): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:605](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L605)

#### Parameters

##### keyPair

`Signer`

##### sighashTypes?

`number`[]

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`signAllInputs`](../classes/Psbt.md#signallinputs)

***

### signAllInputsAsync()

> **signAllInputsAsync**(`keyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:627](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L627)

#### Parameters

##### keyPair

`Signer` | `SignerAsync`

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`signAllInputsAsync`](../classes/Psbt.md#signallinputsasync)

***

### signAllInputsHD()

> **signAllInputsHD**(`hdKeyPair`, `sighashTypes`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:512](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L512)

#### Parameters

##### hdKeyPair

`HDSigner`

##### sighashTypes

`number`[] = `...`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`signAllInputsHD`](../classes/Psbt.md#signallinputshd)

***

### signAllInputsHDAsync()

> **signAllInputsHDAsync**(`hdKeyPair`, `sighashTypes`): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:535](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L535)

#### Parameters

##### hdKeyPair

`HDSigner` | `HDSignerAsync`

##### sighashTypes

`number`[] = `...`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`signAllInputsHDAsync`](../classes/Psbt.md#signallinputshdasync)

***

### signAndFinalize()

> **signAndFinalize**(`singer`): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:123](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/types.ts#L123)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:661](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L661)

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

[`Psbt`](../classes/Psbt.md).[`signInput`](../classes/Psbt.md#signinput)

***

### signInputAsync()

> **signInputAsync**(`inputIndex`, `keyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:694](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L694)

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

[`Psbt`](../classes/Psbt.md).[`signInputAsync`](../classes/Psbt.md#signinputasync)

***

### signInputHD()

> **signInputHD**(`inputIndex`, `hdKeyPair`, `sighashTypes`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:567](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L567)

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

[`Psbt`](../classes/Psbt.md).[`signInputHD`](../classes/Psbt.md#signinputhd)

***

### signInputHDAsync()

> **signInputHDAsync**(`inputIndex`, `hdKeyPair`, `sighashTypes`): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:584](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L584)

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

[`Psbt`](../classes/Psbt.md).[`signInputHDAsync`](../classes/Psbt.md#signinputhdasync)

***

### toBase64()

> **toBase64**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:784](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L784)

#### Returns

`string`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`toBase64`](../classes/Psbt.md#tobase64)

***

### toBuffer()

> **toBuffer**(): `Uint8Array`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:772](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L772)

#### Returns

`Uint8Array`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`toBuffer`](../classes/Psbt.md#tobuffer)

***

### toHex()

> **toHex**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:778](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L778)

#### Returns

`string`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`toHex`](../classes/Psbt.md#tohex)

***

### updateGlobal()

> **updateGlobal**(`updateData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:790](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L790)

#### Parameters

##### updateData

`PsbtGlobalUpdate`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`updateGlobal`](../classes/Psbt.md#updateglobal)

***

### updateInput()

> **updateInput**(`inputIndex`, `updateData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:795](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L795)

#### Parameters

##### inputIndex

`number`

##### updateData

`PsbtInputUpdate`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`updateInput`](../classes/Psbt.md#updateinput)

***

### updateOutput()

> **updateOutput**(`outputIndex`, `updateData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:800](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L800)

#### Parameters

##### outputIndex

`number`

##### updateData

`PsbtOutputUpdate`

#### Returns

`this`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`updateOutput`](../classes/Psbt.md#updateoutput)

***

### validateSignaturesOfAllInputs()

> **validateSignaturesOfAllInputs**(`validator`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:457](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L457)

#### Parameters

##### validator

`ValidateSigFunction`

#### Returns

`boolean`

#### Inherited from

[`Psbt`](../classes/Psbt.md).[`validateSignaturesOfAllInputs`](../classes/Psbt.md#validatesignaturesofallinputs)

***

### validateSignaturesOfInput()

> **validateSignaturesOfInput**(`inputIndex`, `validator`, `pubkey`?): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:465](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L465)

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

[`Psbt`](../classes/Psbt.md).[`validateSignaturesOfInput`](../classes/Psbt.md#validatesignaturesofinput)
