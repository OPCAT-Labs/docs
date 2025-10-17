[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [Script](../README.md) / buildMultisigOut

# Function: buildMultisigOut()

> **buildMultisigOut**(`publicKeys`, `threshold`, `opts`?): [`Script`](../../../classes/Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:376

Builds a multisig output script from given public keys and threshold.

## Parameters

### publicKeys

`any`[]

Array of public keys to include in the multisig

### threshold

`number`

Minimum number of signatures required

### opts?

Optional parameters

#### noSorting?

`boolean`

If true, skips sorting of public keys

## Returns

[`Script`](../../../classes/Script.md)

The constructed multisig script
