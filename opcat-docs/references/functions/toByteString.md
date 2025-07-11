[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / toByteString

# Function: toByteString()

> **toByteString**(`literal`, `isUtf8`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/fns/byteString.ts:16](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/fns/byteString.ts#L16)

Converts a literal to ByteString.
If not passing `isUtf8` or `isUtf8` is false, then `literal` should be in the format of hex literal, i.e. `/^([0-9a-fA-F]{2})*$/`
Otherwise, `literal` should be in the format of utf8 literal, i.e. `hello world`

## Parameters

### literal

`string`

literal string, can be hex literal or utf8 literal, depends on the `isUtf8` marker

### isUtf8

`boolean` = `false`

marker indicating whether `literal` is utf8 or hex

## Returns

[`ByteString`](../type-aliases/ByteString.md)

returns a ByteString

## Onchain
