[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / slice

# Function: slice()

> **slice**(`byteString`, `start`, `end`?): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/fns/byteString.ts:74](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/fns/byteString.ts#L74)

Returns a section of a ByteString.

## Parameters

### byteString

[`ByteString`](../type-aliases/ByteString.md)

The ByteString.

### start

[`Int32`](../type-aliases/Int32.md)

The beginning byte index of the specified portion of ByteString, included.

### end?

[`Int32`](../type-aliases/Int32.md)

The end byte index of the specified portion of ByteString, excluded.
 If this value is not specified, the sub-section continues to the end of ByteString.

## Returns

[`ByteString`](../type-aliases/ByteString.md)

## Onchain
