[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Backtrace

# Class: Backtrace

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts:27](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts#L27)

Library for verifying backtraces all the way to the genesis point.

## Onchain

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Constructors

### new Backtrace()

> **new Backtrace**(...`args`): [`Backtrace`](Backtrace.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L32)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`Backtrace`](Backtrace.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`constructor`](SmartContractLib.md#constructors)

## Properties

### args

> **args**: `any`[] = `[]`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:31](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L31)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`args`](SmartContractLib.md#args-1)

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:16](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L16)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`artifact`](SmartContractLib.md#artifact)

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L17)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`stateType`](SmartContractLib.md#statetype)

## Methods

### checkPrevTxHashPreimage()

> `static` **checkPrevTxHashPreimage**(`txHashPreimage`, `t_prevouts`, `t_inputIndex`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts:39](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts#L39)

Verifies that the transaction hash preimage matches the previous transaction hash 
at the specified input index in the prevouts.

#### Parameters

##### txHashPreimage

[`TxHashPreimage`](../type-aliases/TxHashPreimage.md)

The transaction hash preimage to verify

##### t\_prevouts

[`ByteString`](../type-aliases/ByteString.md)

The previous outputs containing the expected transaction hash

##### t\_inputIndex

`bigint`

The index of the input to check against in prevouts

#### Returns

`void`

#### Throws

Will throw an error if the hashes don't match

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L19)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

*typeof* [`SmartContractLib`](SmartContractLib.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`loadArtifact`](SmartContractLib.md#loadartifact)

***

### verifyChainTxs()

> `static` **verifyChainTxs**(`backtraceInfo`, `t_prevTxInputList`): [`ChainTxVerifyResponse`](../type-aliases/ChainTxVerifyResponse.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts:100](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts#L100)

Tx chain verification to ensure:
  1. the current spending UTXO is the output of prevTx
  2. the specific input of prevTx is the output of prevPrevTx

#### Parameters

##### backtraceInfo

[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)

backtrace info to verify, including prevTx and prevPrevTx preimages

##### t\_prevTxInputList

[`ByteString`](../type-aliases/ByteString.md)

input list of the prevTx which should be trustable

#### Returns

[`ChainTxVerifyResponse`](../type-aliases/ChainTxVerifyResponse.md)

locking script and outpoint of the specified output of prevPrevTx

***

### verifyFromOutpoint()

> `static` **verifyFromOutpoint**(`backtraceInfo`, `t_genesisOutpoint`, `t_selfScript`, `t_prevTxInputList`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts:56](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts#L56)

Back-to-genesis backtrace verification for a contract which can be backtraced to the genesis outpoint.
It will be a valid backtraceInfo if the prevPrevOutpoint is the genesis outpoint or the prevPrevScript is the selfScript.

#### Parameters

##### backtraceInfo

[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)

backtrace info to verify, including prevTx and prevPrevTx informations

##### t\_genesisOutpoint

[`ByteString`](../type-aliases/ByteString.md)

expected genesis outpoint of the contract which usually is a contract property and trustable

##### t\_selfScript

[`ByteString`](../type-aliases/ByteString.md)

expected self locking script, i.e. this.ctx.spentScript, of the currect spending UTXO context which is trustable

##### t\_prevTxInputList

[`ByteString`](../type-aliases/ByteString.md)

input list of the prevTx which should be trustable

#### Returns

`void`

***

### verifyFromScript()

> `static` **verifyFromScript**(`backtraceInfo`, `t_genesisScript`, `t_selfScript`, `t_prevTxInputList`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts:78](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts#L78)

Back-to-genesis backtrace verification for a contract which can be backtraced to the genesis script.
It will be a valid backtraceInfo if the prevPrevScript is the genesis script or the selfScript.

#### Parameters

##### backtraceInfo

[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)

backtrace info to verify, including prevTx and prevPrevTx informations

##### t\_genesisScript

[`ByteString`](../type-aliases/ByteString.md)

expected genensis locking script which usually is a contract property and trustable

##### t\_selfScript

[`ByteString`](../type-aliases/ByteString.md)

expected self locking script, i.e. this.ctx.spentScript, of the current spending UTXO context and is trustable

##### t\_prevTxInputList

[`ByteString`](../type-aliases/ByteString.md)

input list of the prevTx which should be trustable

#### Returns

`void`
