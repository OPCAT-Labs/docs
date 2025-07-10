[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [encoding](../README.md) / Varint

# Class: Varint

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:8

Creates a Varint instance from various input types.

## Param

Input can be a Buffer, number, BN instance, or object with buffer properties.

## Constructors

### new Varint()

> **new Varint**(`buf`): [`Varint`](Varint.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:16

Creates a Varint instance from various input types.

#### Parameters

##### buf

`any`

Input can be a Buffer, number, BN instance, or object with buffer properties.

#### Returns

[`Varint`](Varint.md)

New Varint instance when called without `new`.

## Properties

### buf

> **buf**: `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:17

## Methods

### fromBN()

> **fromBN**(`bn`): [`Varint`](Varint.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:55

Converts a BigNumber (BN) to a varint and stores it in the buffer.

#### Parameters

##### bn

[`BN`](../../crypto/classes/BN.md)

The BigNumber to convert to varint format.

#### Returns

[`Varint`](Varint.md)

Returns the Varint instance for chaining.

***

### fromBuffer()

> **fromBuffer**(`buf`): [`Varint`](Varint.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:43

Sets the internal buffer to the provided buffer and returns the instance.

#### Parameters

##### buf

`Buffer`

The buffer to set as the internal buffer.

#### Returns

[`Varint`](Varint.md)

The instance for chaining.

***

### fromBufferReader()

> **fromBufferReader**(`br`): [`Varint`](Varint.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:49

Reads a varint from a buffer reader and stores it in the instance.

#### Parameters

##### br

`any`

The buffer reader instance to read from.

#### Returns

[`Varint`](Varint.md)

The current Varint instance for chaining.

***

### fromNumber()

> **fromNumber**(`num`): [`Varint`](Varint.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:61

Converts a number to a varint and stores it in the buffer.

#### Parameters

##### num

`number`

The number to convert to varint format.

#### Returns

[`Varint`](Varint.md)

Returns the instance for chaining.

***

### fromString()

> **fromString**(`str`): [`Varint`](Varint.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:32

Converts a hex string to a Varint buffer and updates the instance.

#### Parameters

##### str

`string`

Hex string to convert.

#### Returns

[`Varint`](Varint.md)

The updated Varint instance.

***

### set()

> **set**(`obj`): [`Varint`](Varint.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:24

Sets the buffer for the Varint instance.

#### Parameters

##### obj

The object containing the buffer to set.

###### buf?

`Buffer`

The buffer to assign. If not provided, keeps the current buffer.

#### Returns

[`Varint`](Varint.md)

The Varint instance for chaining.

***

### toBN()

> **toBN**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:63

#### Returns

`any`

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:62

#### Returns

`Buffer`

***

### toNumber()

> **toNumber**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:64

#### Returns

`any`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/varint.d.cts:37

Converts the Varint buffer to a hexadecimal string representation.

#### Returns

`string`

Hexadecimal string of the buffer.
