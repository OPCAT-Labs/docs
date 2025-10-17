[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / FixedArray

# Type Alias: FixedArray\<T, N\>

> **FixedArray**\<`T`, `N`\>: `T`[] & `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:216](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L216)

An array is a fixed-size list of values of the same basic type.
When you declare an array you have to declare it like this:

## Type declaration

### length

> **length**: `N`

## Type Parameters

• **T**

• **N** *extends* `number`

## Onchain

## Example

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n];

let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]];

let bbb: FixedArray<FixedArray<FixedArray<bigint, 1>, 2>, 3> = [[[1n], [1n]], [[1n], [1n]], [[1n], [1n]]];
```
