[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / getBackTraceInfo

# Function: getBackTraceInfo()

> **getBackTraceInfo**(`prevTxHex`, `prevPrevTxHex`, `prevTxInputIndex`): [`BacktraceInfo`](../type-aliases/BacktraceInfo.md)

Defined in: [packages/scrypt-ts-opcat/src/utils/proof.ts:74](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/utils/proof.ts#L74)

prevPrevTx: input1 + input2 + ... = output1 + output2 + ...
prevTx: input1(prevPrevTx.output1) + input2 + ... = output1 + output2 + ...
curTx: input1(prevTx.output1) + input2 + ... = output1 + output2 + ...

if we want to backtrace curTx.input1, the arguments should be:

## Parameters

### prevTxHex

`string`

### prevPrevTxHex

`string`

### prevTxInputIndex

`number`

## Returns

[`BacktraceInfo`](../type-aliases/BacktraceInfo.md)
