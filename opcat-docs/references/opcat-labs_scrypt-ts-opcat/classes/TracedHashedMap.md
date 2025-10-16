[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / TracedHashedMap

# Class: TracedHashedMap\<KeyType, ValueType, MaxAccessKeys\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:57](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L57)

This class is a wrapper of the hashed map, only used to trace the access of the hashed map.
when executing the smart contract unlock method, wrap the hashed map and trace the access, then extract the hashed map contract and inject it to bitcoin unlocking script.

This class is only used in this repo internally, do not use it outside this repo.

## Type Parameters

• **KeyType** *extends* `PrimitiveTypes`

• **ValueType** *extends* `StructObject`

• **MaxAccessKeys** *extends* `number`

## Constructors

### new TracedHashedMap()

> **new TracedHashedMap**\<`KeyType`, `ValueType`, `MaxAccessKeys`\>(`beforeMap`): [`TracedHashedMap`](TracedHashedMap.md)\<`KeyType`, `ValueType`, `MaxAccessKeys`\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:66](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L66)

#### Parameters

##### beforeMap

[`HashedMap`](HashedMap.md)\<`KeyType`, `ValueType`, `MaxAccessKeys`\>

#### Returns

[`TracedHashedMap`](TracedHashedMap.md)\<`KeyType`, `ValueType`, `MaxAccessKeys`\>

## Properties

### afterMap

> **afterMap**: [`HashedMap`](HashedMap.md)\<`KeyType`, `ValueType`, `MaxAccessKeys`\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:63](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L63)

***

### beforeMap

> **beforeMap**: [`HashedMap`](HashedMap.md)\<`KeyType`, `ValueType`, `MaxAccessKeys`\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:62](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L62)

## Accessors

### genericType

#### Get Signature

> **get** **genericType**(): `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:97](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L97)

##### Returns

`object`

###### keyType

> **keyType**: `string`

###### maxAccessKeys

> **maxAccessKeys**: `number`

###### valueType

> **valueType**: `string`

## Methods

### emptyKey()

> **emptyKey**(): `KeyType`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:94](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L94)

#### Returns

`KeyType`

***

### emptyValue()

> **emptyValue**(): `ValueType`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:91](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L91)

#### Returns

`ValueType`

***

### extractContext()

> **extractContext**(): `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:115](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L115)

#### Returns

`object`

##### ctx

> **ctx**: [`HashedMapContext`](../type-aliases/HashedMapContext.md)\<`KeyType`, `ValueType`, `MaxAccessKeys`\>

##### operations

> **operations**: `Operation`\<`KeyType`, `ValueType`\>[]

***

### get()

> **get**(`key`): `ValueType`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:80](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L80)

#### Parameters

##### key

`KeyType`

#### Returns

`ValueType`

***

### serializeKey()

> **serializeKey**(`key`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:85](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L85)

#### Parameters

##### key

`KeyType`

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

***

### serializeValue()

> **serializeValue**(`value`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:88](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L88)

#### Parameters

##### value

`ValueType`

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

***

### set()

> **set**(`key`, `value`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:75](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L75)

#### Parameters

##### key

`KeyType`

##### value

`ValueType`

#### Returns

`void`
