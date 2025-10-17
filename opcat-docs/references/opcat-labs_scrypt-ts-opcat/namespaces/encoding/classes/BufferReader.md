[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [encoding](../README.md) / BufferReader

# Class: BufferReader

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:12

Creates a BufferReader instance to read from various input types.

## Param

Input source (Buffer, hex string, or object with buffer properties)

## Throws

If input is invalid hex string or unrecognized type

## Example

```ts
new BufferReader(Buffer.from('abc')) // from Buffer
new BufferReader('616263')          // from hex string
new BufferReader({buf: buffer})      // from object
```

## Constructors

### new BufferReader()

> **new BufferReader**(`buf`): [`BufferReader`](BufferReader.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:24

Creates a BufferReader instance to read from various input types.

#### Parameters

##### buf

`any`

Input source (Buffer, hex string, or object with buffer properties)

#### Returns

[`BufferReader`](BufferReader.md)

#### Throws

If input is invalid hex string or unrecognized type

#### Example

```ts
new BufferReader(Buffer.from('abc')) // from Buffer
new BufferReader('616263')          // from hex string
new BufferReader({buf: buffer})      // from object
```

## Properties

### buf

> **buf**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:36

***

### finished

> **finished**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:49

Alias for `eof` method - checks if the buffer reader has reached the end of data.

#### Name

BufferReader.prototype.finished

#### Memberof

BufferReader

#### Instance

***

### pos

> **pos**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:37

## Methods

### eof()

> **eof**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:42

Checks if the reader has reached the end of the buffer.

#### Returns

`boolean`

True if the current position is at or beyond the buffer length, false otherwise.

***

### read()

> **read**(`len`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:56

Reads a specified number of bytes from the buffer and advances the position.

#### Parameters

##### len

`number`

The number of bytes to read.

#### Returns

`Buffer`

The read bytes as a Buffer.

#### Throws

If the length is undefined.

***

### readAll()

> **readAll**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:61

Reads and returns all remaining bytes from the buffer, advancing the position to the end.

#### Returns

`Buffer`

The remaining bytes in the buffer.

***

### readInt32LE()

> **readInt32LE**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:97

Reads a 32-bit signed integer from the buffer in little-endian format.
Advances the position by 4 bytes.

#### Returns

`number`

The read 32-bit signed integer.

***

### readReverse()

> **readReverse**(`len`?): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:157

Reads a specified number of bytes from the buffer in reverse order.

#### Parameters

##### len?

`number`

The number of bytes to read. If omitted, reads the entire buffer.

#### Returns

`Buffer`

The reversed buffer segment.

***

### readUInt16BE()

> **readUInt16BE**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:73

Reads an unsigned 16-bit integer from the buffer in big-endian format.
Advances the position by 2 bytes.

#### Returns

`number`

The read unsigned 16-bit integer value.

***

### readUInt16LE()

> **readUInt16LE**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:79

Reads a 16-bit unsigned integer from the buffer in little-endian format
and advances the position by 2 bytes.

#### Returns

`number`

The read unsigned 16-bit integer value

***

### readUInt32BE()

> **readUInt32BE**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:85

Reads an unsigned 32-bit integer from the buffer in big-endian format.
Advances the position by 4 bytes.

#### Returns

`number`

The read unsigned 32-bit integer value.

***

### readUInt32LE()

> **readUInt32LE**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:91

Reads an unsigned 32-bit integer from the buffer in little-endian format.
Advances the position by 4 bytes.

#### Returns

`number`

The read unsigned 32-bit integer value.

***

### readUInt64BEBN()

> **readUInt64BEBN**(): [`BN`](../../crypto/classes/BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:104

Reads an unsigned 64-bit integer in big-endian byte order from the buffer
and returns it as a BN (BigNumber) object.
Advances the position by 8 bytes.

#### Returns

[`BN`](../../crypto/classes/BN.md)

The parsed 64-bit unsigned integer as a BigNumber

***

### readUInt64LEBN()

> **readUInt64LEBN**(): [`BN`](../../crypto/classes/BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:111

Reads an unsigned 64-bit integer in little-endian byte order from the buffer and returns it as a BN (BigNumber).
Optimizes for numbers <= 52 bits by using numeric constructor, falls back to buffer slice for larger numbers.
Advances the buffer position by 8 bytes.

#### Returns

[`BN`](../../crypto/classes/BN.md)

The parsed 64-bit unsigned integer as a BN instance.

***

### readUInt8()

> **readUInt8**(`this`): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:67

Reads an unsigned 8-bit integer from the buffer at the current position.

#### Parameters

##### this

[`BufferReader`](BufferReader.md)

#### Returns

`number`

The unsigned 8-bit integer value read.

***

### readVarintBN()

> **readVarintBN**(): [`BN`](../../crypto/classes/BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:146

Reads a variable-length integer (varint) from the buffer and returns it as a BN (BigNumber).
Handles different varint sizes (1, 2, 4, or 8 bytes) based on the first byte's value:
- 0xfd: reads next 2 bytes as uint16
- 0xfe: reads next 4 bytes as uint32
- 0xff: reads next 8 bytes as uint64
- default: treats first byte as uint8

#### Returns

[`BN`](../../crypto/classes/BN.md)

The parsed varint as a BigNumber

***

### readVarintBuf()

> **readVarintBuf**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:136

Reads a variable-length integer (varint) from the buffer.
The first byte determines the length of the varint:
- 0xfd: 2-byte varint (plus 1 byte for the prefix)
- 0xfe: 4-byte varint (plus 1 byte for the prefix)
- 0xff: 8-byte varint (plus 1 byte for the prefix)
- Otherwise: 1-byte varint (no prefix)

#### Returns

`Buffer`

The varint bytes including the prefix (if any)

***

### readVarintNum()

> **readVarintNum**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:119

Reads a variable-length integer (varint) from the buffer and returns it as a number.
Supports varints up to 53 bits (JavaScript's safe integer limit).
For larger numbers, throws an error suggesting to use `readVarintBN` instead.

#### Returns

`number`

The decoded integer value

#### Throws

If the number exceeds 53-bit precision

***

### readVarLengthBuffer()

> **readVarLengthBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:126

Reads a variable-length buffer from the current position.
First reads a varint to determine the length, then reads the buffer of that size.

#### Returns

`Buffer`

The read buffer.

#### Throws

If the actual read length doesn't match the expected length.

***

### remaining()

> **remaining**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:162

Gets the number of bytes remaining to be read in the buffer.

#### Returns

`number`

The remaining bytes count.

***

### reverse()

> **reverse**(): [`BufferReader`](BufferReader.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:151

Reverses the order of bytes in the internal buffer and returns the instance.

#### Returns

[`BufferReader`](BufferReader.md)

The modified BufferReader instance for chaining.

***

### set()

> **set**(`obj`): [`BufferReader`](BufferReader.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferreader.d.cts:32

Updates the buffer and position from the given object.

#### Parameters

##### obj

The object containing buffer and position to set.

###### buf?

`Buffer`

The buffer to set (optional, keeps current if not provided).

###### pos?

`number`

The position to set (optional, keeps current if not provided).

#### Returns

[`BufferReader`](BufferReader.md)

Returns the instance for chaining.
