[**scrypt-ts-opcat v1.0.4**](../../../../../README.md)

***

[scrypt-ts-opcat](../../../../../README.md) / [encoding](../../../README.md) / [Base58Check](../README.md) / decode

# Function: decode()

> **decode**(`s`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:71

Decodes a Base58Check encoded string and verifies its checksum.

## Parameters

### s

`string`

The Base58Check encoded string to decode.

## Returns

`Buffer`

The decoded data (excluding checksum).

## Throws

If input is not a string, too short, or checksum mismatch.

## Static
