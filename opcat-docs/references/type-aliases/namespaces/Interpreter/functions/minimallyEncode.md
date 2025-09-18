[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Interpreter](../README.md) / \_minimallyEncode

# Function: \_minimallyEncode()

> **\_minimallyEncode**(`buf`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:224

Minimally encodes a buffer by removing unnecessary trailing zeros.

This function implements minimal encoding rules for script numbers:
- Empty buffer remains empty
- Last byte must not be 0x00 or 0x80 unless necessary
- Single zero byte encodes as empty buffer
- Preserves sign bit when trimming

## Parameters

### buf

`Buffer`

The input buffer to encode

## Returns

`Buffer`

Minimally encoded buffer (may be empty)
