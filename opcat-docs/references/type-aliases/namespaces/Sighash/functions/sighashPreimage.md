[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Sighash](../README.md) / sighashPreimage

# Function: sighashPreimage()

> **sighashPreimage**(`transaction`, `sighashType`, `inputNumber`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/sighash.d.cts:22

Returns a buffer with the which is hashed with sighash that needs to be signed
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
