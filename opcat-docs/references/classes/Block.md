[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Block

# Class: Block

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:10

Instantiate a Block from a Buffer, JSON object, or Object with
the properties of the Block

## Param

A Buffer, JSON string, or Object

## Constructors

### new Block()

> **new Block**(`arg`): [`Block`](Block.md)

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:20

Instantiate a Block from a Buffer, JSON object, or Object with
the properties of the Block

#### Parameters

##### arg

`any`

#### Returns

[`Block`](Block.md)

## Properties

### hash

> **hash**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:69

***

### id

> **id**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:68

***

### toObject()

> **toObject**: () => `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:25

Converts the Block instance to a plain object (also aliased as toJSON).

#### Returns

`any`

The plain object representation of the Block.

## Methods

### \_getHash()

> **\_getHash**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:67

#### Returns

`Buffer`

- The little endian hash buffer of the header

***

### getMerkleRoot()

> **getMerkleRoot**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:58

Calculates the merkleRoot from the transactions.

#### Returns

`Buffer`

- A buffer of the merkle root hash

***

### getMerkleTree()

> **getMerkleTree**(): `any`[]

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:53

Will build a merkle tree of all the transactions, ultimately arriving at
a single point, the merkle root.

#### Returns

`any`[]

- An array with each level of the tree after the other.

#### Link

https://en.bitcoin.it/wiki/Protocol_specification#Merkle_Trees

***

### getTransactionHashes()

> **getTransactionHashes**(): `any`[]

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:46

Will iterate through each transaction and return an array of hashes

#### Returns

`any`[]

- An array with transaction hashes

***

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:73

#### Returns

`string`

- A string formatted for the console

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:31

Converts the block to a buffer representation.

#### Returns

`Buffer`

The buffer containing the block data.

***

### toBufferWriter()

> **toBufferWriter**(`bw`): [`BufferWriter`](../namespaces/encoding/classes/BufferWriter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:41

#### Parameters

##### bw

`any`

#### Returns

[`BufferWriter`](../namespaces/encoding/classes/BufferWriter.md)

- An instance of BufferWriter representation of the Block

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:26

#### Returns

`any`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:36

Returns the string representation of the Block instance.

#### Returns

`string`

- A hex encoded string of the block

***

### validMerkleRoot()

> **validMerkleRoot**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/block/block.d.cts:63

Verifies that the transactions in the block match the header merkle root

#### Returns

`boolean`

- If the merkle roots match
