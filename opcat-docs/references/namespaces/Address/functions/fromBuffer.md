[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Address](../README.md) / fromBuffer

# Function: fromBuffer()

> **fromBuffer**(`buffer`, `network`?, `type`?): [`Address`](../../../classes/Address.md)

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:198

Instantiate an address from a bitcoin address buffer

## Parameters

### buffer

`Buffer`

An instance of buffer of the address

### network?

`any`

either a Network instance, 'livenet', or 'testnet'

### type?

`string`

The type of address: 'pubkey'

## Returns

[`Address`](../../../classes/Address.md)

A new valid and frozen instance of an Address
