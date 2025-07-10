[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [HDPublicKey](../README.md) / isValidPath

# Function: isValidPath()

> **isValidPath**(`arg`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:130

Checks if a given argument is a valid HD public key derivation path.

## Parameters

### arg

The path to validate (either as string like "m/0/1" or as a single index number).

`string` | `number`

## Returns

`boolean`

True if the path is valid, false otherwise.

## Description

Validates both string paths (e.g., "m/0/1") and individual derivation indexes.
String paths must contain valid indexes separated by '/', and each index must be a non-negative number less than HDPublicKey.Hardened.
