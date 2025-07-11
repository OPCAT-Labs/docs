[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / SmartContractLib

# Class: SmartContractLib

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:15](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L15)

The contract library class. To write a contract library, extend this class as such:

## Example

```ts
class YourSmartContractLib extends SmartContractLib {
  // your library functions code here
}
```

## Extended by

- [`ContextUtils`](ContextUtils.md)
- [`TxUtils`](TxUtils.md)
- [`StateUtils`](StateUtils.md)
- [`StdUtils`](StdUtils.md)
- [`Backtrace`](Backtrace.md)
- [`StateLib`](StateLib.md)
- [`TxHashPreimageUtils`](TxHashPreimageUtils.md)

## Constructors

### new SmartContractLib()

> **new SmartContractLib**(...`args`): [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L32)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`SmartContractLib`](SmartContractLib.md)

## Properties

### args

> **args**: `any`[] = `[]`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:31](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L31)

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:16](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L16)

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L17)

## Methods

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L19)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

*typeof* [`SmartContractLib`](SmartContractLib.md)
