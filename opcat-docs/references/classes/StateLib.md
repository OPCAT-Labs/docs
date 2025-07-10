[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / StateLib

# Class: StateLib\<ST\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateLib.ts:14](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateLib.ts#L14)

Library for computing the hash of a state.

## Onchain

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Type Parameters

• **ST** *extends* [`OpcatState`](../type-aliases/OpcatState.md)

## Constructors

### new StateLib()

> **new StateLib**\<`ST`\>(...`args`): [`StateLib`](StateLib.md)\<`ST`\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L32)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`StateLib`](StateLib.md)\<`ST`\>

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`constructor`](SmartContractLib.md#constructors)

## Other

### \_\_state\_lib\_dummy\_private\_field\_\_

> `protected` **\_\_state\_lib\_dummy\_private\_field\_\_**: `ST`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateLib.ts:95](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateLib.ts#L95)

***

### args

> **args**: `any`[] = `[]`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:31](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L31)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`args`](SmartContractLib.md#args-1)

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:16](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L16)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`artifact`](SmartContractLib.md#artifact)

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L17)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`stateType`](SmartContractLib.md#statetype)

***

### deserializeState()

> `static` **deserializeState**\<`T`\>(`this`, `serializedState`): `T`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateLib.ts:56](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateLib.ts#L56)

Deserializes a state object from its ByteString representation.

#### Type Parameters

• **T** *extends* `StructObject`

Type of the state object extending OpcatState

#### Parameters

##### this

(...`args`) => [`StateLib`](StateLib.md)\<`T`\>

Reference to the StateLib class constructor

##### serializedState

[`ByteString`](../type-aliases/ByteString.md)

ByteString containing the serialized state data

#### Returns

`T`

The deserialized state object of type T

#### Throws

Error if artifact is not loaded, library is not found, or state type is undefined

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L19)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

*typeof* [`SmartContractLib`](SmartContractLib.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`loadArtifact`](SmartContractLib.md#loadartifact)

***

### stateHash()

> `static` **stateHash**\<`T`\>(`this`, `state`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateLib.ts:87](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateLib.ts#L87)

Computes the SHA-256 hash of a serialized state object.

#### Type Parameters

• **T** *extends* `StructObject`

Type extending OpcatState

#### Parameters

##### this

(...`args`) => [`StateLib`](StateLib.md)\<`T`\>

##### state

`T`

The state object to hash

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

The hash as a ByteString

## State

### serializeState()

> `static` **serializeState**\<`T`\>(`this`, `state`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateLib.ts:22](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stateLib.ts#L22)

Calculate the hash of the state object

#### Type Parameters

• **T** *extends* `StructObject`

#### Parameters

##### this

(...`args`) => [`StateLib`](StateLib.md)\<`T`\>

##### state

`T`

the state object

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

the hash byte string of the state object

#### Onchain
