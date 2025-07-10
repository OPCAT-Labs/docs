[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Sighash](../README.md) / sighash

# Function: sighash()

> **sighash**(`transaction`, `sighashType`, `inputNumber`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/sighash.d.cts:34

Returns a buffer of length 32 bytes with the hash that needs to be signed
for OP_CHECKSIG.

## Parameters

### transaction

`Transaction`

the transaction to sign

### sighashType

`number`

the type of the hash

### inputNumber

`number`

the input index for the signature

## Returns

`Buffer`

## Name

Signing.sighash
