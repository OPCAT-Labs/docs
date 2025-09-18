[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [crypto](../README.md) / Signature

# Class: Signature

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:8

Creates a new Signature instance from BN values or an object.

## Param

Either a BN instance for the r value or an object containing r and s properties.

## Param

The s value (required if r is a BN instance).

## Constructors

### new Signature()

> **new Signature**(`r`, `s`?): [`Signature`](Signature.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:16

Creates a new Signature instance from BN values or an object.

#### Parameters

##### r

`any`

Either a BN instance for the r value or an object containing r and s properties.

##### s?

[`BN`](BN.md)

The s value (required if r is a BN instance).

#### Returns

[`Signature`](Signature.md)

## Properties

### compressed

> **compressed**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:37

***

### i

> **i**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:36

***

### nhashtype

> **nhashtype**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:38

***

### r

> **r**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:34

***

### s

> **s**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:35

***

### toBuffer()

> **toBuffer**: () => `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:53

Converts the signature to DER format.
Handles negative values by prepending a zero byte if necessary.

#### Returns

`Buffer`

The DER-encoded signature.

## Methods

### hasDefinedHashtype()

> **hasDefinedHashtype**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:74

Checks if the signature has a defined hashtype.
- Validates that nhashtype is a natural number
- Accepts with or without Signature.SIGHASH_ANYONECANPAY by ignoring the bit
- Verifies the hashtype is between SIGHASH_ALL and SIGHASH_SINGLE

#### Returns

`boolean`

True if the hashtype is valid, false otherwise

***

### hasLowS()

> **hasLowS**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:66

Checks if the signature's S value is within the valid range (low-S).
See also ECDSA signature algorithm which enforces this.
See also BIP 62, "low S values in signatures"

#### Returns

`boolean`

True if S is between 1 and the upper bound (0x7F...A0), false otherwise.

***

### set()

> **set**(`obj`): [`Signature`](Signature.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:27

Sets signature properties from an object.

#### Parameters

##### obj

Object containing signature properties

###### compressed?

`boolean`

Whether recovered pubkey is compressed

###### i?

`number`

Public key recovery parameter (0-3)

###### nhashtype?

`number`

Hash type

###### r?

`Buffer`

r value

###### s?

`Buffer`

s value

#### Returns

[`Signature`](Signature.md)

Returns the signature instance for chaining

***

### toCompact()

> **toCompact**(`i`?, `compressed`?): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:46

Converts the signature to a compact format.

#### Parameters

##### i?

`number`

The recovery ID (0, 1, 2, or 3). Defaults to the instance's `i` value.

##### compressed?

`boolean`

Whether the signature is compressed. Defaults to the instance's `compressed` value.

#### Returns

`Buffer`

- The compact signature as a Buffer (1 byte recovery ID + 32 bytes r + 32 bytes s).

#### Throws

- If `i` is not 0, 1, 2, or 3.

***

### toDER()

> **toDER**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:54

#### Returns

`Buffer`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:59

Converts the signature to a hexadecimal string representation.

#### Returns

`string`

The DER-encoded signature in hexadecimal format.

***

### toTxFormat()

> **toTxFormat**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:80

Converts the signature to transaction format by concatenating the DER-encoded signature
with the hash type byte.

#### Returns

`Buffer`

The signature in transaction format (DER + hash type byte).
