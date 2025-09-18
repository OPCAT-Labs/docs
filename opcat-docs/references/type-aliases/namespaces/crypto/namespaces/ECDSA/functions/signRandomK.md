[**scrypt-ts-opcat v1.0.4**](../../../../../README.md)

***

[scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [ECDSA](../README.md) / signRandomK

# Function: signRandomK()

> **signRandomK**(`hashbuf`, `privkey`, `endian`?): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:173

Signs a message hash using ECDSA with a randomly generated K value.

## Parameters

### hashbuf

`Buffer`

The message hash to sign.

### privkey

`Buffer`

The private key used for signing.

### endian?

`string`

The endianness of the input/output (default: 'big').

## Returns

`Buffer`

The generated ECDSA signature.

## Static
