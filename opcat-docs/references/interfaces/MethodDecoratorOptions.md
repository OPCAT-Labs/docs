[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / MethodDecoratorOptions

# Interface: MethodDecoratorOptions

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/decorators.ts:24](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/decorators.ts#L24)

When `autoCheckInputState` is set to true, the system will automatically check the StateHash of all inputs
in the current transaction by default.  Otherwise, you can use `this.checkInputStateHash(inputIndex: Int32, stateHash: ByteString)`
to manually specify which input's StateHash to verify.

## Onchain

## Properties

### autoCheckInputState

> **autoCheckInputState**: `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/decorators.ts:25](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/smart-contract/decorators.ts#L25)
