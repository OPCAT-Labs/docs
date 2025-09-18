[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Block](../README.md) / BlockHeader

# Class: BlockHeader

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:10

Instantiate a BlockHeader from a Buffer, JSON object, or Object with
the properties of the BlockHeader

## Param

A Buffer, JSON string, or Object

## Constructors

### new BlockHeader()

> **new BlockHeader**(`arg`): [`BlockHeader`](BlockHeader.md)

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:20

Instantiate a BlockHeader from a Buffer, JSON object, or Object with
the properties of the BlockHeader

#### Parameters

##### arg

`any`

#### Returns

[`BlockHeader`](BlockHeader.md)

- An instance of block header

## Properties

### bits

> **bits**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:26

***

### hash

> **hash**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:59

***

### id

> **id**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:58

***

### merkleRoot

> **merkleRoot**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:23

***

### nonce

> **nonce**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:27

***

### prevHash

> **prevHash**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:22

***

### time

> **time**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:24

***

### timestamp

> **timestamp**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:25

***

### toObject()

> **toObject**: () => `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:31

#### Returns

`any`

- A plain object of the BlockHeader

***

### version

> **version**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:21

## Methods

### getDifficulty()

> **getDifficulty**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:56

#### Returns

`number`

#### Link

https://en.bitcoin.it/wiki/Difficulty

***

### getTargetDifficulty()

> **getTargetDifficulty**(`bits`): [`BN`](../../crypto/classes/BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:51

Returns the target difficulty for this block

#### Parameters

##### bits

`number`

#### Returns

[`BN`](../../crypto/classes/BN.md)

An instance of BN with the decoded difficulty bits

***

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:71

#### Returns

`string`

- A string formatted for the console

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:36

#### Returns

`Buffer`

- A Buffer of the BlockHeader

***

### toBufferWriter()

> **toBufferWriter**(`bw`): [`BufferWriter`](../../encoding/classes/BufferWriter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:45

#### Parameters

##### bw

`any`

#### Returns

[`BufferWriter`](../../encoding/classes/BufferWriter.md)

- An instance of BufferWriter representation of the BlockHeader

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:32

#### Returns

`any`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:40

#### Returns

`string`

- A hex encoded string of the BlockHeader

***

### validProofOfWork()

> **validProofOfWork**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:67

#### Returns

`boolean`

- If the proof-of-work hash satisfies the target difficulty

***

### validTimestamp()

> **validTimestamp**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/block/blockheader.d.cts:63

#### Returns

`boolean`

- If timestamp is not too far in the future
