[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / ABIEntity

# Interface: ABIEntity

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts:86](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts#L86)

Represents an ABI (Application Binary Interface) entity in a smart contract. A JSON array defining how to interact with the contract (e.g., functions, events, parameters).
 Used by clients (like dApps) to encode/decode transactions and calls.

## Properties

### index?

> `optional` **index**: `number`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts:90](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts#L90)

Optional index, typically used for event parameters.

***

### name?

> `optional` **name**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts:88](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts#L88)

Optional name of the ABI entity.

***

### params

> **params**: [`ParamEntity`](../type-aliases/ParamEntity.md)[]

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts:89](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts#L89)

Array of parameter entities for the ABI.

***

### type

> **type**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts:87](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts#L87)

The type of the ABI entity (e.g., "function", "event").
