[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / HashedMap

# Class: HashedMap\<KeyType, ValueType, MaxAccessKeys\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:35](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L35)

## Extends

- `AnotherMap`\<`KeyType`, `ValueType`\>

## Type Parameters

• **KeyType** *extends* `PrimitiveTypes`

• **ValueType** *extends* `SupportedParamType`

• **MaxAccessKeys** *extends* `number`

## Constructors

### new HashedMap()

> **new HashedMap**\<`KeyType`, `ValueType`, `MaxAccessKeys`\>(`pairs`): [`HashedMap`](HashedMap.md)\<`KeyType`, `ValueType`, `MaxAccessKeys`\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:65](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L65)

create/initialize a hashed map with the pairs

#### Parameters

##### pairs

\[`KeyType`, `ValueType`\][]

The pairs of the map

#### Returns

[`HashedMap`](HashedMap.md)\<`KeyType`, `ValueType`, `MaxAccessKeys`\>

#### Overrides

`AnotherMap<KeyType, ValueType>.constructor`

## Properties

### \_\_hashed\_map\_dummy\_key\_\_

> `protected` **\_\_hashed\_map\_dummy\_key\_\_**: `KeyType`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:219](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L219)

***

### \_\_hashed\_map\_dummy\_max\_access\_keys\_\_

> `protected` **\_\_hashed\_map\_dummy\_max\_access\_keys\_\_**: `MaxAccessKeys`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:221](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L221)

***

### \_\_hashed\_map\_dummy\_value\_\_

> `protected` **\_\_hashed\_map\_dummy\_value\_\_**: `ValueType`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:220](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L220)

***

### genericType

> **genericType**: `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:41](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L41)

#### keyType

> **keyType**: `string`

#### maxAccessKeys

> **maxAccessKeys**: `number`

#### valueType

> **valueType**: `string`

***

### DUMMY\_EMPTY\_ROOT

> `readonly` `static` **DUMMY\_EMPTY\_ROOT**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:49](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L49)

## Methods

### assertAttached()

> **assertAttached**(): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:207](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L207)

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:27](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L27)

#### Returns

`void`

#### Inherited from

`AnotherMap.clear`

***

### deserializeKey()

> **deserializeKey**(`bytes`): `KeyType`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:169](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L169)

#### Parameters

##### bytes

[`ByteString`](../type-aliases/ByteString.md)

#### Returns

`KeyType`

***

### deserializeValue()

> **deserializeValue**(`bytes`): `ValueType`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:183](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L183)

#### Parameters

##### bytes

[`ByteString`](../type-aliases/ByteString.md)

#### Returns

`ValueType`

***

### entries()

> **entries**(): `IterableIterator`\<\[`KeyType`, `ValueType`\]\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:30](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L30)

#### Returns

`IterableIterator`\<\[`KeyType`, `ValueType`\]\>

#### Inherited from

`AnotherMap.entries`

***

### get()

> **get**(`key`): `ValueType`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:77](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L77)

Can call it inside a `@method` function

#### Parameters

##### key

`KeyType`

#### Returns

`ValueType`

#### Overrides

`AnotherMap.get`

***

### serializedEntries()

> **serializedEntries**(): \[[`ByteString`](../type-aliases/ByteString.md), [`ByteString`](../type-aliases/ByteString.md)\][]

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:213](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L213)

#### Returns

\[[`ByteString`](../type-aliases/ByteString.md), [`ByteString`](../type-aliases/ByteString.md)\][]

***

### set()

> **set**(`key`, `value`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:84](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L84)

Can call it inside a `@method` function

#### Parameters

##### key

`KeyType`

##### value

`ValueType`

#### Returns

`void`

#### Overrides

`AnotherMap.set`

***

### attachToState()

> `static` **attachToState**(`state`, `contractOrLib`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts:56](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMap.ts#L56)

attach all the hashedmap fields in the state to it's artifact

#### Parameters

##### state

`any`

##### contractOrLib

*typeof* `AbstractContract` | *typeof* [`SmartContractLib`](SmartContractLib.md)

#### Returns

`void`
