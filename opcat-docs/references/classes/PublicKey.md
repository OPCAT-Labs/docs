[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / PublicKey

# Class: PublicKey

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:27

Instantiate a PublicKey from a [PrivateKey](../namespaces/PrivateKey/README.md), [Point](../namespaces/crypto/classes/Point.md), `string`, or `Buffer`.

There are two internal properties, `network` and `compressed`, that deal with importing
a PublicKey from a PrivateKey in WIF format. More details described on [PrivateKey](../namespaces/PrivateKey/README.md)

## Example

```javascript
// instantiate from a private key
var key = PublicKey(privateKey, true);

// export to as a DER hex encoded string
var exported = key.toString();

// import the public key
var imported = PublicKey.fromString(exported);
```

## Param

The encoded data in various formats

## Param

additional options

## Param

Which network should the address for this public key be for

## Param

If the public key is compressed

## Constructors

### new PublicKey()

> **new PublicKey**(`data`, `extra`): [`PublicKey`](PublicKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:57

Instantiate a PublicKey from a [PrivateKey](../namespaces/PrivateKey/README.md), [Point](../namespaces/crypto/classes/Point.md), `string`, or `Buffer`.

There are two internal properties, `network` and `compressed`, that deal with importing
a PublicKey from a PrivateKey in WIF format. More details described on [PrivateKey](../namespaces/PrivateKey/README.md)

#### Parameters

##### data

`string`

The encoded data in various formats

##### extra

additional options

###### compressed?

`string`

If the public key is compressed

###### network

`Network`

Which network should the address for this public key be for

#### Returns

[`PublicKey`](PublicKey.md)

A new valid instance of an PublicKey

#### Example

```javascript
// instantiate from a private key
var key = PublicKey(privateKey, true);

// export to as a DER hex encoded string
var exported = key.toString();

// import the public key
var imported = PublicKey.fromString(exported);
```

## Properties

### toBuffer()

> **toBuffer**: () => `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:79

Will output the PublicKey to a DER Buffer

#### Returns

`Buffer`

A DER hex encoded buffer

***

### toObject()

> **toObject**: () => `any`

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:72

#### Returns

`any`

A plain object of the PublicKey

***

### toString()

> **toString**: () => `string`

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:99

Will output the PublicKey to a DER encoded hex string

#### Returns

`string`

A DER hex encoded string

## Methods

### \_classifyArgs()

> **\_classifyArgs**(`data`, `extra`): `object`

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:66

Internal function to differentiate between arguments passed to the constructor

#### Parameters

##### data

`any`

##### extra

`any`

#### Returns

`object`

##### compressed

> **compressed**: `any`

***

### \_getID()

> **\_getID**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:86

Will return a sha256 + ripemd160 hash of the serialized public key

#### Returns

`Buffer`

#### See

https://github.com/bitcoin/bitcoin/blob/master/src/pubkey.h#L141

***

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:106

Will return a string formatted for the console

#### Returns

`string`

Public key

***

### toAddress()

> **toAddress**(`network`?): [`Address`](Address.md)

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:93

Will return an address for the public key

#### Parameters

##### network?

`any`

Which network should the address be for

#### Returns

[`Address`](Address.md)

An address generated from the public key

***

### toDER()

> **toDER**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:80

#### Returns

`Buffer`

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:100

#### Returns

`string`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/publickey.d.cts:73

#### Returns

`any`
