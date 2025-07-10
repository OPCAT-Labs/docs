[**scrypt-ts-opcat v1.0.1**](../../../../../README.md)

***

[scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [Point](../README.md) / pointToCompressed

# Function: pointToCompressed()

> **pointToCompressed**(`point`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/point.d.cts:108

A "compressed" format point is the X part of the (X, Y) point plus an extra
bit (which takes an entire byte) to indicate whether the Y value is odd or
not. Storing points this way takes a bit less space, but requires a bit more
computation to rederive the full point.

## Parameters

### point

[`Point`](../../../classes/Point.md)

An instance of Point.

## Returns

`Buffer`

A compressed point in the form of a buffer.

## Static
