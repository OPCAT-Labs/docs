[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / intToByteString

# Function: intToByteString()

> **intToByteString**(`n`, `size`?): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/fns/byteString.ts:37](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/fns/byteString.ts#L37)

int can be converted to a byte string with int2ByteString.

## Parameters

### n

`bigint`

a number being converts

### size?

`bigint`

the size of the result byte string, if not specified, the size will be determined by the number of bytes required to represent the number.

## Returns

[`ByteString`](../type-aliases/ByteString.md)

returns a ByteString

## Onchain

## Throws

throws an error if the number is out of range `size` bytes
