[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Script](../README.md) / buildPublicKeyIn

# Function: buildPublicKeyIn()

> **buildPublicKeyIn**(`signature`, `sigtype`?): [`Script`](../../../classes/Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:423

Builds a scriptSig (a script for an input) that signs a public key output script.

## Parameters

### signature

a Signature object, or the signature in DER canonical encoding

`Buffer` | [`Signature`](../../crypto/classes/Signature.md)

### sigtype?

`number`

the type of the signature (defaults to SIGHASH_ALL)

## Returns

[`Script`](../../../classes/Script.md)
