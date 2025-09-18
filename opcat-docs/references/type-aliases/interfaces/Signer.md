[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Signer

# Interface: Signer

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:35](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signer.ts#L35)

A `Signer` is a interface which in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to perform operations.

## Methods

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:37](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signer.ts#L37)

Get address of current signer.

#### Returns

`Promise`\<`string`\>

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:39](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signer.ts#L39)

Get publicKey of current signer.

#### Returns

`Promise`\<`string`\>

***

### signPsbt()

> **signPsbt**(`psbtHex`, `options`?): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:41](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signer.ts#L41)

traverse all inputs that match the current address to sign.

#### Parameters

##### psbtHex

`string`

##### options?

[`SignOptions`](SignOptions.md)

#### Returns

`Promise`\<`string`\>

***

### signPsbts()

> **signPsbts**(`reqs`): `Promise`\<`string`[]\>

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:43](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signer.ts#L43)

same as signPsbt, but sign multiple PSBTs at once.

#### Parameters

##### reqs

`object`[]

#### Returns

`Promise`\<`string`[]\>
