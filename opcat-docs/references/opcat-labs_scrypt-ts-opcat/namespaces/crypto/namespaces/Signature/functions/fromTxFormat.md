[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [Signature](../README.md) / fromTxFormat

# Function: fromTxFormat()

> **fromTxFormat**(`buf`): [`Signature`](../../../classes/Signature.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:99

Converts a transaction-format signature buffer to a Signature object.

## Parameters

### buf

`Buffer`

The signature buffer in transaction format (DER + hash type byte)

## Returns

[`Signature`](../../../classes/Signature.md)

The parsed Signature object with nhashtype property set

## Static
