[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [Opcode](../README.md) / smallInt

# Function: smallInt()

> **smallInt**(`n`): [`Opcode`](../../../classes/Opcode.md)

Defined in: node\_modules/@opcat-labs/opcat/types/opcode.d.cts:82

Converts a small integer (0-16) to its corresponding opcode.

## Parameters

### n

`number`

The integer to convert (must be between 0 and 16)

## Returns

[`Opcode`](../../../classes/Opcode.md)

The corresponding opcode (OP_0 for 0, OP_1+n-1 for 1-16)

## Throws

If n is not a number or outside valid range
