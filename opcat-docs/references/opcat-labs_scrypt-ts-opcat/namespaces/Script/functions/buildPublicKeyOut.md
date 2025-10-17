[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [Script](../README.md) / buildPublicKeyOut

# Function: buildPublicKeyOut()

> **buildPublicKeyOut**(`pubkey`): [`Script`](../../../classes/Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:404

Builds a standard P2PK (Pay-to-Public-Key) script output.

## Parameters

### pubkey

[`PublicKey`](../../../classes/PublicKey.md)

The public key to create the script for

## Returns

[`Script`](../../../classes/Script.md)

A new script containing the public key and OP_CHECKSIG opcode
