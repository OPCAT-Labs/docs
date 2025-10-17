[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / TxIn

# Type Alias: TxIn

> **TxIn**: `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts:36](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts#L36)

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
