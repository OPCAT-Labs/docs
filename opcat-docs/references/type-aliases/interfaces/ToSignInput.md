[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / ToSignInput

# Interface: ToSignInput

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:16](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signer.ts#L16)

signPsbt input options

## Properties

### address?

> `optional` **address**: `string`

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:20](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signer.ts#L20)

which address corresponding private key to use for signing

***

### index

> **index**: `number`

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:18](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signer.ts#L18)

which input to sign

***

### publicKey?

> `optional` **publicKey**: `string`

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:22](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signer.ts#L22)

which publicKey corresponding private key to use for signing

***

### sighashTypes?

> `optional` **sighashTypes**: `number`[]

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:26](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signer.ts#L26)

sighashTypes

***

### tapLeafHashToSign?

> `optional` **tapLeafHashToSign**: `string`

Defined in: [packages/scrypt-ts-opcat/src/signer.ts:24](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/signer.ts#L24)

tapLeafHashToSign
