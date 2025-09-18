[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Address](../README.md) / getValidationError

# Function: getValidationError()

> **getValidationError**(`data`, `network`, `type`): `Error`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:237

Will return a validation error if exists

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

`Error`

The corresponding error message

## Example

```javascript
// a network mismatch error
var error = Address.getValidationError('15vkcKf7gB23wLAnZLmbVuMiiVDc1Nm4a2', 'testnet');
```
