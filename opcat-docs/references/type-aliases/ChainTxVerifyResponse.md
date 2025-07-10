[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / ChainTxVerifyResponse

# Type Alias: ChainTxVerifyResponse

> **ChainTxVerifyResponse**: `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/backtrace.ts#L17)

Represents the response data for verifying a transaction in the chain.
Contains the previous script and outpoint information needed for verification.

## Type declaration

### prevPrevOutpoint

> **prevPrevOutpoint**: [`ByteString`](ByteString.md)

### prevPrevScript

> **prevPrevScript**: [`ByteString`](ByteString.md)
