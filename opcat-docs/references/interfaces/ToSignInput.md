[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / ToSignInput

# Interface: ToSignInput

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:16](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L16)

signPsbt input options

## Properties

### address?

> `optional` **address**: `string`

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:20](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L20)

which address corresponding private key to use for signing

***

### disableTweakSigner?

> `optional` **disableTweakSigner**: `boolean`

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:28](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L28)

default value is false. Setting it true allows the use of the original private key when signing taproot inputs.

***

### index

> **index**: `number`

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:18](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L18)

which input to sign

***

### publicKey?

> `optional` **publicKey**: `string`

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:22](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L22)

which publicKey corresponding private key to use for signing

***

### sighashTypes?

> `optional` **sighashTypes**: `number`[]

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:26](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L26)

sighashTypes

***

### tapLeafHashToSign?

> `optional` **tapLeafHashToSign**: `string`

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:24](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/signer.ts#L24)

tapLeafHashToSign
