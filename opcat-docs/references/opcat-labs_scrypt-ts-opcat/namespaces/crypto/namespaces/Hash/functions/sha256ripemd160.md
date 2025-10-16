[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [Hash](../README.md) / sha256ripemd160

# Function: sha256ripemd160()

> **sha256ripemd160**(`buf`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/hash.d.cts:70

A RIPEMD160 hash of a SHA256 hash, which is always 160 bits or 20 bytes long.
This value is commonly used inside Bitcoin, particularly for Bitcoin
addresses.

See:
https://en.wikipedia.org/wiki/RIPEMD

## Parameters

### buf

`Buffer`

Data, a.k.a. pre-image, which can be any size.

## Returns

`Buffer`

The hash in the form of a buffer.
