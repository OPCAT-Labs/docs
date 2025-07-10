[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Block](../README.md) / MerkleBlock

# Class: MerkleBlock

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:10

Instantiate a MerkleBlock from a Buffer, JSON object, or Object with
the properties of the Block

## Param

A Buffer, JSON string, or Object representing a MerkleBlock

## Constructors

### new MerkleBlock()

> **new MerkleBlock**(`arg`): [`MerkleBlock`](MerkleBlock.md)

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:20

Instantiate a MerkleBlock from a Buffer, JSON object, or Object with
the properties of the Block

#### Parameters

##### arg

`any`

#### Returns

[`MerkleBlock`](MerkleBlock.md)

## Properties

### \_flagBitsUsed

> **\_flagBitsUsed**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:21

***

### \_hashesUsed

> **\_hashesUsed**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:22

***

### toObject()

> **toObject**: () => `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:35

#### Returns

`any`

- A plain object with the MerkleBlock properties

## Methods

### filterdTxsHash()

> **filterdTxsHash**(): `any`[]

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:48

WARNING: This method is deprecated. Use filteredTxsHash instead.

Return a list of all the txs hash that match the filter

#### Returns

`any`[]

- txs hash that match the filter

***

### filteredTxsHash()

> **filteredTxsHash**(): `any`[]

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:53

Return a list of all the txs hash that match the filter

#### Returns

`any`[]

- txs hash that match the filter

***

### hasTransaction()

> **hasTransaction**(`tx`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:61

#### Parameters

##### tx

Transaction or Transaction ID Hash

`string` | [`Transaction`](../../../classes/Transaction.md)

#### Returns

`boolean`

- return true/false if this MerkleBlock has the TX or not

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:26

#### Returns

`Buffer`

- A buffer of the block

***

### toBufferWriter()

> **toBufferWriter**(`bw`?): [`BufferWriter`](../../encoding/classes/BufferWriter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:31

#### Parameters

##### bw?

[`BufferWriter`](../../encoding/classes/BufferWriter.md)

An existing instance of BufferWriter

#### Returns

[`BufferWriter`](../../encoding/classes/BufferWriter.md)

- An instance of BufferWriter representation of the MerkleBlock

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:36

#### Returns

`any`

***

### validMerkleTree()

> **validMerkleTree**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/block/merkleblock.d.cts:41

Verify that the MerkleBlock is valid

#### Returns

`boolean`

- True/False whether this MerkleBlock is Valid
