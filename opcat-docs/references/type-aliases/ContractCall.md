[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / ContractCall

# Type Alias: ContractCall()\<Contract\>

> **ContractCall**\<`Contract`\>: (`contract`, `psbt`, `backtraceInfo`?) => `void`

Defined in: [packages/scrypt-ts-opcat/src/psbt/types.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/psbt/types.ts#L17)

Type definition for a contract call function.

## Type Parameters

• **Contract**

The contract instance being called.

## Parameters

### contract

`Contract`

The contract instance to interact with.

### psbt

[`IExtPsbt`](../interfaces/IExtPsbt.md)

The PSBT (Partially Signed Bitcoin Transaction).

### backtraceInfo?

[`BacktraceInfo`](BacktraceInfo.md)

Optional backtrace information for calling B2G contract.

## Returns

`void`
