[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / PrivateKey

# Class: PrivateKey

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:10

Instantiate a PrivateKey from a BN, Buffer or WIF string.

## Param

The encoded data in various formats

## Param

a [Network](Network.md) object, or a string with the network name

## Constructors

### new PrivateKey()

> **new PrivateKey**(`data`, `network`?): [`PrivateKey`](PrivateKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:20

Instantiate a PrivateKey from a BN, Buffer or WIF string.

#### Parameters

##### data

`any`

The encoded data in various formats

##### network?

`any`

a [Network](Network.md) object, or a string with the network name

#### Returns

[`PrivateKey`](PrivateKey.md)

A new valid instance of an PrivateKey

## Properties

### \_pubkey

> **\_pubkey**: [`PublicKey`](PublicKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:60

***

### toObject()

> **toObject**: () => `any`

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:72

#### Returns

`any`

A plain object representation

## Accessors

### compressed

#### Get Signature

> **get** **compressed**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:23

##### Returns

`any`

***

### network

#### Get Signature

> **get** **network**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:22

##### Returns

`any`

***

### publicKey

#### Get Signature

> **get** **publicKey**(): [`PublicKey`](PublicKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:21

##### Returns

[`PublicKey`](PublicKey.md)

## Methods

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:79

Will return a string formatted for the console

#### Returns

`string`

Private key

***

### toAddress()

> **toAddress**(`network`?): [`Address`](Address.md)

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:68

Will return an address for the private key

#### Parameters

##### network?

`any`

optional parameter specifying
the desired network for the address

#### Returns

[`Address`](Address.md)

An address generated from the private key

***

### toBigNumber()

> **toBigNumber**(): [`BN`](../namespaces/crypto/classes/BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:42

Will return the private key as a BN instance

#### Returns

[`BN`](../namespaces/crypto/classes/BN.md)

A BN instance of the private key

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:48

Will return the private key as a BN buffer

#### Returns

`Buffer`

A buffer of the private key

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:53

Converts the private key to a hexadecimal string representation.

#### Returns

`string`

Hexadecimal string of the private key.

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:73

#### Returns

`any`

***

### toPublicKey()

> **toPublicKey**(): [`PublicKey`](PublicKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:59

Will return the corresponding public key

#### Returns

[`PublicKey`](PublicKey.md)

A public key generated from the private key

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:30

Will output the PrivateKey in WIF

#### Returns

`string`

***

### toWIF()

> **toWIF**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/privatekey.d.cts:36

Will output the PrivateKey to a WIF string

#### Returns

`string`

A WIP representation of the private key
