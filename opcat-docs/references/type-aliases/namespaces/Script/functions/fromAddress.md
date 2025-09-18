[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Script](../README.md) / fromAddress

# Function: fromAddress()

> **fromAddress**(`address`): [`Script`](../../../classes/Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:444

Creates a Script from an address.

## Parameters

### address

The address to convert to a script.

`string` | [`Address`](../../../classes/Address.md)

## Returns

[`Script`](../../../classes/Script.md)

A Pay-to-PublicKeyHash (P2PKH) script for the given address.

## Throws

If the address type is not supported.
