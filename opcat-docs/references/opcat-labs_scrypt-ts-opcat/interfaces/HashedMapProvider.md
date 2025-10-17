[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / HashedMapProvider

# Interface: HashedMapProvider

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts#L17)

## Methods

### getKeyValues()

> **getKeyValues**(`scripthash`, `stateFieldPath`, `utxo`): `Promise`\<\{ `keyValues`: \[[`ByteString`](../type-aliases/ByteString.md), [`ByteString`](../type-aliases/ByteString.md)\][]; \}\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts:25](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts#L25)

Get the key values snapshot of the hashed map instance

#### Parameters

##### scripthash

`string`

##### stateFieldPath

`string`

##### utxo

`Outpoint`

#### Returns

`Promise`\<\{ `keyValues`: \[[`ByteString`](../type-aliases/ByteString.md), [`ByteString`](../type-aliases/ByteString.md)\][]; \}\>

***

### getLatestUtxo()

> **getLatestUtxo**(`scripthash`, `stateFieldPath`, `instanceOutpoint`): `Promise`\<`Outpoint` & `object`\>

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts:40](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapProvider.ts#L40)

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
