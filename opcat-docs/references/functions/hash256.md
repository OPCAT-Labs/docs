[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / hash256

# Function: hash256()

> **hash256**(`a`): [`Sha256`](../type-aliases/Sha256.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/fns/hashes.ts:48](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/fns/hashes.ts#L48)

A double SHA256 hash, which is always 256 bits or 32 bytes bytes long. This
hash function is commonly used inside Bitcoin, particularly for the hash of a
block and the hash of a transaction.

See:
https://www.movable-type.co.uk/scripts/sha256.html

## Parameters

### a

[`ByteString`](../type-aliases/ByteString.md)

ByteString data, a.k.a. pre-image, which can be any size.

## Returns

[`Sha256`](../type-aliases/Sha256.md)

The hash in the form of a string.

## Onchain
