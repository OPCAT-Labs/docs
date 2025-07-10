[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / toGenesisOutpoint

# Function: toGenesisOutpoint()

> **toGenesisOutpoint**(`utxo`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/utils/proof.ts:29](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/utils/proof.ts#L29)

Converts a UTXO to its genesis outpoint format.
The genesis outpoint is constructed by reversing the txId bytes and appending
the output index as a 4-byte little-endian string.

## Parameters

### utxo

[`UTXO`](../interfaces/UTXO.md)

The UTXO to convert

## Returns

[`ByteString`](../type-aliases/ByteString.md)

The genesis outpoint as a hex-encoded ByteString
