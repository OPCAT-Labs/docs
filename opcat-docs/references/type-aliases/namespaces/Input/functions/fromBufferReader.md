[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Input](../README.md) / fromBufferReader

# Function: fromBufferReader()

> **fromBufferReader**(`br`): [`Input`](../../../classes/Input.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:168

Creates an Input instance from a BufferReader.

## Parameters

### br

`BufferReader`

The buffer reader containing input data.

## Returns

[`Input`](../../../classes/Input.md)

The parsed Input object with properties:
  - prevTxId: Reversed 32-byte previous transaction ID.
  - outputIndex: LE uint32 output index.
  - _scriptBuffer: Var-length script buffer.
  - sequenceNumber: LE uint32 sequence number.

## Note

TODO: Return specialized input types (CoinbaseInput, PublicKeyHashInput, etc.).

## Static
