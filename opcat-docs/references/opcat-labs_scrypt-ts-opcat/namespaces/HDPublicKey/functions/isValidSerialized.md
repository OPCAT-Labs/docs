[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [HDPublicKey](../README.md) / isValidSerialized

# Function: isValidSerialized()

> **isValidSerialized**(`data`, `network`?): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:140

Verifies that a given serialized public key in base58 with checksum format
is valid.

## Parameters

### data

the serialized public key

`string` | `Buffer`

### network?

`any`

optional, if present, checks that the
    network provided matches the network serialized.

## Returns

`boolean`
