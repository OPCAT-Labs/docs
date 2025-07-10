[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / ExtPsbt

# Class: ExtPsbt

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:97](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L97)

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

- `Psbt`

## Implements

- [`IExtPsbt`](../interfaces/IExtPsbt.md)

## Constructors

### new ExtPsbt()

> **new ExtPsbt**(`opts`, `data`?): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:98](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L98)

#### Parameters

##### opts

`ExtPsbtOpts` = `{}`

##### data?

`Psbt`

#### Returns

[`ExtPsbt`](ExtPsbt.md)

#### Overrides

`Psbt.constructor`

## Properties

### data

> `readonly` **data**: `Psbt`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:134](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L134)

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`data`](../interfaces/IExtPsbt.md#data)

#### Inherited from

`Psbt.data`

## Accessors

### hashSpentDatas

#### Get Signature

> **get** **hashSpentDatas**(): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:232](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L232)

Computes the hash of all spent data hashes in the PSBT.
Concatenates all non-empty spent data hashes and returns their double SHA-256 hash.

##### Returns

[`ByteString`](../type-aliases/ByteString.md)

The hash256 of all spent data hashes concatenated together.

***

### inputAmount

#### Get Signature

> **get** **inputAmount**(): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:521](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L521)

Gets the total input amount in satoshis as a bigint.

##### Returns

`bigint`

The sum of all input values in the PSBT.

***

### inputCount

#### Get Signature

> **get** **inputCount**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:180](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L180)

##### Returns

`number`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`inputCount`](../interfaces/IExtPsbt.md#inputcount)

#### Inherited from

`Psbt.inputCount`

***

### isFinalized

#### Get Signature

> **get** **isFinalized**(): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:736](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L736)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:669](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L669)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:677](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L677)

Indicates whether the PSBT (Partially Signed Bitcoin Transaction) is sealed.
A sealed PSBT cannot be modified further.

##### Returns

`boolean`

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`locktime`](../interfaces/IExtPsbt.md#locktime)

#### Inherited from

`Psbt.locktime`

***

### outputAmount

#### Get Signature

> **get** **outputAmount**(): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:532](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L532)

Gets the total output amount of the PSBT transaction by summing up all output values.

##### Returns

`bigint`

The sum of all output values as a bigint.

***

### txInputs

#### Get Signature

> **get** **txInputs**(): `PsbtTxInput`[]

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:200](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L200)

##### Returns

`PsbtTxInput`[]

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`txInputs`](../interfaces/IExtPsbt.md#txinputs)

#### Inherited from

`Psbt.txInputs`

***

### txOutputs

#### Get Signature

> **get** **txOutputs**(): `PsbtTxOutput`[]

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:208](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L208)

##### Returns

`PsbtTxOutput`[]

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`txOutputs`](../interfaces/IExtPsbt.md#txoutputs)

#### Inherited from

`Psbt.txOutputs`

***

### unsignedTx

#### Get Signature

> **get** **unsignedTx**(): [`Transaction`](Transaction.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:619](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L619)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`version`](../interfaces/IExtPsbt.md#version)

#### Inherited from

`Psbt.version`

## Methods

### addContractInput()

> **addContractInput**\<`Contract`\>(`contract`, `contractCall`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:390](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L390)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:499](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L499)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:272](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L272)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addInputs`](../interfaces/IExtPsbt.md#addinputs)

#### Inherited from

`Psbt.addInputs`

***

### addOutput()

> **addOutput**(`outputData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:342](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L342)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addOutputs`](../interfaces/IExtPsbt.md#addoutputs)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addUnknownKeyValToGlobal`](../interfaces/IExtPsbt.md#addunknownkeyvaltoglobal)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addUnknownKeyValToInput`](../interfaces/IExtPsbt.md#addunknownkeyvaltoinput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`addUnknownKeyValToOutput`](../interfaces/IExtPsbt.md#addunknownkeyvaltooutput)

#### Inherited from

`Psbt.addUnknownKeyValToOutput`

***

### calculateBacktraceInfo()

> **calculateBacktraceInfo**(`provider`, `prevPrevTxFinder`?): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:960](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L960)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:544](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L544)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:768](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L768)

#### Parameters

##### inputIndex

`number`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`clearFinalizedInput`](../interfaces/IExtPsbt.md#clearfinalizedinput)

#### Inherited from

`Psbt.clearFinalizedInput`

***

### clone()

> **clone**(): `Psbt`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:229](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L229)

#### Returns

`Psbt`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`clone`](../interfaces/IExtPsbt.md#clone)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`combine`](../interfaces/IExtPsbt.md#combine)

#### Inherited from

`Psbt.combine`

***

### estimateFee()

> **estimateFee**(`feeRate`): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:652](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L652)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:643](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L643)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:337](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L337)

#### Parameters

##### disableFeeCheck?

`boolean`

#### Returns

[`Transaction`](Transaction.md)

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`extractTransaction`](../interfaces/IExtPsbt.md#extracttransaction)

#### Inherited from

`Psbt.extractTransaction`

***

### finalizeAllInputs()

> **finalizeAllInputs**(): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:689](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L689)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`finalizeInput`](../interfaces/IExtPsbt.md#finalizeinput)

#### Inherited from

`Psbt.finalizeInput`

***

### getB2GInputUtxo()

> **getB2GInputUtxo**(`inputIndex`): [`B2GUTXO`](../type-aliases/B2GUTXO.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:872](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L872)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:929](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L929)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:595](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L595)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:881](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L881)

Gets the change UTXO (Unspent Transaction Output) if it exists.

#### Returns

[`UTXO`](../interfaces/UTXO.md)

The change UTXO if found, otherwise null.

#### Throws

If the change output index is defined but no output is found at that index.

***

### getFee()

> **getFee**(): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:358](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L358)

#### Returns

`bigint`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getFee`](../interfaces/IExtPsbt.md#getfee)

#### Inherited from

`Psbt.getFee`

***

### getFeeRate()

> **getFeeRate**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:349](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L349)

#### Returns

`number`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getFeeRate`](../interfaces/IExtPsbt.md#getfeerate)

#### Inherited from

`Psbt.getFeeRate`

***

### getInputContract()

> **getInputContract**(`inputIndex`): [`SmartContract`](SmartContract.md)\<`StructObject`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:863](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L863)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:208](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L208)

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

### getInputType()

> **getInputType**(`inputIndex`): `AllScriptType`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:412](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L412)

#### Parameters

##### inputIndex

`number`

#### Returns

`AllScriptType`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getInputType`](../interfaces/IExtPsbt.md#getinputtype)

#### Inherited from

`Psbt.getInputType`

***

### getlockTime()

> **getlockTime**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:130](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L130)

Gets the lock time (nLockTime) value from the unsigned transaction.

#### Returns

`number`

The lock time value as a number.

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`getlockTime`](../interfaces/IExtPsbt.md#getlocktime)

***

### getSequence()

> **getSequence**(`inputIndex`): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:123](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L123)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:838](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L838)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:199](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L199)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:217](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L217)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:900](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L900)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:428](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L428)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`inputHasPubkey`](../interfaces/IExtPsbt.md#inputhaspubkey)

#### Inherited from

`Psbt.inputHasPubkey`

***

### isB2GUtxo()

> **isB2GUtxo**(`utxo`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:980](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L980)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:759](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L759)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:440](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L440)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`outputHasPubkey`](../interfaces/IExtPsbt.md#outputhaspubkey)

#### Inherited from

`Psbt.outputHasPubkey`

***

### psbtOptions()

> **psbtOptions**(`autoFinalized`): [`SignOptions`](../interfaces/SignOptions.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:812](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L812)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:431](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L431)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:446](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L446)

Removes the last input from the PSBT.

#### Returns

`this`

The modified PSBT instance for chaining.

#### Throws

If there are no inputs to remove.

***

### seal()

> **seal**(): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:1009](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L1009)

Finalizes the PSBT by calculating and caching input unlocking scripts,
finalizing the change output if specified, and marking the transaction as sealed.
Also calculates input contexts after sealing.

#### Returns

`this`

The sealed PSBT instance for method chaining.

***

### setInputSequence()

> **setInputSequence**(`inputIndex`, `sequence`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:377](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L377)

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

`Psbt.setInputSequence`

***

### setLocktime()

> **setLocktime**(`locktime`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:365](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L365)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`setMaximumFeeRate`](../interfaces/IExtPsbt.md#setmaximumfeerate)

#### Inherited from

`Psbt.setMaximumFeeRate`

***

### setSighashType()

> **setSighashType**(`inputIndex`, `sigHashType`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:182](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L182)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:354](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L354)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputs`](../interfaces/IExtPsbt.md#signallinputs)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputsAsync`](../interfaces/IExtPsbt.md#signallinputsasync)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputsHD`](../interfaces/IExtPsbt.md#signallinputshd)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signAllInputsHDAsync`](../interfaces/IExtPsbt.md#signallinputshdasync)

#### Inherited from

`Psbt.signAllInputsHDAsync`

***

### signAndFinalize()

> **signAndFinalize**(`signer`): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:113](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L113)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInput`](../interfaces/IExtPsbt.md#signinput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInputAsync`](../interfaces/IExtPsbt.md#signinputasync)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInputHD`](../interfaces/IExtPsbt.md#signinputhd)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`signInputHDAsync`](../interfaces/IExtPsbt.md#signinputhdasync)

#### Inherited from

`Psbt.signInputHDAsync`

***

### spendUTXO()

> **spendUTXO**(`utxos`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:299](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L299)

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

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:1055](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L1055)

Converts the PSBT to Base64 string representation.

#### Returns

`string`

Base64 encoded PSBT data

#### Throws

If the PSBT is not sealed (must call seal() first)

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`toBase64`](../interfaces/IExtPsbt.md#tobase64)

#### Overrides

`Psbt.toBase64`

***

### toBuffer()

> **toBuffer**(): `Uint8Array`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:1029](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L1029)

Converts the PSBT to a Uint8Array buffer.

#### Returns

`Uint8Array`

The serialized PSBT buffer.

#### Throws

If the PSBT is not sealed (must call seal() first).

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`toBuffer`](../interfaces/IExtPsbt.md#tobuffer)

#### Overrides

`Psbt.toBuffer`

***

### toHex()

> **toHex**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:1043](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L1043)

Converts the PSBT to a hexadecimal string representation.

#### Returns

`string`

The hexadecimal string representation of the PSBT.

#### Throws

If the PSBT is not sealed (must call seal() first).

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`toHex`](../interfaces/IExtPsbt.md#tohex)

#### Overrides

`Psbt.toHex`

***

### txHashPreimage()

> **txHashPreimage**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:993](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L993)

Generates the transaction hash preimage for the PSBT.

#### Returns

`string`

The transaction hash preimage as a hexadecimal string.

#### Throws

If the PSBT is not sealed (must call `seal()` first).

***

### updateGlobal()

> **updateGlobal**(`updateData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:738](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L738)

#### Parameters

##### updateData

`PsbtGlobalUpdate`

#### Returns

`this`

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`updateGlobal`](../interfaces/IExtPsbt.md#updateglobal)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`updateInput`](../interfaces/IExtPsbt.md#updateinput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`updateOutput`](../interfaces/IExtPsbt.md#updateoutput)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`validateSignaturesOfAllInputs`](../interfaces/IExtPsbt.md#validatesignaturesofallinputs)

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

#### Implementation of

[`IExtPsbt`](../interfaces/IExtPsbt.md).[`validateSignaturesOfInput`](../interfaces/IExtPsbt.md#validatesignaturesofinput)

#### Inherited from

`Psbt.validateSignaturesOfInput`

***

### fromBase64()

> `static` **fromBase64**(`data`, `opts`): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:140](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L140)

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

`Psbt.fromBase64`

***

### fromBuffer()

> `static` **fromBuffer**(`buffer`, `opts`): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:162](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L162)

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

`Psbt.fromBuffer`

***

### fromHex()

> `static` **fromHex**(`data`, `opts`): [`ExtPsbt`](ExtPsbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/extPsbt.ts:151](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/psbt/extPsbt.ts#L151)

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

`Psbt.fromHex`
