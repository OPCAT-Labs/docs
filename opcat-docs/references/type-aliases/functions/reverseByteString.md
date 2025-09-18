[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / reverseByteString

# Function: reverseByteString()

> **reverseByteString**(`b`, `size`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/fns/byteString.ts:105](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/fns/byteString.ts#L105)

Returns reversed bytes of b, which is of size bytes. Note size must be a compiled-time constant.
It is often useful when converting a number between little-endian and big-endian.

## Parameters

### b

[`ByteString`](../type-aliases/ByteString.md)

a ByteString to be reversed

### size

[`Int32`](../type-aliases/Int32.md)

the size of the ByteString.

## Returns

[`ByteString`](../type-aliases/ByteString.md)

reversed ByteString.

## Onchain
