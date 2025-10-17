[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / Outpoint

# Type Alias: Outpoint

> **Outpoint**: `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts:8](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts#L8)

The structure used to refer to a particular transaction output

## Type declaration

### outputIndex

> **outputIndex**: `UInt32`

The index of the output in the transaction.

### txHash

> **txHash**: [`ByteString`](ByteString.md)

The transaction hash, which is the reverse order of bytes of the `txId`.

## Onchain
