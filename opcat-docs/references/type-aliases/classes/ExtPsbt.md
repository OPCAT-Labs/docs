[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / ExtPsbt

# Class: ExtPsbt

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:99](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L99)

Extends the standard Psbt class with additional functionality for OP_CAT transactions.
Provides methods for:
- Managing contract inputs/outputs
- Handling UTXO spending
- Calculating transaction fees and sizes
- Finalizing and sealing transactions
- Backtrace information for contract inputs
- Change output management

Supports serialization to/from hex, base64 and buffer formats.
Includes network-aware operations and signature handling.

## Extends

- [`Psbt`](Psbt.md)

## Implements

- [`IExtPsbt`](../interfaces/IExtPsbt.md)

## Constructors

### new ExtPsbt()

> **new ExtPsbt**(`opts`, `data`?): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:100](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L100)

#### Parameters

##### opts

`ExtPsbtOpts` = `{}`

##### data?

`Psbt`

#### Returns

[`ExtPsbt`](ExtPsbt.md)

#### Overrides

[`Psbt`](Psbt.md).[`constructor`](Psbt.md#constructors)

## Properties

### data

> `readonly` **data**: `Psbt`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:134](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L134)

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`data`](../interfaces/IExtPsbt.md#data)

#### Inherited from

[`Psbt`](Psbt.md).[`data`](Psbt.md#data-1)

## Accessors

### hashSpentDatas

#### Get Signature

> **get** **hashSpentDatas**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:235](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L235)

Computes the hash of all spent data hashes in the PSBT.
Concatenates all non-empty spent data hashes and returns their double SHA-256 hash.

##### Returns

[`ByteString`](../type-aliases/ByteString.md)

The hash256 of all spent data hashes concatenated together.

***

### inputAmount

#### Get Signature

> **get** **inputAmount**(): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:524](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L524)

Gets the total input amount in satoshis as a bigint.

##### Returns

`bigint`

The sum of all input values in the PSBT.

***

### inputCount

#### Get Signature

> **get** **inputCount**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:180](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L180)

##### Returns

`number`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`inputCount`](../interfaces/IExtPsbt.md#inputcount)

#### Inherited from

[`Psbt`](Psbt.md).[`inputCount`](Psbt.md#inputcount)

***

### isFinalized

#### Get Signature

> **get** **isFinalized**(): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:739](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L739)

Checks if all inputs in the PSBT are finalized.

##### Returns

`boolean`

True if all inputs are finalized, false otherwise.

Whether the PSBT is finalized.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`isFinalized`](../interfaces/IExtPsbt.md#isfinalized)

***

### isFinalizing

#### Get Signature

> **get** **isFinalizing**(): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:672](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L672)

Indicates whether the PSBT is currently in the process of being finalized.

##### Returns

`boolean`

True if the PSBT is being finalized, false otherwise.

Whether the PSBT starts finalizing.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`isFinalizing`](../interfaces/IExtPsbt.md#isfinalizing)

***

### isSealed

#### Get Signature

> **get** **isSealed**(): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:680](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L680)

Indicates whether the PSBT (Partially Signed Bitcoin Transaction) is sealed.
A sealed PSBT cannot be modified further.

##### Returns

`boolean`

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`locktime`](../interfaces/IExtPsbt.md#locktime)

#### Inherited from

[`Psbt`](Psbt.md).[`locktime`](Psbt.md#locktime)

***

### outputAmount

#### Get Signature

> **get** **outputAmount**(): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:535](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L535)

Gets the total output amount of the PSBT transaction by summing up all output values.

##### Returns

`bigint`

The sum of all output values as a bigint.

***

### txInputs

#### Get Signature

> **get** **txInputs**(): `PsbtTxInput`[]

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:200](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L200)

##### Returns

`PsbtTxInput`[]

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`txInputs`](../interfaces/IExtPsbt.md#txinputs)

#### Inherited from

[`Psbt`](Psbt.md).[`txInputs`](Psbt.md#txinputs)

***

### txOutputs

#### Get Signature

> **get** **txOutputs**(): `PsbtTxOutput`[]

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:208](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L208)

##### Returns

`PsbtTxOutput`[]

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`txOutputs`](../interfaces/IExtPsbt.md#txoutputs)

#### Inherited from

[`Psbt`](Psbt.md).[`txOutputs`](Psbt.md#txoutputs)

***

### unsignedTx

#### Get Signature

> **get** **unsignedTx**(): [`Transaction`](Transaction.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:622](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L622)

Gets the unsigned transaction from the PSBT's internal cache.

##### Returns

[`Transaction`](Transaction.md)

The raw unsigned transaction object.

The unsigned transaction when the PSBT is not finalized.
note:

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`unsignedTx`](../interfaces/IExtPsbt.md#unsignedtx)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`version`](../interfaces/IExtPsbt.md#version)

#### Inherited from

[`Psbt`](Psbt.md).[`version`](Psbt.md#version)

## Methods

### addContractInput()

> **addContractInput**\<`Contract`\>(`contract`, `contractCall`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:393](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L393)

Adds a contract input to the PSBT (Partially Signed Bitcoin Transaction).

#### Type Parameters

• **Contract** *extends* [`SmartContract`](SmartContract.md)\<`StructObject`\>

#### Parameters

##### contract

`Contract`

The smart contract instance to add as input.

##### contractCall

[`ContractCall`](../type-aliases/ContractCall.md)\<`Contract`\>

The contract call containing the method and arguments.

#### Returns

`this`

The PSBT instance for method chaining.

#### Throws

Error if the contract does not have a bound UTXO.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addContractInput`](../interfaces/IExtPsbt.md#addcontractinput)

***

### addContractOutput()

> **addContractOutput**\<`Contract`\>(`contract`, `satoshis`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:502](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L502)

Adds a contract output to the PSBT (Partially Signed Opcat Transaction).

#### Type Parameters

• **Contract** *extends* [`SmartContract`](SmartContract.md)\<`StructObject`\>

Type parameter extending `SmartContract<OpcatState>`

#### Parameters

##### contract

`Contract`

The smart contract instance to add as output

##### satoshis

`number`

The amount in satoshis to lock in this output

#### Returns

`this`

The PSBT instance for method chaining

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addContractOutput`](../interfaces/IExtPsbt.md#addcontractoutput)

***

### addInput()

> **addInput**(`inputData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:275](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L275)

Adds an extended PSBT input with optional finalizer and signature requests.
- Calls parent class's `addInput` method
- Validates PSBT isn't sealed
- If input has a finalizer, caches the unlock script and sets the finalizer callback
- Processes any signature requests for the input

#### Parameters

##### inputData

`PsbtInputExtended`

Extended PSBT input data containing optional finalizer and sigRequests

#### Returns

`this`

PSBT instance for chaining

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addInput`](../interfaces/IExtPsbt.md#addinput)

#### Overrides

[`Psbt`](Psbt.md).[`addInput`](Psbt.md#addinput)

***

### addInputs()

> **addInputs**(`inputDatas`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:279](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L279)

#### Parameters

##### inputDatas

`PsbtInputExtended`[]

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addInputs`](../interfaces/IExtPsbt.md#addinputs)

#### Inherited from

[`Psbt`](Psbt.md).[`addInputs`](Psbt.md#addinputs)

***

### addOutput()

> **addOutput**(`outputData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:345](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L345)

Adds an extended output to the PSBT.

#### Parameters

##### outputData

`PsbtOutputExtended`

The extended output data to add

#### Returns

`this`

The PSBT instance for chaining

#### Throws

Error if the PSBT is already sealed

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addOutput`](../interfaces/IExtPsbt.md#addoutput)

#### Overrides

[`Psbt`](Psbt.md).[`addOutput`](Psbt.md#addoutput)

***

### addOutputs()

> **addOutputs**(`outputDatas`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:312](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L312)

#### Parameters

##### outputDatas

`PsbtOutputExtended`[]

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addOutputs`](../interfaces/IExtPsbt.md#addoutputs)

#### Inherited from

[`Psbt`](Psbt.md).[`addOutputs`](Psbt.md#addoutputs)

***

### addUnknownKeyValToGlobal()

> **addUnknownKeyValToGlobal**(`keyVal`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:805](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L805)

#### Parameters

##### keyVal

`KeyValue`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addUnknownKeyValToGlobal`](../interfaces/IExtPsbt.md#addunknownkeyvaltoglobal)

#### Inherited from

[`Psbt`](Psbt.md).[`addUnknownKeyValToGlobal`](Psbt.md#addunknownkeyvaltoglobal)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addUnknownKeyValToInput`](../interfaces/IExtPsbt.md#addunknownkeyvaltoinput)

#### Inherited from

[`Psbt`](Psbt.md).[`addUnknownKeyValToInput`](Psbt.md#addunknownkeyvaltoinput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addUnknownKeyValToOutput`](../interfaces/IExtPsbt.md#addunknownkeyvaltooutput)

#### Inherited from

[`Psbt`](Psbt.md).[`addUnknownKeyValToOutput`](Psbt.md#addunknownkeyvaltooutput)

***

### calculateBacktraceInfo()

> **calculateBacktraceInfo**(`provider`, `prevPrevTxFinder`?): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:969](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L969)

Calculates backtrace information for contract inputs in the PSBT.

Iterates through all inputs and collects backtrace info for contract inputs.
Uses the provided provider to fetch previous transaction data when needed.

#### Parameters

##### provider

[`UtxoProvider`](../interfaces/UtxoProvider.md) & [`ChainProvider`](../interfaces/ChainProvider.md)

Provider interface for fetching UTXO and chain data

##### prevPrevTxFinder?

(`prevTx`, `provider`, `inputIndex`) => `Promise`\<`string`\>

Optional function to find previous transactions

#### Returns

`Promise`\<`void`\>

Promise that resolves when all backtrace info is calculated

***

### change()

> **change**(`toAddr`, `feeRate`, `data`?): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:547](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L547)

Adds or updates a change output to the PSBT.

#### Parameters

##### toAddr

`string`

The address to receive the change.

##### feeRate

`number`

The fee rate to use for the change output.

##### data?

Optional data to include in the output (hex string or Uint8Array).

`string` | `Uint8Array`

#### Returns

`this`

The PSBT instance for chaining.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`change`](../interfaces/IExtPsbt.md#change)

***

### clearFinalizedInput()

> **clearFinalizedInput**(`inputIndex`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:820](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L820)

#### Parameters

##### inputIndex

`number`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`clearFinalizedInput`](../interfaces/IExtPsbt.md#clearfinalizedinput)

#### Inherited from

[`Psbt`](Psbt.md).[`clearFinalizedInput`](Psbt.md#clearfinalizedinput)

***

### clone()

> **clone**(): [`Psbt`](Psbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:237](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L237)

#### Returns

[`Psbt`](Psbt.md)

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`clone`](../interfaces/IExtPsbt.md#clone)

#### Inherited from

[`Psbt`](Psbt.md).[`clone`](Psbt.md#clone)

***

### combine()

> **combine**(...`those`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:232](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L232)

#### Parameters

##### those

...[`Psbt`](Psbt.md)[]

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`combine`](../interfaces/IExtPsbt.md#combine)

#### Inherited from

[`Psbt`](Psbt.md).[`combine`](Psbt.md#combine)

***

### estimateFee()

> **estimateFee**(`feeRate`): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:655](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L655)

Estimates the transaction fee by multiplying the estimated size (in vbytes) by the given fee rate.

#### Parameters

##### feeRate

`number`

Fee rate in satoshis per virtual byte (sat/vbyte).

#### Returns

`number`

The estimated fee amount in satoshis.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`estimateFee`](../interfaces/IExtPsbt.md#estimatefee)

***

### estimateSize()

> **estimateSize**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:646](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L646)

Estimates the total size of the PSBT by summing the unsigned transaction size
and the size of unfinalized call arguments.

#### Returns

`number`

The estimated size in bytes.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`estimateSize`](../interfaces/IExtPsbt.md#estimatesize)

***

### extractTransaction()

> **extractTransaction**(`disableFeeCheck`?): [`Transaction`](Transaction.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:348](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L348)

#### Parameters

##### disableFeeCheck?

`boolean`

#### Returns

[`Transaction`](Transaction.md)

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`extractTransaction`](../interfaces/IExtPsbt.md#extracttransaction)

#### Inherited from

[`Psbt`](Psbt.md).[`extractTransaction`](Psbt.md#extracttransaction)

***

### finalizeAllInputs()

> **finalizeAllInputs**(): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:692](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L692)

Finalizes all inputs in the PSBT by applying their respective finalizers.
For each input, if a finalizer is present, it generates the unlocking script
and creates a finalization function. After finalizing all inputs, it binds
the contract UTXOs. Throws an error if any input fails to finalize.

#### Returns

`this`

The current PSBT instance for chaining.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`finalizeAllInputs`](../interfaces/IExtPsbt.md#finalizeallinputs)

#### Overrides

[`Psbt`](Psbt.md).[`finalizeAllInputs`](Psbt.md#finalizeallinputs)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`finalizeInput`](../interfaces/IExtPsbt.md#finalizeinput)

#### Inherited from

[`Psbt`](Psbt.md).[`finalizeInput`](Psbt.md#finalizeinput)

***

### getB2GInputUtxo()

> **getB2GInputUtxo**(`inputIndex`): [`B2GUTXO`](../type-aliases/B2GUTXO.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:875](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L875)

Retrieves the B2G UTXO (Unspent Transaction Output) for a specific input index.

#### Parameters

##### inputIndex

`number`

The index of the input to retrieve the UTXO for.

#### Returns

[`B2GUTXO`](../type-aliases/B2GUTXO.md)

The B2G UTXO if found, otherwise undefined.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getB2GInputUtxo`](../interfaces/IExtPsbt.md#getb2ginpututxo)

***

### getBacktraceInfo()

> **getBacktraceInfo**(`provider`, `inputIndex`, `prevPrevTxFinder`): `Promise`\<[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:938](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L938)

Retrieves backtrace information for a PSBT input by fetching and analyzing previous transactions.

#### Parameters

##### provider

[`UtxoProvider`](../interfaces/UtxoProvider.md) & [`ChainProvider`](../interfaces/ChainProvider.md)

Provider interface for fetching UTXO and chain data

##### inputIndex

`number`

Index of the input to trace back from

##### prevPrevTxFinder

(`prevTx`, `provider`, `inputIndex`) => `Promise`\<`string`\>

Async function to locate the transaction before the previous transaction

#### Returns

`Promise`\<[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)\>

Promise resolving to backtrace information including:
         - Previous transaction input details
         - Input index in current transaction
         - Preimage of the transaction before previous transaction

***

### getChangeInfo()

> **getChangeInfo**(): [`TxOut`](../type-aliases/TxOut.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:598](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L598)

Gets the change output information from the PSBT transaction.

#### Returns

[`TxOut`](../type-aliases/TxOut.md)

An object containing the script hash, satoshis value, and data hash of the change output.
If no change output exists, returns an empty TxOut with default values (empty script/data hash and 0 satoshis).

#### Throws

If the change output index is set but the output is not found at that index.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getChangeInfo`](../interfaces/IExtPsbt.md#getchangeinfo)

***

### getChangeUTXO()

> **getChangeUTXO**(): [`UTXO`](../interfaces/UTXO.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:884](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L884)

Gets the change UTXO (Unspent Transaction Output) if it exists.

#### Returns

[`UTXO`](../interfaces/UTXO.md)

The change UTXO if found, otherwise null.

#### Throws

If the change output index is defined but no output is found at that index.

***

### getFee()

> **getFee**(): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:369](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L369)

#### Returns

`bigint`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getFee`](../interfaces/IExtPsbt.md#getfee)

#### Inherited from

[`Psbt`](Psbt.md).[`getFee`](Psbt.md#getfee)

***

### getFeeRate()

> **getFeeRate**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:360](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L360)

#### Returns

`number`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getFeeRate`](../interfaces/IExtPsbt.md#getfeerate)

#### Inherited from

[`Psbt`](Psbt.md).[`getFeeRate`](Psbt.md#getfeerate)

***

### getInputContract()

> **getInputContract**(`inputIndex`): [`SmartContract`](SmartContract.md)\<`StructObject`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:866](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L866)

Gets the smart contract associated with a specific input index.

#### Parameters

##### inputIndex

`number`

The index of the input to retrieve the contract for

#### Returns

[`SmartContract`](SmartContract.md)\<`StructObject`\>

The smart contract for the specified input, or undefined if not found

***

### getInputCtx()

> **getInputCtx**(`inputIndex`): `InputContext`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:210](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L210)

Gets the input context for the specified input index.

#### Parameters

##### inputIndex

`number`

The index of the input to retrieve context for

#### Returns

`InputContext`

The InputContext object associated with the specified input index

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getInputCtx`](../interfaces/IExtPsbt.md#getinputctx)

***

### getInputOutput()

> **getInputOutput**(`inputIndex`): [`OpcatUtxo`](../interfaces/OpcatUtxo.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:228](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L228)

#### Parameters

##### inputIndex

`number`

The index of the input to get the output for.

#### Returns

[`OpcatUtxo`](../interfaces/OpcatUtxo.md)

The previous output of the input.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getInputOutput`](../interfaces/IExtPsbt.md#getinputoutput)

#### Inherited from

[`Psbt`](Psbt.md).[`getInputOutput`](Psbt.md#getinputoutput)

***

### getInputType()

> **getInputType**(`inputIndex`): `AllScriptType`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:421](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L421)

#### Parameters

##### inputIndex

`number`

#### Returns

`AllScriptType`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getInputType`](../interfaces/IExtPsbt.md#getinputtype)

#### Inherited from

[`Psbt`](Psbt.md).[`getInputType`](Psbt.md#getinputtype)

***

### getlockTime()

> **getlockTime**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:132](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L132)

Gets the lock time (nLockTime) value from the unsigned transaction.

#### Returns

`number`

The lock time value as a number.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getlockTime`](../interfaces/IExtPsbt.md#getlocktime)

***

### getSequence()

> **getSequence**(`inputIndex`): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:125](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L125)

Gets the sequence number for the specified input index.

#### Parameters

##### inputIndex

`number`

The index of the input in the transaction.

#### Returns

`number`

The sequence number of the input.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getSequence`](../interfaces/IExtPsbt.md#getsequence)

***

### getSig()

> **getSig**(`inputIndex`, `options`): [`Sig`](../type-aliases/Sig.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:841](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L841)

Retrieves a signature for a specific input in the PSBT.

#### Parameters

##### inputIndex

`number`

The index of the input to sign.

##### options

`Omit`\<[`ToSignInput`](../interfaces/ToSignInput.md), `"index"`\>

Signing options including address or public key.

#### Returns

[`Sig`](../type-aliases/Sig.md)

The signature as a `Sig` object. If no signature is found, returns a default zero-filled signature.

#### Throws

May throw if the input index is invalid or if there are issues with public key conversion.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getSig`](../interfaces/IExtPsbt.md#getsig)

***

### getSigHashType()

> **getSigHashType**(`inputIndex`): [`SigHashType`](../enumerations/SigHashType.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:201](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L201)

Gets the signature hash type for the specified input index.

#### Parameters

##### inputIndex

`number`

The index of the input to get the signature hash type for.

#### Returns

[`SigHashType`](../enumerations/SigHashType.md)

The signature hash type for the specified input index.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getSigHashType`](../interfaces/IExtPsbt.md#getsighashtype)

***

### getSpentDataHashes()

> **getSpentDataHashes**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:219](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L219)

Calculates and returns the concatenated SHA-256 hashes of all input OP_CAT UTXO data.
Each input's data is hashed individually and the results are concatenated.

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

The combined hashes of all input data as a ByteString.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getSpentDataHashes`](../interfaces/IExtPsbt.md#getspentdatahashes)

***

### getUtxo()

> **getUtxo**(`outputIndex`): [`ExtUtxo`](../type-aliases/ExtUtxo.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:903](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L903)

Retrieves the UTXO (Unspent Transaction Output) at the specified output index.

#### Parameters

##### outputIndex

`number`

The index of the output to retrieve

#### Returns

[`ExtUtxo`](../type-aliases/ExtUtxo.md)

An ExtUtxo object containing the UTXO details

#### Throws

Error if the output at the specified index is not found

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`inputHasHDKey`](../interfaces/IExtPsbt.md#inputhashdkey)

#### Inherited from

[`Psbt`](Psbt.md).[`inputHasHDKey`](Psbt.md#inputhashdkey)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`inputHasPubkey`](../interfaces/IExtPsbt.md#inputhaspubkey)

#### Inherited from

[`Psbt`](Psbt.md).[`inputHasPubkey`](Psbt.md#inputhaspubkey)

***

### isB2GUtxo()

> **isB2GUtxo**(`utxo`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:989](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L989)

Checks if a given UTXO is a B2G (Back to Genesis) UTXO.
A B2G UTXO is identified by the presence of a 'txHashPreimage' property in the object.

#### Parameters

##### utxo

`object`

The UTXO object to check

#### Returns

`boolean`

boolean indicating if the UTXO is a B2G UTXO

***

### isContractInput()

> **isContractInput**(`inputIndex`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:762](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L762)

Checks if the input at the specified index is a contract input.

#### Parameters

##### inputIndex

`number`

The index of the input to check.

#### Returns

`boolean`

True if the input is a contract input, false otherwise.

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`outputHasHDKey`](../interfaces/IExtPsbt.md#outputhashdkey)

#### Inherited from

[`Psbt`](Psbt.md).[`outputHasHDKey`](Psbt.md#outputhashdkey)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`outputHasPubkey`](../interfaces/IExtPsbt.md#outputhaspubkey)

#### Inherited from

[`Psbt`](Psbt.md).[`outputHasPubkey`](Psbt.md#outputhaspubkey)

***

### psbtOptions()

> **psbtOptions**(`autoFinalized`): [`SignOptions`](../interfaces/SignOptions.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:815](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L815)

Generates PSBT signing options based on signature requests.

#### Parameters

##### autoFinalized

`boolean` = `false`

Whether to automatically finalize the PSBT after signing (default: false)

#### Returns

[`SignOptions`](../interfaces/SignOptions.md)

SignOptions object containing signing inputs, or undefined if no signatures are required

***

### removeInput()

> **removeInput**(`inputIndex`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:434](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L434)

Removes an input from the PSBT at the specified index.
This updates the unsigned transaction, input data, and clears related contract,
UTXO, finalizer, and signature request mappings for the removed input.

#### Parameters

##### inputIndex

`number`

The index of the input to remove

#### Returns

`this`

The PSBT instance for method chaining

***

### removeLastInput()

> **removeLastInput**(): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:449](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L449)

Removes the last input from the PSBT.

#### Returns

`this`

The modified PSBT instance for chaining.

#### Throws

If there are no inputs to remove.

***

### seal()

> **seal**(): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:1018](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L1018)

Finalizes the PSBT by calculating and caching input unlocking scripts,
finalizing the change output if specified, and marking the transaction as sealed.
Also calculates input contexts after sealing.

#### Returns

`this`

The sealed PSBT instance for method chaining.

***

### setInputSequence()

> **setInputSequence**(`inputIndex`, `sequence`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:380](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L380)

Sets the sequence number for the specified input.

#### Parameters

##### inputIndex

`number`

The index of the input to modify

##### sequence

`number`

The sequence number to set

#### Returns

`this`

The PSBT instance for method chaining

#### Throws

If the PSBT is sealed (immutable)

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`setInputSequence`](../interfaces/IExtPsbt.md#setinputsequence)

#### Overrides

[`Psbt`](Psbt.md).[`setInputSequence`](Psbt.md#setinputsequence)

***

### setLocktime()

> **setLocktime**(`locktime`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:368](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L368)

Sets the locktime for the PSBT (Partially Signed Opcat Transaction).

#### Parameters

##### locktime

`number`

The locktime value to set (in blocks or timestamp)

#### Returns

`this`

The PSBT instance for chaining

#### Throws

Error if the PSBT is already sealed

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`setLocktime`](../interfaces/IExtPsbt.md#setlocktime)

#### Overrides

[`Psbt`](Psbt.md).[`setLocktime`](Psbt.md#setlocktime)

***

### setMaximumFeeRate()

> **setMaximumFeeRate**(`satoshiPerByte`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:244](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L244)

#### Parameters

##### satoshiPerByte

`number`

#### Returns

`void`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`setMaximumFeeRate`](../interfaces/IExtPsbt.md#setmaximumfeerate)

#### Inherited from

[`Psbt`](Psbt.md).[`setMaximumFeeRate`](Psbt.md#setmaximumfeerate)

***

### setSighashType()

> **setSighashType**(`inputIndex`, `sigHashType`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:184](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L184)

Sets the sighash type for a specific input index.
Throws an error if attempting to set a different sighash type for the same input index.

#### Parameters

##### inputIndex

`number`

The index of the input to set the sighash type for.

##### sigHashType

[`SigHashType`](../enumerations/SigHashType.md)

The sighash type to set.

#### Returns

`void`

#### Throws

If the sighash type differs from the previously set type for the same input index.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`setSighashType`](../interfaces/IExtPsbt.md#setsighashtype)

***

### setVersion()

> **setVersion**(`version`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:357](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L357)

Sets the version number of the PSBT.

#### Parameters

##### version

`number`

The version number to set.

#### Returns

`this`

The PSBT instance for chaining.

#### Throws

Error if the PSBT is sealed.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`setVersion`](../interfaces/IExtPsbt.md#setversion)

#### Overrides

[`Psbt`](Psbt.md).[`setVersion`](Psbt.md#setversion)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputs`](../interfaces/IExtPsbt.md#signallinputs)

#### Inherited from

[`Psbt`](Psbt.md).[`signAllInputs`](Psbt.md#signallinputs)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputsAsync`](../interfaces/IExtPsbt.md#signallinputsasync)

#### Inherited from

[`Psbt`](Psbt.md).[`signAllInputsAsync`](Psbt.md#signallinputsasync)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputsHD`](../interfaces/IExtPsbt.md#signallinputshd)

#### Inherited from

[`Psbt`](Psbt.md).[`signAllInputsHD`](Psbt.md#signallinputshd)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputsHDAsync`](../interfaces/IExtPsbt.md#signallinputshdasync)

#### Inherited from

[`Psbt`](Psbt.md).[`signAllInputsHDAsync`](Psbt.md#signallinputshdasync)

***

### signAndFinalize()

> **signAndFinalize**(`signer`): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:115](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L115)

Signs the PSBT with the provided signer and finalizes all inputs.

#### Parameters

##### signer

[`Signer`](../interfaces/Signer.md)

The signer instance used to sign the PSBT.

#### Returns

`Promise`\<`void`\>

A promise that resolves when signing and finalization are complete.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAndFinalize`](../interfaces/IExtPsbt.md#signandfinalize)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInput`](../interfaces/IExtPsbt.md#signinput)

#### Inherited from

[`Psbt`](Psbt.md).[`signInput`](Psbt.md#signinput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInputAsync`](../interfaces/IExtPsbt.md#signinputasync)

#### Inherited from

[`Psbt`](Psbt.md).[`signInputAsync`](Psbt.md#signinputasync)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInputHD`](../interfaces/IExtPsbt.md#signinputhd)

#### Inherited from

[`Psbt`](Psbt.md).[`signInputHD`](Psbt.md#signinputhd)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInputHDAsync`](../interfaces/IExtPsbt.md#signinputhdasync)

#### Inherited from

[`Psbt`](Psbt.md).[`signInputHDAsync`](Psbt.md#signinputhdasync)

***

### spendUTXO()

> **spendUTXO**(`utxos`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:302](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L302)

Add input(s) for current psbt to spend the utxos.

#### Parameters

##### utxos

the utxos to spend

[`ExtUtxo`](../type-aliases/ExtUtxo.md) | [`ExtUtxo`](../type-aliases/ExtUtxo.md)[]

#### Returns

`this`

this

***

### toBase64()

> **toBase64**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:1064](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L1064)

Converts the PSBT to Base64 string representation.

#### Returns

`string`

Base64 encoded PSBT data

#### Throws

If the PSBT is not sealed (must call seal() first)

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`toBase64`](../interfaces/IExtPsbt.md#tobase64)

#### Overrides

[`Psbt`](Psbt.md).[`toBase64`](Psbt.md#tobase64)

***

### toBuffer()

> **toBuffer**(): `Uint8Array`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:1038](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L1038)

Converts the PSBT to a Uint8Array buffer.

#### Returns

`Uint8Array`

The serialized PSBT buffer.

#### Throws

If the PSBT is not sealed (must call seal() first).

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`toBuffer`](../interfaces/IExtPsbt.md#tobuffer)

#### Overrides

[`Psbt`](Psbt.md).[`toBuffer`](Psbt.md#tobuffer)

***

### toHex()

> **toHex**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:1052](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L1052)

Converts the PSBT to a hexadecimal string representation.

#### Returns

`string`

The hexadecimal string representation of the PSBT.

#### Throws

If the PSBT is not sealed (must call seal() first).

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`toHex`](../interfaces/IExtPsbt.md#tohex)

#### Overrides

[`Psbt`](Psbt.md).[`toHex`](Psbt.md#tohex)

***

### txHashPreimage()

> **txHashPreimage**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:1002](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L1002)

Generates the transaction hash preimage for the PSBT.

#### Returns

`string`

The transaction hash preimage as a hexadecimal string.

#### Throws

If the PSBT is not sealed (must call `seal()` first).

***

### updateGlobal()

> **updateGlobal**(`updateData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:790](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L790)

#### Parameters

##### updateData

`PsbtGlobalUpdate`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`updateGlobal`](../interfaces/IExtPsbt.md#updateglobal)

#### Inherited from

[`Psbt`](Psbt.md).[`updateGlobal`](Psbt.md#updateglobal)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`updateInput`](../interfaces/IExtPsbt.md#updateinput)

#### Inherited from

[`Psbt`](Psbt.md).[`updateInput`](Psbt.md#updateinput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`updateOutput`](../interfaces/IExtPsbt.md#updateoutput)

#### Inherited from

[`Psbt`](Psbt.md).[`updateOutput`](Psbt.md#updateoutput)

***

### validateSignaturesOfAllInputs()

> **validateSignaturesOfAllInputs**(`validator`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:457](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L457)

#### Parameters

##### validator

`ValidateSigFunction`

#### Returns

`boolean`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`validateSignaturesOfAllInputs`](../interfaces/IExtPsbt.md#validatesignaturesofallinputs)

#### Inherited from

[`Psbt`](Psbt.md).[`validateSignaturesOfAllInputs`](Psbt.md#validatesignaturesofallinputs)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`validateSignaturesOfInput`](../interfaces/IExtPsbt.md#validatesignaturesofinput)

#### Inherited from

[`Psbt`](Psbt.md).[`validateSignaturesOfInput`](Psbt.md#validatesignaturesofinput)

***

### fromBase64()

> `static` **fromBase64**(`data`, `opts`): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:142](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L142)

Creates an ExtPsbt instance from a base64-encoded string.

#### Parameters

##### data

`string`

The base64-encoded PSBT data

##### opts

`ExtPsbtOpts` = `{}`

Optional configuration options for the ExtPsbt

#### Returns

[`ExtPsbt`](ExtPsbt.md)

A new ExtPsbt instance

#### Overrides

[`Psbt`](Psbt.md).[`fromBase64`](Psbt.md#frombase64)

***

### fromBuffer()

> `static` **fromBuffer**(`buffer`, `opts`): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:164](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L164)

Creates an ExtPsbt instance from a buffer containing PSBT data.

#### Parameters

##### buffer

`Uint8Array`

The buffer containing the PSBT data.

##### opts

`ExtPsbtOpts` = `{}`

Optional parameters including network configuration.

#### Returns

[`ExtPsbt`](ExtPsbt.md)

A new ExtPsbt instance initialized with the PSBT data.

#### Overrides

[`Psbt`](Psbt.md).[`fromBuffer`](Psbt.md#frombuffer)

***

### fromHex()

> `static` **fromHex**(`data`, `opts`): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:153](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L153)

Creates an ExtPsbt instance from a hex string.

#### Parameters

##### data

`string`

Hex string representation of the PSBT data

##### opts

`ExtPsbtOpts` = `{}`

Optional configuration options for the ExtPsbt

#### Returns

[`ExtPsbt`](ExtPsbt.md)

A new ExtPsbt instance

#### Overrides

[`Psbt`](Psbt.md).[`fromHex`](Psbt.md#fromhex)
