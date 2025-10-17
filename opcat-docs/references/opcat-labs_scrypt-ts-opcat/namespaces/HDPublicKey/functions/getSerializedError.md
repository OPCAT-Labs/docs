[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [HDPublicKey](../README.md) / getSerializedError

# Function: getSerializedError()

> **getSerializedError**(`data`, `network`?): `Error`

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:150

Checks what's the error that causes the validation of a serialized public key
in base58 with checksum to fail.

## Parameters

### data

the serialized public key

`string` | `Buffer`

### network?

`any`

optional, if present, checks that the
    network provided matches the network serialized.

## Returns

`Error`
