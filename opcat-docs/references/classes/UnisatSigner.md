[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / UnisatSigner

# Class: UnisatSigner

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:29](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L29)

a [signer][https://docs.opcatlabs.io/how-to-deploy-and-call-a-contract/#signer](https://docs.opcatlabs.io/how-to-deploy-and-call-a-contract/#signer) which implemented the protocol with the [Unisat wallet][https://unisat.io](https://unisat.io),
and dapps can use to interact with the Unisat wallet

## Implements

- [`Signer`](../interfaces/Signer.md)

## Constructors

### new UnisatSigner()

> **new UnisatSigner**(`unisat`): [`UnisatSigner`](UnisatSigner.md)

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L32)

#### Parameters

##### unisat

[`UnisatAPI`](../interfaces/UnisatAPI.md)

#### Returns

[`UnisatSigner`](UnisatSigner.md)

## Methods

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:54](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L54)

Gets the address from the Unisat wallet API.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the first account address string.

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`getAddress`](../interfaces/Signer.md#getaddress)

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:63](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L63)

Retrieves the public key from the Unisat wallet API.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the public key as a string.

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`getPublicKey`](../interfaces/Signer.md#getpublickey)

***

### getUnisatAPI()

> **getUnisatAPI**(): [`UnisatAPI`](../interfaces/UnisatAPI.md)

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:41](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L41)

Retrieves the Unisat API instance from either the cached property or global window object.

#### Returns

[`UnisatAPI`](../interfaces/UnisatAPI.md)

The Unisat API instance.

#### Throws

If Unisat API is not available (not installed).

***

### signPsbt()

> **signPsbt**(`psbtHex`, `options`?): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:74](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L74)

Signs a PSBT (Partially Signed Opcat Transaction) using the Unisat wallet API.

#### Parameters

##### psbtHex

`string`

The PSBT in hexadecimal format to be signed.

##### options?

[`SignOptions`](../interfaces/SignOptions.md)

Optional signing options (e.g., specific inputs to sign).

#### Returns

`Promise`\<`string`\>

A Promise resolving to the signed PSBT in hexadecimal format.

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`signPsbt`](../interfaces/Signer.md#signpsbt)

***

### signPsbts()

> **signPsbts**(`reqs`): `Promise`\<`string`[]\>

Defined in: [packages/scrypt-ts-opcat/src/signers/unisatSigner.ts:84](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signers/unisatSigner.ts#L84)

Signs multiple PSBTs (Partially Signed Opcat Transactions) using the Unisat wallet API.

#### Parameters

##### reqs

`object`[]

Array of objects containing PSBT hex strings and optional signing options

#### Returns

`Promise`\<`string`[]\>

Promise resolving to an array of signed PSBT hex strings

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`signPsbts`](../interfaces/Signer.md#signpsbts)
