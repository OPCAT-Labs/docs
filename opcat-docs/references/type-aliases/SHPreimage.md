[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / SHPreimage

# Type Alias: SHPreimage

> **SHPreimage**: `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts:67](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/structs.ts#L67)

transaction digest for signature verification,

## Type declaration

### hashOutputs

> **hashOutputs**: [`ByteString`](ByteString.md)

32 bytes.
hash256(output0(value(8 bytes, little endian) + scriptHash(32 bytes) + dataHash(32 bytes)) + output1 + ... + outputN)

### hashPrevouts

> **hashPrevouts**: [`ByteString`](ByteString.md)

32 bytes.
hash256(prevout0 + prevout1 + ... + prevoutN)

### hashSequences

> **hashSequences**: [`ByteString`](ByteString.md)

32 bytes.
hash256(sequence0(4 bytes, little endian) + sequence1 + ... + sequenceN)

### hashSpentAmounts

> **hashSpentAmounts**: [`ByteString`](ByteString.md)

32 bytes.
hash256(spentAmount0(8 bytes, little endian) + spentAmount1 + ... + spentAmountN)

### hashSpentDataHashes

> **hashSpentDataHashes**: [`ByteString`](ByteString.md)

32 bytes.
hash256(spentDataHash0(32 bytes) + spentDataHash1 + ... + spentDataHashN)

### hashSpentScriptHashes

> **hashSpentScriptHashes**: [`ByteString`](ByteString.md)

32 bytes.
hash256(spentScriptHash0(32 bytes) + spentScriptHash1 + ... + spentScriptHashN)

### inputIndex

> **inputIndex**: `UInt32`

4 bytes little endian.

### nLockTime

> **nLockTime**: `UInt32`

4 bytes little endian.

### nSequence

> **nSequence**: [`ByteString`](ByteString.md)

4 bytes little endian.

### nVersion

> **nVersion**: [`ByteString`](ByteString.md)

4 bytes.
version number of the transaction

### sigHashType

> **sigHashType**: `UInt32`

4 bytes little endian.

### spentDataHash

> **spentDataHash**: [`ByteString`](ByteString.md)

32 bytes.
current input's prevout data hash, SHA256

### spentScriptHash

> **spentScriptHash**: [`ByteString`](ByteString.md)

32 bytes.
current input's prevout script hash, SHA256

### value

> **value**: [`UInt64`](UInt64.md)

8 bytes little endian. spent amount;

## See

[BIP341](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#signature-validation-rules)

## Onchain
