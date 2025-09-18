[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [scriptNumber](../README.md) / decode

# Function: decode()

> **decode**(`buffer`, `maxLength`?, `minimal`?): `number`

Defined in: [packages/scrypt-ts-opcat/src/utils/script\_number.ts:13](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/utils/script_number.ts#L13)

Decodes a script number from a buffer.

## Parameters

### buffer

`Uint8Array`

The buffer containing the script number.

### maxLength?

`number`

The maximum length of the script number. Defaults to 4.

### minimal?

`boolean`

Whether the script number should be minimal. Defaults to true.

## Returns

`number`

The decoded script number.

## Throws

If the script number overflows the maximum length.

## Throws

If the script number is not minimally encoded when minimal is true.
