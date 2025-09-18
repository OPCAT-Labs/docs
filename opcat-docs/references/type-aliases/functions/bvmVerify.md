[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / bvmVerify

# Function: bvmVerify()

> **bvmVerify**(`extPsbt`, `inputIndex`): `string` \| `true`

Defined in: [packages/scrypt-ts-opcat/src/utils/bvm.ts:10](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/utils/bvm.ts#L10)

Verify that an input of `ExtPsbt` can be unlocked correctly. The extPsbt should be finalized.

## Parameters

### extPsbt

[`ExtPsbt`](../classes/ExtPsbt.md)

### inputIndex

`number` = `0`

## Returns

`string` \| `true`

true if success
