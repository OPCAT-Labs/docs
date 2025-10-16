[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / ABIEntity

# Interface: ABIEntity

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts:90](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts#L90)

Represents an ABI (Application Binary Interface) entity in a smart contract. A JSON array defining how to interact with the contract (e.g., functions, events, parameters).
 Used by clients (like dApps) to encode/decode transactions and calls.

## Properties

### index?

> `optional` **index**: `number`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts:94](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts#L94)

Optional index, typically used for event parameters.

***

### name?

> `optional` **name**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts:92](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts#L92)

Optional name of the ABI entity.

***

### params

> **params**: [`ParamEntity`](../type-aliases/ParamEntity.md)[]

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts:93](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts#L93)

Array of parameter entities for the ABI.

***

### returnType?

> `optional` **returnType**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts:95](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts#L95)

***

### type

> **type**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts:91](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/artifact.ts#L91)

The type of the ABI entity (e.g., "function", "event").
