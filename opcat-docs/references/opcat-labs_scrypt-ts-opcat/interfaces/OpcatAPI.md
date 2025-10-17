[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / OpcatAPI

# Interface: OpcatAPI

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L17)

todo: change to opcat wallet api
Unisat wallet api, see [opcat api docs][https://docs.opcat.io/dev/opcat-developer-center/opcat-wallet#opcat-wallet-api](https://docs.opcat.io/dev/opcat-developer-center/opcat-wallet#opcat-wallet-api)

## Properties

### getAccounts()

> **getAccounts**: () => `Promise`\<`string`[]\>

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:18](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L18)

#### Returns

`Promise`\<`string`[]\>

***

### getPublicKey()

> **getPublicKey**: () => `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:20](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L20)

#### Returns

`Promise`\<`string`\>

***

### requestAccounts()

> **requestAccounts**: () => `Promise`\<`string`[]\>

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L19)

#### Returns

`Promise`\<`string`[]\>

## Methods

### signPsbt()

> **signPsbt**(`psbtHex`, `options`?): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:21](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L21)

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

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:22](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L22)

#### Parameters

##### psbtHexs

`string`[]

##### options?

[`SignOptions`](SignOptions.md)[]

#### Returns

`Promise`\<`string`[]\>
