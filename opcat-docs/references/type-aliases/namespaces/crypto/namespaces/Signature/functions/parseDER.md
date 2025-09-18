[**scrypt-ts-opcat v1.0.4**](../../../../../README.md)

***

[scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [Signature](../README.md) / parseDER

# Function: parseDER()

> **parseDER**(`buf`, `strict`?): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:128

Parses a DER formatted signature buffer into its components.
In order to mimic the non-strict DER encoding of OpenSSL, set strict = false.

## Parameters

### buf

`Buffer`

The DER formatted signature buffer to parse

### strict?

`boolean`

Whether to perform strict length validation

## Returns

`any`

An object containing the parsed signature components:
  - header: The DER header byte (0x30)
  - length: The total length of the signature components
  - rheader: The R component header byte (0x02)
  - rlength: The length of the R component
  - rneg: Whether R is negative
  - rbuf: The R component buffer
  - r: The R component as a BN
  - sheader: The S component header byte (0x02)
  - slength: The length of the S component
  - sneg: Whether S is negative
  - sbuf: The S component buffer
  - s: The S component as a BN

## Throws

If the buffer is not valid DER format or length checks fail

## Static
