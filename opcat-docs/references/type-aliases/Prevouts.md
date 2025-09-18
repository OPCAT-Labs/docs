[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Prevouts

# Type Alias: Prevouts

> **Prevouts**: [`ByteString`](ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts:156](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts#L156)

An bytestring refers to the outputs from previous transactions that are being spent as inputs in the current transaction.
prevout = prevTxHash(32 bytes) + prevOutputIndex(4 bytes)
prevouts1 + prevouts2 + ... + prevoutsN

## Onchain
