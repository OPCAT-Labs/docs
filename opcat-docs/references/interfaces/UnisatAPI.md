[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / UnisatAPI

# Interface: UnisatAPI

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:16](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L16)

Unisat wallet api, see [unisat api docs][https://docs.unisat.io/dev/unisat-developer-center/unisat-wallet#unisat-wallet-api](https://docs.unisat.io/dev/unisat-developer-center/unisat-wallet#unisat-wallet-api)

## Properties

### getAccounts()

> **getAccounts**: () => `Promise`\<`string`[]\>

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L17)

#### Returns

`Promise`\<`string`[]\>

***

### getPublicKey()

> **getPublicKey**: () => `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L19)

#### Returns

`Promise`\<`string`\>

***

### requestAccounts()

> **requestAccounts**: () => `Promise`\<`string`[]\>

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:18](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L18)

#### Returns

`Promise`\<`string`[]\>

## Methods

### signPsbt()

> **signPsbt**(`psbtHex`, `options`?): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:20](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L20)

#### Parameters

##### psbtHex

`string`

##### options?

[`SignOptions`](SignOptions.md)

#### Returns

`Promise`\<`string`\>

***

### signPsbts()

> **signPsbts**(`psbtHexs`, `options`?): `Promise`\<`string`[]\>

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:21](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L21)

#### Parameters

##### psbtHexs

`string`[]

##### options?

[`SignOptions`](SignOptions.md)[]

#### Returns

`Promise`\<`string`[]\>
