[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Transaction](../README.md) / shallowCopy

# Function: shallowCopy()

> **shallowCopy**(`transaction`): [`Transaction`](../../../classes/Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:704

Create a 'shallow' copy of the transaction, by serializing and deserializing
it dropping any additional information that inputs and outputs may have hold

## Parameters

### transaction

[`Transaction`](../../../classes/Transaction.md)

The transaction to copy.

## Returns

[`Transaction`](../../../classes/Transaction.md)

A new Transaction instance with the same data.
