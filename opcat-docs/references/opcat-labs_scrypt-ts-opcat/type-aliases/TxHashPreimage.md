[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / TxHashPreimage

# Type Alias: TxHashPreimage

> **TxHashPreimage**: `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts:193](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts#L193)

The digest data used to calculate the Traditional Transaction ID (txid) consists of the transaction's
core components (inputs, outputs) without the witness information.

## Type declaration

### inputList

> **inputList**: [`ByteString`](ByteString.md)

input = prevout(36 bytes) + unlockScriptHash(32 bytes) + sequence(4 bytes)
input1 + input2 + ... + inputN

### nLockTime

> **nLockTime**: [`ByteString`](ByteString.md)

4 bytes little endian.

### outputList

> **outputList**: [`ByteString`](ByteString.md)

output = amount(8 bytes) + lockingScriptHash(32 bytes) + dataHash(32 bytes)
output1 + output2 + ... + outputN

### version

> **version**: [`ByteString`](ByteString.md)

4 bytes little endian.

## Onchain
