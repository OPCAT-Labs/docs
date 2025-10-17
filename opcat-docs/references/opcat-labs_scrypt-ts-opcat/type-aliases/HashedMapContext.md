[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / HashedMapContext

# Type Alias: HashedMapContext\<KeyType, ValueType, MaxAccessKeys\>

> **HashedMapContext**\<`KeyType`, `ValueType`, `MaxAccessKeys`\>: `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts:13](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/tracedHashedMap.ts#L13)

## Type Parameters

• **KeyType**

• **ValueType**

• **MaxAccessKeys** *extends* `number`

## Type declaration

### accessIndexes

> **accessIndexes**: [`ByteString`](ByteString.md)

### keys

> **keys**: [`FixedArray`](FixedArray.md)\<`KeyType`, `MaxAccessKeys`\>

### leafValues

> **leafValues**: [`FixedArray`](FixedArray.md)\<`ValueType`, `MaxAccessKeys`\>

### nextLeafValues

> **nextLeafValues**: [`FixedArray`](FixedArray.md)\<`ValueType`, `MaxAccessKeys`\>

### proofs

> **proofs**: [`ByteString`](ByteString.md)
