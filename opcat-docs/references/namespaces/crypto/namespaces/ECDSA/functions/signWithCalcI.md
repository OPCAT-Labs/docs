[**scrypt-ts-opcat v1.0.1**](../../../../../README.md)

***

[scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [ECDSA](../README.md) / signWithCalcI

# Function: signWithCalcI()

> **signWithCalcI**(`hashbuf`, `privkey`, `endian`?): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:164

Signs a hash buffer with a private key and calculates the 'i' value.

## Parameters

### hashbuf

`Buffer`

The hash buffer to sign.

### privkey

`Buffer`

The private key used for signing.

### endian?

`string`

The endianness of the input data (optional).

## Returns

`Buffer`

The resulting signature.

## Static
