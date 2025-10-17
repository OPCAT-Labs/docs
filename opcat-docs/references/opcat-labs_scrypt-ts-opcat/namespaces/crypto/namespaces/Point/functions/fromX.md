[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [Point](../README.md) / fromX

# Function: fromX()

> **fromX**(`odd`, `x`): [`Point`](../../../classes/Point.md)

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/point.d.cts:78

Instantiate a valid secp256k1 Point from only the X coordinate. This is
useful to rederive a full point from the compressed form of a point.

## Parameters

### odd

`boolean`

If the Y coordinate is odd

### x

The X coordinate

`string` | [`BN`](../../../classes/BN.md)

## Returns

[`Point`](../../../classes/Point.md)

An instance of Point

## Throws

A validation error if exists

## Static
