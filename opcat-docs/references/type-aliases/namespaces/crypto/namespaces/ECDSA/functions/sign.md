[**scrypt-ts-opcat v1.0.4**](../../../../../README.md)

***

[scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [ECDSA](../README.md) / sign

# Function: sign()

> **sign**(`hashbuf`, `privkey`, `endian`?): [`Signature`](../../../classes/Signature.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:155

Signs a message hash using ECDSA with the given private key.

## Parameters

### hashbuf

`Buffer`

The hash of the message to sign

### privkey

`PrivateKey`

The private key to sign with

### endian?

`string`

Endianness of the input/output (optional)

## Returns

[`Signature`](../../../classes/Signature.md)

The ECDSA signature
