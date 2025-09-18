[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / sha1

# Function: sha1()

> **sha1**(`a`): [`Sha1`](../type-aliases/Sha1.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/fns/hashes.ts:62](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/fns/hashes.ts#L62)

A SHA or SHA1 hash, which is always 160 bits or 20 bytes long.

See:
https://en.wikipedia.org/wiki/SHA-1

## Parameters

### a

[`ByteString`](../type-aliases/ByteString.md)

ByteString Data, a.k.a. pre-image, which can be any size.

## Returns

[`Sha1`](../type-aliases/Sha1.md)

The hash in the form of a string.

## Onchain
