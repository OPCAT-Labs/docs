[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / CAT20StateLib

# Class: CAT20StateLib

Defined in: [packages/cat-sdk/src/contracts/cat20/cat20StateLib.ts:12](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/cat20/cat20StateLib.ts#L12)

The CAT20 state library

## Onchain

## Extends

- `StateLib`\<[`CAT20State`](../type-aliases/CAT20State.md)\>

## Constructors

### new CAT20StateLib()

> **new CAT20StateLib**(...`args`): [`CAT20StateLib`](CAT20StateLib.md)

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContractLib.d.ts:18

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`CAT20StateLib`](CAT20StateLib.md)

#### Inherited from

`StateLib<CAT20State>.constructor`

## Other

### \_\_state\_lib\_dummy\_private\_field\_\_

> `protected` **\_\_state\_lib\_dummy\_private\_field\_\_**: [`CAT20State`](../type-aliases/CAT20State.md)

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/builtin-libs/stateLib.d.ts:42

#### Inherited from

`StateLib.__state_lib_dummy_private_field__`

***

### args

> **args**: `any`[]

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContractLib.d.ts:17

#### Inherited from

`StateLib.args`

***

### artifact

> `static` **artifact**: `Artifact`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContractLib.d.ts:14

#### Inherited from

`StateLib.artifact`

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContractLib.d.ts:15

#### Inherited from

`StateLib.stateType`

***

### checkState()

> `static` **checkState**(`_state`): `void`

Defined in: [packages/cat-sdk/src/contracts/cat20/cat20StateLib.ts:14](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/cat20/cat20StateLib.ts#L14)

#### Parameters

##### \_state

[`CAT20State`](../type-aliases/CAT20State.md)

#### Returns

`void`

***

### create()

> `static` **create**(`amount`, `address`): [`CAT20State`](../type-aliases/CAT20State.md)

Defined in: [packages/cat-sdk/src/contracts/cat20/cat20StateLib.ts:20](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/cat20/cat20StateLib.ts#L20)

#### Parameters

##### amount

`bigint`

##### address

`ByteString`

#### Returns

[`CAT20State`](../type-aliases/CAT20State.md)

***

### deserializeState()

> `static` **deserializeState**\<`T`\>(`this`, `serializedState`): `T`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/builtin-libs/stateLib.d.ts:30

Deserializes a state object from its ByteString representation.

#### Type Parameters

• **T** *extends* `OpcatState`

Type of the state object extending OpcatState

#### Parameters

##### this

(...`args`) => `StateLib`\<`T`\>

Reference to the StateLib class constructor

##### serializedState

`ByteString`

ByteString containing the serialized state data

#### Returns

`T`

The deserialized state object of type T

#### Throws

Error if artifact is not loaded, library is not found, or state type is undefined

#### Inherited from

`StateLib.deserializeState`

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* `SmartContractLib`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContractLib.d.ts:16

#### Parameters

##### artifact

`Artifact`

#### Returns

*typeof* `SmartContractLib`

#### Inherited from

`StateLib.loadArtifact`

***

### stateHash()

> `static` **stateHash**\<`T`\>(`this`, `state`): `ByteString`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/builtin-libs/stateLib.d.ts:39

Computes the SHA-256 hash of a serialized state object.

#### Type Parameters

• **T** *extends* `OpcatState`

Type extending OpcatState

#### Parameters

##### this

(...`args`) => `StateLib`\<`T`\>

##### state

`T`

The state object to hash

#### Returns

`ByteString`

The hash as a ByteString

#### Inherited from

`StateLib.stateHash`

## State

### serializeState()

> `static` **serializeState**\<`T`\>(`this`, `state`): `ByteString`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/builtin-libs/stateLib.d.ts:18

Serializes the given state object into a ByteString using the library's artifact.

#### Type Parameters

• **T** *extends* `OpcatState`

Type of the state object extending OpcatState

#### Parameters

##### this

(...`args`) => `StateLib`\<`T`\>

Reference to the StateLib class constructor

##### state

`T`

State object to be serialized

#### Returns

`ByteString`

Serialized state as ByteString

#### Throws

Error if artifact is not loaded, library not found in artifact, or state type is undefined

#### Inherited from

`StateLib.serializeState`
