[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / HashedMapTrackerProvider

# Class: HashedMapTrackerProvider

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts:49](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts#L49)

## Implements

- [`HashedMapProvider`](../interfaces/HashedMapProvider.md)

## Constructors

### new HashedMapTrackerProvider()

> **new HashedMapTrackerProvider**(`trackerUrl`): [`HashedMapTrackerProvider`](HashedMapTrackerProvider.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts:56](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts#L56)

#### Parameters

##### trackerUrl

`string`

the url of the tracker server

#### Returns

[`HashedMapTrackerProvider`](HashedMapTrackerProvider.md)

## Properties

### bindUtxoCallback()

> `static` **bindUtxoCallback**: (`hashedmapProvider`) => (`contract`) => `Promise`\<`void`\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts:51](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts#L51)

#### Parameters

##### hashedmapProvider

[`HashedMapProvider`](../interfaces/HashedMapProvider.md)

#### Returns

`Function`

##### Parameters

###### contract

[`SmartContract`](SmartContract.md)\<`any`\>

##### Returns

`Promise`\<`void`\>

## Methods

### getKeyValues()

> **getKeyValues**(`scripthash`, `stateFieldPath`, `currentOutpoint`): `Promise`\<\{ `keyValues`: \[[`ByteString`](../type-aliases/ByteString.md), [`ByteString`](../type-aliases/ByteString.md)\][]; \}\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts:60](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts#L60)

Get the key values snapshot of the hashed map instance

#### Parameters

##### scripthash

`string`

##### stateFieldPath

`string`

##### currentOutpoint

`Outpoint`

#### Returns

`Promise`\<\{ `keyValues`: \[[`ByteString`](../type-aliases/ByteString.md), [`ByteString`](../type-aliases/ByteString.md)\][]; \}\>

#### Implementation of

[`HashedMapProvider`](../interfaces/HashedMapProvider.md).[`getKeyValues`](../interfaces/HashedMapProvider.md#getkeyvalues)

***

### getLatestUtxo()

> **getLatestUtxo**(`scripthash`, `stateFieldPath`, `instanceOutpoint`): `Promise`\<`Outpoint` & `object`\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts:70](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts#L70)

Get the latest utxo of the hashed map instance

#### Parameters

##### scripthash

`string`

##### stateFieldPath

`string`

##### instanceOutpoint

`Outpoint`

#### Returns

`Promise`\<`Outpoint` & `object`\>

#### Implementation of

[`HashedMapProvider`](../interfaces/HashedMapProvider.md).[`getLatestUtxo`](../interfaces/HashedMapProvider.md#getlatestutxo)

***

### deserializeKeyValuesResponse()

> `static` **deserializeKeyValuesResponse**(`bytes`): \[[`ByteString`](../type-aliases/ByteString.md), [`ByteString`](../type-aliases/ByteString.md)\][]

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts:151](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts#L151)

#### Parameters

##### bytes

`Uint8Array`

#### Returns

\[[`ByteString`](../type-aliases/ByteString.md), [`ByteString`](../type-aliases/ByteString.md)\][]

***

### serializeKeyValuesResponse()

> `static` **serializeKeyValuesResponse**(`keyValues`): `Uint8Array`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts:134](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts#L134)

#### Parameters

##### keyValues

\[[`ByteString`](../type-aliases/ByteString.md), [`ByteString`](../type-aliases/ByteString.md)\][]

#### Returns

`Uint8Array`
