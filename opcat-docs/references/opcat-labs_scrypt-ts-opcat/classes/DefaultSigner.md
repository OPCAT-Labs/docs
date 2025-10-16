[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / DefaultSigner

# Class: DefaultSigner

Defined in: [packages/scrypt-ts-opcat/src/signers/defaultSigner.ts:33](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/defaultSigner.ts#L33)

An implemention of a simple signer which should just be used in nodejs environments.

## Implements

- [`Signer`](../interfaces/Signer.md)

## Constructors

### new DefaultSigner()

> **new DefaultSigner**(`privateKey`): [`DefaultSigner`](DefaultSigner.md)

Defined in: [packages/scrypt-ts-opcat/src/signers/defaultSigner.ts:37](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/defaultSigner.ts#L37)

#### Parameters

##### privateKey

[`PrivateKey`](PrivateKey.md) = `...`

#### Returns

[`DefaultSigner`](DefaultSigner.md)

## Properties

### network

> `readonly` **network**: [`Network`](Network.md)

Defined in: [packages/scrypt-ts-opcat/src/signers/defaultSigner.ts:36](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/defaultSigner.ts#L36)

## Methods

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/defaultSigner.ts:49](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/defaultSigner.ts#L49)

Gets the address derived from the signer's private key and network.

#### Returns

`Promise`\<`string`\>

A promise resolving to the address string.

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`getAddress`](../interfaces/Signer.md#getaddress)

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/defaultSigner.ts:59](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/defaultSigner.ts#L59)

Returns the public key in hexadecimal format derived from the private key.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the public key as a hex string.

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`getPublicKey`](../interfaces/Signer.md#getpublickey)

***

### signPsbt()

> **signPsbt**(`psbtHex`, `options`?): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/defaultSigner.ts:74](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/defaultSigner.ts#L74)

Signs a PSBT (Partially Signed Bitcoin Transaction) with the signer's key pair.

#### Parameters

##### psbtHex

`string`

The PSBT in hexadecimal format to be signed

##### options?

[`SignOptions`](../interfaces/SignOptions.md)

Optional signing configuration including inputs to sign

#### Returns

`Promise`\<`string`\>

Promise resolving to the signed PSBT in hexadecimal format

#### Remarks

- If options are provided, only specified inputs matching the signer's address/public key will be signed
- If no options are provided, all inputs will be signed with SIGHASH_ALL

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`signPsbt`](../interfaces/Signer.md#signpsbt)

***

### signPsbts()

> **signPsbts**(`reqs`): `Promise`\<`string`[]\>

Defined in: [packages/scrypt-ts-opcat/src/signers/defaultSigner.ts:105](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/defaultSigner.ts#L105)

Signs multiple PSBTs (Partially Signed Bitcoin Transactions) in parallel.

#### Parameters

##### reqs

`object`[]

Array of objects containing PSBT hex strings and optional signing options

#### Returns

`Promise`\<`string`[]\>

Promise resolving to an array of signed PSBT hex strings

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`signPsbts`](../interfaces/Signer.md#signpsbts)
