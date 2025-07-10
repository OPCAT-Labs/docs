[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [crypto](../README.md) / Point

# Class: Point

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/point.d.cts:15

Instantiate a valid secp256k1 Point from the X and Y coordinates. This class
is just an extension of the secp256k1 code from the library "elliptic" by
Fedor Indutny. It includes a few extra features that are useful in Bitcoin.

## Param

The X coordinate

## Param

The Y coordinate

## Link

https://github.com/indutny/elliptic

## Throws

A validation error if exists

## Constructors

### new Point()

> **new Point**(`x`, `y`, `isRed`): [`Point`](Point.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/point.d.cts:30

Instantiate a valid secp256k1 Point from the X and Y coordinates. This class
is just an extension of the secp256k1 code from the library "elliptic" by
Fedor Indutny. It includes a few extra features that are useful in Bitcoin.

#### Parameters

##### x

The X coordinate

`string` | [`BN`](BN.md)

##### y

The Y coordinate

`string` | [`BN`](BN.md)

##### isRed

`any`

#### Returns

[`Point`](Point.md)

An instance of Point

#### Link

https://github.com/indutny/elliptic

#### Throws

A validation error if exists

## Properties

### \_getX

> **\_getX**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/point.d.cts:31

***

### \_getY

> **\_getY**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/point.d.cts:38

## Methods

### getX()

> **getX**(): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/point.d.cts:37

Will return the X coordinate of the Point.

#### Returns

[`BN`](BN.md)

A BN instance of the X coordinate

***

### getY()

> **getY**(): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/point.d.cts:44

Will return the Y coordinate of the Point.

#### Returns

[`BN`](BN.md)

A BN instance of the Y coordinate

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/point.d.cts:58

Convert point to a compressed buffer.

#### Returns

`Buffer`

A compressed point.

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/point.d.cts:64

Convert point to a compressed hex string.

#### Returns

`string`

A compressed point as a hex string.

***

### validate()

> **validate**(): [`Point`](Point.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/point.d.cts:52

Will determine if the point is valid.

#### Returns

[`Point`](Point.md)

An instance of the same Point

#### Link

https://www.iacr.org/archive/pkc2003/25670211/25670211.pdf

#### Throws

A validation error if exists
