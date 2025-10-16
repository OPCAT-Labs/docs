[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / slice

# Function: slice()

> **slice**(`byteString`, `start`, `end`?): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/fns/byteString.ts:74](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/fns/byteString.ts#L74)

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
