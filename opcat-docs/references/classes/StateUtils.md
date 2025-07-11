[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / StateUtils

# Class: StateUtils

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateUtils.ts:18](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateUtils.ts#L18)

Verifies that the hash of a raw state matches the corresponding spent data hash in the transaction.

## Param

The index of the input being verified

## Param

The hash of the serialized raw state to check

## Param

Trustable spent data hashes from the transaction

## Throws

Throws an assertion error if the state hash doesn't match the spent data hash

## Onchain

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Constructors

### new StateUtils()

> **new StateUtils**(...`args`): [`StateUtils`](StateUtils.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L32)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`StateUtils`](StateUtils.md)

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

### checkInputState()

> `static` **checkInputState**(`t_inputIndex`, `stateHash`, `t_spentDataHashes`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateUtils.ts:26](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateUtils.ts#L26)

Check if the dataHash of the passed-in raw state matches the spent data hash

#### Parameters

##### t\_inputIndex

`UInt32`

trustable input index

##### stateHash

[`ByteString`](../type-aliases/ByteString.md)

##### t\_spentDataHashes

[`ByteString`](../type-aliases/ByteString.md)

trustable spent data hashes

#### Returns

`void`

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
