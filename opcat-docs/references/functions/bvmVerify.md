[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / bvmVerify

# Function: bvmVerify()

> **bvmVerify**(`extPsbt`, `inputIndex`): `string` \| `true`

Defined in: [packages/scrypt-ts-opcat/src/utils/bvm.ts:10](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/utils/bvm.ts#L10)

Verify that an input of `ExtPsbt` can be unlocked correctly. The extPsbt should be finalized.

## Parameters

### extPsbt

[`ExtPsbt`](../classes/ExtPsbt.md)

### inputIndex

`number` = `0`

## Returns

`string` \| `true`

true if success
