[**scrypt-ts-opcat v1.0.1**](../../../../../README.md)

***

[scrypt-ts-opcat](../../../../../README.md) / [encoding](../../../README.md) / [Base58Check](../README.md) / checksum

# Function: checksum()

> **checksum**(`buffer`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:79

Calculates the checksum for a given buffer using double SHA-256 hash.
The checksum is the first 4 bytes of the double-hashed result.

## Parameters

### buffer

`Buffer`

The input buffer to calculate checksum for

## Returns

`Buffer`

The 4-byte checksum

## Static
