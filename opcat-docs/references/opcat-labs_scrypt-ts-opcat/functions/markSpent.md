[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / markSpent

# Function: markSpent()

> **markSpent**(`utxoProvider`, `tx`): `void`

Defined in: [packages/scrypt-ts-opcat/src/providers/utxoProvider.ts:50](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/utxoProvider.ts#L50)

Marks all inputs of a transaction as spent in the UTXO provider.

## Parameters

### utxoProvider

[`UtxoProvider`](../interfaces/UtxoProvider.md)

The UTXO provider to update.

### tx

[`Transaction`](../classes/Transaction.md)

The transaction whose inputs should be marked as spent.

## Returns

`void`
