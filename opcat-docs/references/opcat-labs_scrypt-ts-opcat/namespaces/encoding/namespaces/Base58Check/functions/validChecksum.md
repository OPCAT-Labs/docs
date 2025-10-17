[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../../../README.md) / [encoding](../../../README.md) / [Base58Check](../README.md) / validChecksum

# Function: validChecksum()

> **validChecksum**(`data`, `checksum`?): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:63

Validates the checksum of Base58Check encoded data.

## Parameters

### data

The data to validate, either as a Buffer or Base58 encoded string.

`string` | `Buffer`

### checksum?

Optional checksum to validate against, either as a Buffer or Base58 encoded string.
If not provided, the last 4 bytes of the data will be used as checksum.

`string` | `Buffer`

## Returns

`boolean`

True if the computed checksum matches the provided/embedded checksum.

## Static
