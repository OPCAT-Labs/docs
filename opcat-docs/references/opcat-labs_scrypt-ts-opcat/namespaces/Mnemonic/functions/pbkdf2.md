[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [Mnemonic](../README.md) / pbkdf2

# Function: pbkdf2()

> **pbkdf2**(`key`, `salt`, `iterations`, `dkLen`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/mnemonic/pbkdf2.d.cts:14

PDKBF2: Derives a key using PBKDF2 (Password-Based Key Derivation Function 2) with HMAC-SHA512.
Credit to: https://github.com/stayradiated/pbkdf2-sha512

## Parameters

### key

The input key/password (as string or Buffer)

`string` | `Buffer`

### salt

The salt value (as string or Buffer)

`string` | `Buffer`

### iterations

`number`

Number of iterations to perform

### dkLen

`number`

Desired length of the derived key in bytes

## Returns

`Buffer`

Derived key as Buffer

## Throws

If key or salt are not strings or Buffers

## Throws

If requested key length is too long
