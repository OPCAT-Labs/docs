[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Signer

# Interface: Signer

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:37](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L37)

A `Signer` is a interface which in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to perform operations.

## Methods

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:39](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L39)

Get address of current signer.

#### Returns

`Promise`\<`string`\>

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:41](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L41)

Get publicKey of current signer.

#### Returns

`Promise`\<`string`\>

***

### signPsbt()

> **signPsbt**(`psbtHex`, `options`?): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:43](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L43)

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

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:45](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L45)

same as signPsbt, but sign multiple PSBTs at once.

#### Parameters

##### reqs

`object`[]

#### Returns

`Promise`\<`string`[]\>
