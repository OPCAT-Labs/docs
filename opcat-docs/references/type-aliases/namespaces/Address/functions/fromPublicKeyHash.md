[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Address](../README.md) / fromPublicKeyHash

# Function: fromPublicKeyHash()

> **fromPublicKeyHash**(`hash`, `network`): [`Address`](../../../classes/Address.md)

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:189

Instantiate an address from a ripemd160 public key hash

## Parameters

### hash

`Buffer`

An instance of buffer of the hash

### network

`any`

either a Network instance, 'livenet', or 'testnet'

## Returns

[`Address`](../../../classes/Address.md)

A new valid and frozen instance of an Address
