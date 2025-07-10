[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / MethodDecoratorOptions

# Interface: MethodDecoratorOptions

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/decorators.ts:24](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/decorators.ts#L24)

When `autoCheckInputState` is set to true, the system will automatically check the StateHash of all inputs
in the current transaction by default.  Otherwise, you can use `this.checkInputStateHash(inputIndex: Int32, stateHash: ByteString)`
to manually specify which input's StateHash to verify.

## Onchain

## Properties

### autoCheckInputState

> **autoCheckInputState**: `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/decorators.ts:25](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/decorators.ts#L25)
