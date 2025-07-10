[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Mnemonic](../README.md) / isValid

# Function: isValid()

> **isValid**(`mnemonic`, `wordlist`?): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/mnemonic/mnemonic.d.cts:114

Will return a boolean if the mnemonic is valid

## Parameters

### mnemonic

`string`

The mnemonic string

### wordlist?

`string`

The wordlist used

## Returns

`boolean`

## Example

```ts
var valid = Mnemonic.isValid('lab rescue lunch elbow recall phrase perfect donkey biology guess moment husband');
// true
```
