[**scrypt-ts-opcat v1.0.1**](../../../../../README.md)

***

[scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [ECDSA](../README.md) / toLowS

# Function: toLowS()

> **toLowS**(`s`): [`BN`](../../../classes/BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:147

Converts the signature `s` value to its low-S form to comply with BIP 62.
This prevents signature malleability by ensuring `s` is not greater than half the curve order.

## Parameters

### s

[`BN`](../../../classes/BN.md)

The signature `s` value as a big number.

## Returns

[`BN`](../../../classes/BN.md)

The low-S normalized value.

## Static
