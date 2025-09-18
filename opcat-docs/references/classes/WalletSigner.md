[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / WalletSigner

# Class: WalletSigner

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:30](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L30)

a [signer][https://docs.opcatlabs.io/how-to-deploy-and-call-a-contract/#signer](https://docs.opcatlabs.io/how-to-deploy-and-call-a-contract/#signer) which implemented the protocol with the [Unisat wallet][https://opcat.io](https://opcat.io),
and dapps can use to interact with the Unisat wallet

## Implements

- [`Signer`](../interfaces/Signer.md)

## Constructors

### new WalletSigner()

> **new WalletSigner**(`opcat`): [`WalletSigner`](WalletSigner.md)

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:33](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L33)

#### Parameters

##### opcat

[`OpcatAPI`](../interfaces/OpcatAPI.md)

#### Returns

[`WalletSigner`](WalletSigner.md)

## Methods

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:55](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L55)

Gets the address from the Unisat wallet API.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the first account address string.

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`getAddress`](../interfaces/Signer.md#getaddress)

***

### getOpcatAPI()

> **getOpcatAPI**(): [`OpcatAPI`](../interfaces/OpcatAPI.md)

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:42](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L42)

Retrieves the Unisat API instance from either the cached property or global window object.

#### Returns

[`OpcatAPI`](../interfaces/OpcatAPI.md)

The Unisat API instance.

#### Throws

If Unisat API is not available (not installed).

***

### getPublicKey()

> **getPublicKey**(): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:64](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L64)

Retrieves the public key from the Unisat wallet API.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the public key as a string.

#### Implementation of

[`Signer`](../interfaces/Signer.md).[`getPublicKey`](../interfaces/Signer.md#getpublickey)

***

### signPsbt()

> **signPsbt**(`psbtHex`, `options`?): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:75](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L75)

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

Defined in: [packages/scrypt-ts-opcat/src/signers/walletSigner.ts:85](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signers/walletSigner.ts#L85)

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
