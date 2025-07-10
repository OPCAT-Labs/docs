[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Script](../README.md) / buildPublicKeyHashOut

# Function: buildPublicKeyHashOut()

> **buildPublicKeyHashOut**(`to`): [`Script`](../../../classes/Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:398

Builds a standard P2PKH (Pay-to-Public-Key-Hash) script for a given recipient.

## Parameters

### to

Recipient's public key, address, or address string

`string` | [`Address`](../../../classes/Address.md) | [`PublicKey`](../../../classes/PublicKey.md)

## Returns

[`Script`](../../../classes/Script.md)

A P2PKH script with the format: `OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG`

## Throws

If 'to' argument is undefined or invalid type
