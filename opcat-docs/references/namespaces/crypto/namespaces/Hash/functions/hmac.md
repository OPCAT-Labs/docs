[**scrypt-ts-opcat v1.0.1**](../../../../../README.md)

***

[scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [Hash](../README.md) / hmac

# Function: hmac()

> **hmac**(`hashf`, `data`, `key`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/hash.d.cts:101

A way to do HMAC using any underlying hash function. If you ever find that
you want to hash two pieces of data together, you should use HMAC instead of
just using a hash function. Rather than doing hash(data1 + data2) you should
do HMAC(data1, data2). Actually, rather than use HMAC directly, we recommend
you use either sha256hmac or sha515hmac provided below.

See:
https://en.wikipedia.org/wiki/Length_extension_attack
https://blog.skullsecurity.org/2012/everything-you-need-to-know-about-hash-length-extension-attacks

## Parameters

### hashf

`Function`

Which hash function to use.

### data

`Buffer`

Data, which can be any size.

### key

`Buffer`

Key, which can be any size.

## Returns

`Buffer`

The HMAC in the form of a buffer.
