[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [crypto](../README.md) / ECDSA

# Class: ECDSA

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:7

Creates an ECDSA instance.

## Param

Optional object containing properties to initialize the instance.

## Constructors

### new ECDSA()

> **new ECDSA**(`obj`?): [`ECDSA`](ECDSA.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:14

Creates an ECDSA instance.

#### Parameters

##### obj?

`any`

Optional object containing properties to initialize the instance.

#### Returns

[`ECDSA`](ECDSA.md)

## Properties

### endian

> **endian**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:37

***

### hashbuf

> **hashbuf**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:36

***

### k

> **k**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:41

***

### privkey

> **privkey**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:38

***

### pubkey

> **pubkey**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:39

***

### sig

> **sig**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:40

***

### verified

> **verified**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:42

## Methods

### \_findSignature()

> **\_findSignature**(`d`, `e`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:104

Finds a valid ECDSA signature (r, s) for the given private key `d` and message hash `e`.
Uses deterministic k-value generation if initial attempts fail.

#### Parameters

##### d

[`BN`](BN.md)

Private key as a big number.

##### e

[`BN`](BN.md)

Message hash as a big number.

#### Returns

`any`

Signature object with properties `r` and `s` (big numbers).

#### Throws

Will throw if unable to find valid signature after multiple attempts.

***

### calci()

> **calci**(): [`ECDSA`](ECDSA.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:55

Calculates the recovery factor (i) for ECDSA signature verification.
Iterates through possible recovery factors (0-3) to find the one that
reconstructs the correct public key from the signature.

#### Returns

[`ECDSA`](ECDSA.md)

Returns the instance with updated signature properties if successful.

#### Throws

Throws if no valid recovery factor is found after all iterations.

***

### deterministicK()

> **deterministicK**(`badrs`?): [`ECDSA`](ECDSA.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:70

Generates a deterministic K value for ECDSA signing as per RFC 6979.
See:
 https://tools.ietf.org/html/rfc6979#section-3.2
Handles invalid r/s cases by incrementing badrs counter and regenerating K.

#### Parameters

##### badrs?

`number`

Counter for invalid r/s cases (default: 0)

#### Returns

[`ECDSA`](ECDSA.md)

Returns the ECDSA instance for chaining

***

### privkey2pubkey()

> **privkey2pubkey**(): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:46

Converts the private key to a public key and stores it in the `pubkey` property.

#### Returns

`void`

***

### randomK()

> **randomK**(): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:61

Generates a random value `k` for ECDSA signing.
The value is generated within the range (0, N) where N is the curve order.
The generated `k` is stored in the instance and returned for chaining.

#### Returns

`this`

***

### set()

> **set**(`obj`): [`ECDSA`](ECDSA.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:27

Updates the ECDSA instance properties with provided values.

#### Parameters

##### obj

Object containing properties to update

###### endian?

`string`

Endianness of hashbuf

###### hashbuf?

`Buffer`

Hash buffer

###### k?

`Uint8Array`

Random number k

###### privkey?

`PrivateKey`

Private key

###### pubkey?

[`PublicKey`](../../../classes/PublicKey.md)

Public key (derived from privkey if not provided)

###### sig?

[`Signature`](Signature.md)

Signature

###### verified?

`boolean`

Verification status

#### Returns

[`ECDSA`](ECDSA.md)

Returns the updated ECDSA instance

***

### sigError()

> **sigError**(): `string` \| `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:94

Validates an ECDSA signature and returns an error message if invalid.
Checks:
- hashbuf is a 32-byte buffer
- r and s values are within valid range
- Signature verification against public key

#### Returns

`string` \| `boolean`

Error message if invalid, false if valid

***

### sign()

> **sign**(): [`ECDSA`](ECDSA.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:113

Signs a message using ECDSA.

#### Returns

[`ECDSA`](ECDSA.md)

Returns the instance for chaining.

#### Throws

Throws if parameters are invalid or hashbuf is not a 32-byte buffer.

***

### signRandomK()

> **signRandomK**(): [`ECDSA`](ECDSA.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:119

Signs the message using a randomly generated k value.

#### Returns

[`ECDSA`](ECDSA.md)

The signature object containing r and s values.

***

### toPublicKey()

> **toPublicKey**(): [`PublicKey`](../../../classes/PublicKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:85

Converts an ECDSA signature to its corresponding public key.

The method follows the ECDSA public key recovery process:
1. Validates the recovery parameter `i` (must be 0-3)
2. Derives the public key point Q using the formula: Q = r⁻¹(sR - eG)
3. Validates the derived curve point

see:
 https://bitcointalk.org/index.php?topic=6430.0
 http://stackoverflow.com/questions/19665491/how-do-i-get-an-ecdsa-public-key-from-just-a-bitcoin-signature-sec1-4-1-6-k

#### Returns

[`PublicKey`](../../../classes/PublicKey.md)

The recovered public key

#### Throws

If recovery parameter is invalid or derived point is invalid

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:126

Converts the ECDSA instance to a JSON string representation.
Includes hash buffer, private key, public key, signature, and k value if present.
Each property is converted to a string format (hex for hashbuf, toString() for others).

#### Returns

`string`

JSON string containing the ECDSA instance properties

***

### verify()

> **verify**(): [`ECDSA`](ECDSA.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/ecdsa.d.cts:131

Verifies the ECDSA signature and updates the `verified` property.

#### Returns

[`ECDSA`](ECDSA.md)

The current instance for chaining.
