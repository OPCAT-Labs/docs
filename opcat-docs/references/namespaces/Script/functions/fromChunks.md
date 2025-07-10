[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Script](../README.md) / fromChunks

# Function: fromChunks()

> **fromChunks**(`chunks`): [`Script`](../../../classes/Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:312

Creates a Script instance from an array of opcode chunks.
Handles different pushdata opcodes (OP_PUSHDATA1, OP_PUSHDATA2, OP_PUSHDATA4)
by writing appropriate length prefixes before the buffer data.

## Parameters

### chunks

`any`[]

Array of opcode chunks containing opcodenum and optional buf/len

## Returns

[`Script`](../../../classes/Script.md)

A new Script instance with compiled buffer
