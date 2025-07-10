[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / TxIn

# Type Alias: TxIn

> **TxIn**: `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts:36](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts#L36)

A structure representing the transaction input, excluding witnesses

## Type declaration

### prevOutputIndex

> **prevOutputIndex**: `UInt32`

4 bytes little endian.
input's prevout output index

### prevTxHash

> **prevTxHash**: [`ByteString`](ByteString.md)

32 bytes.
input's prevout transaction hash

### scriptHash

> **scriptHash**: [`ByteString`](ByteString.md)

32 bytes.
input's unlocking script hash

### sequence

> **sequence**: `UInt32`

4 bytes little endian.
input's sequence number

## Onchain
