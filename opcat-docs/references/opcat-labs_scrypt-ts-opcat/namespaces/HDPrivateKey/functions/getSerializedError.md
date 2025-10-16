[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [HDPrivateKey](../README.md) / getSerializedError

# Function: getSerializedError()

> **getSerializedError**(`data`, `network`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:177

Checks what's the error that causes the validation of a serialized private key
in base58 with checksum to fail.

## Parameters

### data

the serialized private key

`string` | `Buffer`

### network

`any`

optional, if present, checks that the
    network provided matches the network serialized.

## Returns

`any`
