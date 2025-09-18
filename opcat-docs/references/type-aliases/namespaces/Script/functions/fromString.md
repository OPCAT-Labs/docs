[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Script](../README.md) / fromString

# Function: fromString()

> **fromString**(`str`): [`Script`](../../../classes/Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:334

Converts a string representation of a script into a Script object.
Handles hex strings, empty strings, and space-separated opcode tokens.
For pushdata operations (OP_PUSHDATA1/2/4), validates format and length.
Throws errors for invalid script formats or data lengths.

## Parameters

### str

`string`

The script string to parse (hex or opcode tokens)

## Returns

[`Script`](../../../classes/Script.md)

The constructed Script object

## Throws

When script format is invalid or data lengths don't match
