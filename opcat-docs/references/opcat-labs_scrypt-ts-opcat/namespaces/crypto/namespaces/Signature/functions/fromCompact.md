[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [Signature](../README.md) / fromCompact

# Function: fromCompact()

> **fromCompact**(`buf`): [`Signature`](../../../classes/Signature.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:90

Creates a Signature instance from a compact ECDSA signature buffer.

## Parameters

### buf

`Buffer`

The compact signature buffer (65 bytes).

## Returns

[`Signature`](../../../classes/Signature.md)

The parsed signature object.

## Throws

If the input is invalid (not a Buffer, wrong length, or invalid recovery param).

## Static
