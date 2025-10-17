[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / Psbt

# Class: Psbt

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:110](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L110)

Psbt class can parse and generate a PSBT binary based off of the BIP174.
There are 6 roles that this class fulfills. (Explained in BIP174)

Creator: This can be done with `new Psbt()`

Updater: This can be done with `psbt.addInput(input)`, `psbt.addInputs(inputs)`,
  `psbt.addOutput(output)`, `psbt.addOutputs(outputs)` when you are looking to
  add new inputs and outputs to the PSBT, and `psbt.updateGlobal(itemObject)`,
  `psbt.updateInput(itemObject)`, `psbt.updateOutput(itemObject)`
  addInput requires hash: Buffer | string; and index: number; as attributes
  and can also include any attributes that are used in updateInput method.
  addOutput requires script: Buffer; and value: number; and likewise can include
  data for updateOutput.
  For a list of what attributes should be what types. Check the bip174 library.
  Also, check the integration tests for some examples of usage.

Signer: There are a few methods. signAllInputs and signAllInputsAsync, which will search all input
  information for your pubkey or pubkeyhash, and only sign inputs where it finds
  your info. Or you can explicitly sign a specific input with signInput and
  signInputAsync. For the async methods you can create a SignerAsync object
  and use something like a hardware wallet to sign with. (You must implement this)

Combiner: psbts can be combined easily with `psbt.combine(psbt2, psbt3, psbt4 ...)`
  the psbt calling combine will always have precedence when a conflict occurs.
  Combine checks if the internal bitcoin transaction is the same, so be sure that
  all sequences, version, locktime, etc. are the same before combining.

Input Finalizer: This role is fairly important. Not only does it need to construct
  the input scriptSigs and witnesses, but it SHOULD verify the signatures etc.
  Before running `psbt.finalizeAllInputs()` please run `psbt.validateSignaturesOfAllInputs()`
  Running any finalize method will delete any data in the input(s) that are no longer
  needed due to the finalized scripts containing the information.

Transaction Extractor: This role will perform some checks before returning a
  Transaction object. Such as fee rate not being larger than maximumFeeRate etc.

## Extended by

- [`ExtPsbt`](ExtPsbt.md)
- [`IExtPsbt`](../interfaces/IExtPsbt.md)

## Constructors

### new Psbt()

> **new Psbt**(`opts`, `data`): [`Psbt`](Psbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:132](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L132)

#### Parameters

##### opts

`PsbtOptsOptional` = `{}`

##### data

`Psbt` = `...`

#### Returns

[`Psbt`](Psbt.md)

## Properties

### data

> `readonly` **data**: `Psbt`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:134](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L134)

## Accessors

### inputCount

#### Get Signature

> **get** **inputCount**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:180](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L180)

##### Returns

`number`

***

### locktime

#### Get Signature

> **get** **locktime**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:192](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L192)

##### Returns

`number`

#### Set Signature

> **set** **locktime**(`locktime`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:196](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L196)

##### Parameters

###### locktime

`number`

##### Returns

`void`

***

### txInputs

#### Get Signature

> **get** **txInputs**(): `PsbtTxInput`[]

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:200](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L200)

##### Returns

`PsbtTxInput`[]

***

### txOutputs

#### Get Signature

> **get** **txOutputs**(): `PsbtTxOutput`[]

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:208](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L208)

##### Returns

`PsbtTxOutput`[]

***

### version

#### Get Signature

> **get** **version**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:184](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L184)

##### Returns

`number`

#### Set Signature

> **set** **version**(`version`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:188](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L188)

##### Parameters

###### version

`number`

##### Returns

`void`

## Methods

### addInput()

> **addInput**(`inputData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:284](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L284)

#### Parameters

##### inputData

`PsbtInputExtended`

#### Returns

`this`

***

### addInputs()

> **addInputs**(`inputDatas`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:279](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L279)

#### Parameters

##### inputDatas

`PsbtInputExtended`[]

#### Returns

`this`

***

### addOutput()

> **addOutput**(`outputData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:317](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L317)

#### Parameters

##### outputData

`PsbtOutputExtended` & `object`

#### Returns

`this`

***

### addOutputs()

> **addOutputs**(`outputDatas`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:312](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L312)

#### Parameters

##### outputDatas

`PsbtOutputExtended`[]

#### Returns

`this`

***

### addUnknownKeyValToGlobal()

> **addUnknownKeyValToGlobal**(`keyVal`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:805](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L805)

#### Parameters

##### keyVal

`KeyValue`

#### Returns

`this`

***

### addUnknownKeyValToInput()

> **addUnknownKeyValToInput**(`inputIndex`, `keyVal`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:810](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L810)

#### Parameters

##### inputIndex

`number`

##### keyVal

`KeyValue`

#### Returns

`this`

***

### addUnknownKeyValToOutput()

> **addUnknownKeyValToOutput**(`outputIndex`, `keyVal`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:815](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L815)

#### Parameters

##### outputIndex

`number`

##### keyVal

`KeyValue`

#### Returns

`this`

***

### clearFinalizedInput()

> **clearFinalizedInput**(`inputIndex`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:820](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L820)

#### Parameters

##### inputIndex

`number`

#### Returns

`this`

***

### clone()

> **clone**(): [`Psbt`](Psbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:237](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L237)

#### Returns

[`Psbt`](Psbt.md)

***

### combine()

> **combine**(...`those`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:232](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L232)

#### Parameters

##### those

...[`Psbt`](Psbt.md)[]

#### Returns

`this`

***

### extractTransaction()

> **extractTransaction**(`disableFeeCheck`?): [`Transaction`](Transaction.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:348](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L348)

#### Parameters

##### disableFeeCheck?

`boolean`

#### Returns

[`Transaction`](Transaction.md)

***

### finalizeAllInputs()

> **finalizeAllInputs**(): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:378](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L378)

#### Returns

`this`

***

### finalizeInput()

> **finalizeInput**(`inputIndex`, `finalScriptsFunc`?): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:384](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L384)

#### Parameters

##### inputIndex

`number`

##### finalScriptsFunc?

`FinalScriptsFunc`

#### Returns

`this`

***

### getFee()

> **getFee**(): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:369](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L369)

#### Returns

`bigint`

***

### getFeeRate()

> **getFeeRate**(): `number`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:360](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L360)

#### Returns

`number`

***

### getInputOutput()

> **getInputOutput**(`inputIndex`): [`OpcatUtxo`](../interfaces/OpcatUtxo.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:228](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L228)

#### Parameters

##### inputIndex

`number`

The index of the input to get the output for.

#### Returns

[`OpcatUtxo`](../interfaces/OpcatUtxo.md)

The previous output of the input.

***

### getInputType()

> **getInputType**(`inputIndex`): `AllScriptType`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:421](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L421)

#### Parameters

##### inputIndex

`number`

#### Returns

`AllScriptType`

***

### inputHasHDKey()

> **inputHasHDKey**(`inputIndex`, `root`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:437](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L437)

#### Parameters

##### inputIndex

`number`

##### root

`HDSigner`

#### Returns

`boolean`

***

### inputHasPubkey()

> **inputHasPubkey**(`inputIndex`, `pubkey`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:432](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L432)

#### Parameters

##### inputIndex

`number`

##### pubkey

`Uint8Array`

#### Returns

`boolean`

***

### outputHasHDKey()

> **outputHasHDKey**(`outputIndex`, `root`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:449](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L449)

#### Parameters

##### outputIndex

`number`

##### root

`HDSigner`

#### Returns

`boolean`

***

### outputHasPubkey()

> **outputHasPubkey**(`outputIndex`, `pubkey`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:445](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L445)

#### Parameters

##### outputIndex

`number`

##### pubkey

`Uint8Array`

#### Returns

`boolean`

***

### setInputSequence()

> **setInputSequence**(`inputIndex`, `sequence`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:267](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L267)

#### Parameters

##### inputIndex

`number`

##### sequence

`number`

#### Returns

`this`

***

### setLocktime()

> **setLocktime**(`locktime`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:258](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L258)

#### Parameters

##### locktime

`number`

#### Returns

`this`

***

### setMaximumFeeRate()

> **setMaximumFeeRate**(`satoshiPerByte`): `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:244](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L244)

#### Parameters

##### satoshiPerByte

`number`

#### Returns

`void`

***

### setVersion()

> **setVersion**(`version`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:249](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L249)

#### Parameters

##### version

`number`

#### Returns

`this`

***

### signAllInputs()

> **signAllInputs**(`keyPair`, `sighashTypes`?): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:605](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L605)

#### Parameters

##### keyPair

`Signer`

##### sighashTypes?

`number`[]

#### Returns

`this`

***

### signAllInputsAsync()

> **signAllInputsAsync**(`keyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:627](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L627)

#### Parameters

##### keyPair

`Signer` | `SignerAsync`

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

***

### signAllInputsHD()

> **signAllInputsHD**(`hdKeyPair`, `sighashTypes`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:512](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L512)

#### Parameters

##### hdKeyPair

`HDSigner`

##### sighashTypes

`number`[] = `...`

#### Returns

`this`

***

### signAllInputsHDAsync()

> **signAllInputsHDAsync**(`hdKeyPair`, `sighashTypes`): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:535](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L535)

#### Parameters

##### hdKeyPair

`HDSigner` | `HDSignerAsync`

##### sighashTypes

`number`[] = `...`

#### Returns

`Promise`\<`void`\>

***

### signInput()

> **signInput**(`inputIndex`, `keyPair`, `sighashTypes`?): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:661](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L661)

#### Parameters

##### inputIndex

`number`

##### keyPair

`Signer`

##### sighashTypes?

`number`[]

#### Returns

`this`

***

### signInputAsync()

> **signInputAsync**(`inputIndex`, `keyPair`, `sighashTypes`?): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:694](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L694)

#### Parameters

##### inputIndex

`number`

##### keyPair

`Signer` | `SignerAsync`

##### sighashTypes?

`number`[]

#### Returns

`Promise`\<`void`\>

***

### signInputHD()

> **signInputHD**(`inputIndex`, `hdKeyPair`, `sighashTypes`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:567](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L567)

#### Parameters

##### inputIndex

`number`

##### hdKeyPair

`HDSigner`

##### sighashTypes

`number`[] = `...`

#### Returns

`this`

***

### signInputHDAsync()

> **signInputHDAsync**(`inputIndex`, `hdKeyPair`, `sighashTypes`): `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:584](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L584)

#### Parameters

##### inputIndex

`number`

##### hdKeyPair

`HDSigner` | `HDSignerAsync`

##### sighashTypes

`number`[] = `...`

#### Returns

`Promise`\<`void`\>

***

### toBase64()

> **toBase64**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:784](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L784)

#### Returns

`string`

***

### toBuffer()

> **toBuffer**(): `Uint8Array`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:772](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L772)

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:778](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L778)

#### Returns

`string`

***

### updateGlobal()

> **updateGlobal**(`updateData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:790](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L790)

#### Parameters

##### updateData

`PsbtGlobalUpdate`

#### Returns

`this`

***

### updateInput()

> **updateInput**(`inputIndex`, `updateData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:795](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L795)

#### Parameters

##### inputIndex

`number`

##### updateData

`PsbtInputUpdate`

#### Returns

`this`

***

### updateOutput()

> **updateOutput**(`outputIndex`, `updateData`): `this`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:800](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L800)

#### Parameters

##### outputIndex

`number`

##### updateData

`PsbtOutputUpdate`

#### Returns

`this`

***

### validateSignaturesOfAllInputs()

> **validateSignaturesOfAllInputs**(`validator`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:457](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L457)

#### Parameters

##### validator

`ValidateSigFunction`

#### Returns

`boolean`

***

### validateSignaturesOfInput()

> **validateSignaturesOfInput**(`inputIndex`, `validator`, `pubkey`?): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:465](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L465)

#### Parameters

##### inputIndex

`number`

##### validator

`ValidateSigFunction`

##### pubkey?

`Uint8Array`

#### Returns

`boolean`

***

### fromBase64()

> `static` **fromBase64**(`data`, `opts`): [`Psbt`](Psbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:111](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L111)

#### Parameters

##### data

`string`

##### opts

`PsbtOptsOptional` = `{}`

#### Returns

[`Psbt`](Psbt.md)

***

### fromBuffer()

> `static` **fromBuffer**(`buffer`, `opts`): [`Psbt`](Psbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:121](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L121)

#### Parameters

##### buffer

`Uint8Array`

##### opts

`PsbtOptsOptional` = `{}`

#### Returns

[`Psbt`](Psbt.md)

***

### fromHex()

> `static` **fromHex**(`data`, `opts`): [`Psbt`](Psbt.md)

Defined in: [packages/scrypt-ts-opcat/src/psbt/psbt.ts:116](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/psbt/psbt.ts#L116)

#### Parameters

##### data

`string`

##### opts

`PsbtOptsOptional` = `{}`

#### Returns

[`Psbt`](Psbt.md)
