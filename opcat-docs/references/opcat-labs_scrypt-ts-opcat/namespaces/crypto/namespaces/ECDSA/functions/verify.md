[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [ECDSA](../README.md) / verify

# Function: verify()

> **verify**(`hashbuf`, `sig`, `pubkey`, `endian`?): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:183

Verifies an ECDSA signature against a hash and public key.

## Parameters

### hashbuf

`Buffer`

The hash buffer to verify against.

### sig

[`Signature`](../../../classes/Signature.md)

The signature to verify.

### pubkey

[`PublicKey`](../../../../../classes/PublicKey.md)

The public key to verify with.

### endian?

`string`

The endianness of the input data (optional).

## Returns

`boolean`

True if the signature is valid, false otherwise.

## Static
