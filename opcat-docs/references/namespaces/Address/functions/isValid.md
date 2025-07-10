[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Address](../README.md) / isValid

# Function: isValid()

> **isValid**(`data`, `network`, `type`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:251

Will return a boolean if an address is valid

## Parameters

### data

`string`

The encoded data

### network

`any`

either a Network instance, 'livenet', or 'testnet'

### type

`string`

The type of address: 'pubkey'

## Returns

`boolean`

The corresponding error message

## Example

```javascript
assert(Address.isValid('15vkcKf7gB23wLAnZLmbVuMiiVDc1Nm4a2', 'livenet'));
```
