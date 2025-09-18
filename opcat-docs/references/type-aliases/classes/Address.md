[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Address

# Class: Address

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:36

Instantiate an address from an address String or Buffer, a public key hash Buffer,
or a [PublicKey](../namespaces/PublicKey/README.md) Buffer.

This is an immutable class, and if the first parameter provided to this constructor is an
`Address` instance, the same argument will be returned.

An address has two key properties: `network` and `type`. The type is either
`Address.PayToPublicKeyHash` (value is the `'pubkeyhash'` string).
The network is an instance of [Network](Network.md).
You can quickly check whether an address is of a given kind by using the methods
`isPayToPublicKeyHash`

## Example

```javascript
// validate that an input field is valid
var error = Address.getValidationError(input, 'testnet');
if (!error) {
  var address = Address(input, 'testnet');
} else {
  // invalid network or checksum (typo?)
  var message = error.messsage;
}

// get an address from a public key
var address = Address(publicKey, 'testnet').toString();
```

## Param

The encoded data in various formats

## Param

The network: 'livenet' or 'testnet'

## Param

The type of address: 'pubkey'

## Constructors

### new Address()

> **new Address**(`data`, `network`?, `type`?): [`Address`](Address.md)

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:72

Instantiate an address from an address String or Buffer, a public key hash Buffer,
or a [PublicKey](../namespaces/PublicKey/README.md) Buffer.

This is an immutable class, and if the first parameter provided to this constructor is an
`Address` instance, the same argument will be returned.

An address has two key properties: `network` and `type`. The type is either
`Address.PayToPublicKeyHash` (value is the `'pubkeyhash'` string).
The network is an instance of [Network](Network.md).
You can quickly check whether an address is of a given kind by using the methods
`isPayToPublicKeyHash`

#### Parameters

##### data

`any`

The encoded data in various formats

##### network?

`any`

The network: 'livenet' or 'testnet'

##### type?

`string`

The type of address: 'pubkey'

#### Returns

[`Address`](Address.md)

A new valid and frozen instance of an Address

#### Example

```javascript
// validate that an input field is valid
var error = Address.getValidationError(input, 'testnet');
if (!error) {
  var address = Address(input, 'testnet');
} else {
  // invalid network or checksum (typo?)
  var message = error.messsage;
}

// get an address from a public key
var address = Address(publicKey, 'testnet').toString();
```

## Properties

### toObject()

> **toObject**: () => `any`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:101

#### Returns

`any`

A plain object with the address information

## Accessors

### hashBuffer

#### Get Signature

> **get** **hashBuffer**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:73

##### Returns

`any`

***

### network

#### Get Signature

> **get** **network**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:74

##### Returns

`any`

***

### type

#### Get Signature

> **get** **type**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:75

##### Returns

`any`

## Methods

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:108

Will return a string formatted for the console

#### Returns

`string`

Bitcoin address

***

### isPayToPublicKeyHash()

> **isPayToPublicKeyHash**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:81

Returns true if an address is of pay to public key hash type

#### Returns

`boolean`

boolean

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:87

Will return a buffer representation of the address

#### Returns

`Buffer`

Bitcoin address buffer

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:92

Converts the address to a hexadecimal string representation.

#### Returns

`string`

The hexadecimal string representation of the address.

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:102

#### Returns

`any`

***

### toPublickeyHash()

> **toPublickeyHash**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:97

Converts the address to a publickey hash string representation.

#### Returns

`string`

The hexadecimal string of the publickey hash buffer.

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/address.d.cts:114

Will return a the base58 string representation of the address

#### Returns

`string`

Bitcoin address
