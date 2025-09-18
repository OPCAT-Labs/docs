[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / pubKey2Addr

# Function: pubKey2Addr()

> **pubKey2Addr**(`pubkey`): [`Ripemd160`](../type-aliases/Ripemd160.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/fns/pubKey2Addr.ts:12](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/fns/pubKey2Addr.ts#L12)

Get Addr for PubKey.
Under the hood this just wraps the hash160 function.

## Parameters

### pubkey

[`PubKey`](../type-aliases/PubKey.md)

the public key.

## Returns

[`Ripemd160`](../type-aliases/Ripemd160.md)

address for the passed public key.

## Onchain
