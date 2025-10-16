[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [Script](../README.md) / buildMultisigIn

# Function: buildMultisigIn()

> **buildMultisigIn**(`pubkeys`, `threshold`, `signatures`, `opts`?): [`Script`](../../../classes/Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:391

A new Multisig input script for the given public keys, requiring m of those public keys to spend

## Parameters

### pubkeys

[`PublicKey`](../../../classes/PublicKey.md)[]

list of all public keys controlling the output

### threshold

`number`

amount of required signatures to spend the output

### signatures

`any`[]

and array of signature buffers to append to the script

### opts?

`any`

## Returns

[`Script`](../../../classes/Script.md)
