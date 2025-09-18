[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [HDPrivateKey](../README.md) / isValidSerialized

# Function: isValidSerialized()

> **isValidSerialized**(`data`, `network`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:167

Verifies that a given serialized private key in base58 with checksum format
is valid.

## Parameters

### data

the serialized private key

`string` | `Buffer`

### network

`any`

optional, if present, checks that the
    network provided matches the network serialized.

## Returns

`boolean`
