[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Script](../README.md) / buildPublicKeyHashIn

# Function: buildPublicKeyHashIn()

> **buildPublicKeyHashIn**(`publicKey`, `signature`, `sigtype`?): [`Script`](../../../classes/Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:432

Builds a scriptSig (a script for an input) that signs a public key hash
output script.

## Parameters

### publicKey

`string` | `Buffer` | [`PublicKey`](../../../classes/PublicKey.md)

### signature

a Signature object, or the signature in DER canonical encoding

`Buffer` | [`Signature`](../../crypto/classes/Signature.md)

### sigtype?

`number`

the type of the signature (defaults to SIGHASH_ALL)

## Returns

[`Script`](../../../classes/Script.md)
