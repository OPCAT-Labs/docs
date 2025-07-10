[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Outpoint

# Type Alias: Outpoint

> **Outpoint**: `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts:8](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts#L8)

The structure used to refer to a particular transaction output

## Type declaration

### outputIndex

> **outputIndex**: `UInt32`

The index of the output in the transaction.

### txHash

> **txHash**: [`ByteString`](ByteString.md)

The transaction hash, which is the reverse order of bytes of the `txId`.

## Onchain
