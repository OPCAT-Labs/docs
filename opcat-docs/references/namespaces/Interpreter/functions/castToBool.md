[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Interpreter](../README.md) / castToBool

# Function: castToBool()

> **castToBool**(`buf`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:203

Casts a buffer to a boolean value.
Returns true if any byte in the buffer is non-zero (except for the special case of negative zero).
Returns false if all bytes are zero or if the last byte is 0x80 (negative zero case).

## Parameters

### buf

`Buffer`

The input buffer to check

## Returns

`boolean`

The boolean representation of the buffer
