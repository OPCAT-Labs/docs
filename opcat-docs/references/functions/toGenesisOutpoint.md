[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / toGenesisOutpoint

# Function: toGenesisOutpoint()

> **toGenesisOutpoint**(`utxo`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/utils/proof.ts:29](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/utils/proof.ts#L29)

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
