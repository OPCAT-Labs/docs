[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [encoding](../README.md) / BufferWriter

# Class: BufferWriter

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:14

BufferWriter is a utility class for efficiently writing and concatenating buffers.
It provides methods for writing various numeric types in both little-endian and big-endian formats,
as well as variable-length integers (varints). The class maintains an internal array of buffers
and can efficiently concatenate them into a single buffer when needed.

## Example

```ts
const writer = new BufferWriter();
writer.writeUInt32LE(1234).writeUInt16BE(5678);
const result = writer.toBuffer();
```

## Constructors

### new BufferWriter()

> **new BufferWriter**(`obj`?): [`BufferWriter`](BufferWriter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:26

Initializes a new BufferWriter instance.

#### Parameters

##### obj?

`any`

Optional object to set initial buffer content. If not provided,
                        creates an empty buffer writer with empty buffers array and length 0.

#### Returns

[`BufferWriter`](BufferWriter.md)

## Properties

### buffers

> **buffers**: `any`[]

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:27

***

### length

> **length**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:28

## Methods

### concat()

> **concat**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:45

Returns the buffer by concatenating all written data.

#### Returns

`Buffer`

The concatenated buffer.

***

### set()

> **set**(`obj`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:40

Sets the internal buffers and calculates total length.

#### Parameters

##### obj

`any`

Object containing buffers (either `buffers` or `bufs` property)

#### Returns

`any`

Returns the instance for chaining

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:52

Converts the internal buffer chunks into a single Buffer.
If there's only one chunk, returns it directly. Otherwise,
concatenates all chunks into a new Buffer.

#### Returns

`Buffer`

The combined buffer

***

### write()

> **write**(`buffer`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:34

Appends a buffer to the internal buffers array and updates the total length.

#### Parameters

##### buffer

`Buffer`

The buffer to append.

#### Returns

`this`

Returns the instance for chaining.

***

### writeInt32LE()

> **writeInt32LE**(`n`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:114

Writes a 32-bit signed integer in little-endian format to the buffer.

#### Parameters

##### n

`number`

The integer to write.

#### Returns

`this`

Returns the BufferWriter instance for chaining.

***

### writeReverse()

> **writeReverse**(`buf`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:58

Writes a buffer in reverse order to the current buffer.

#### Parameters

##### buf

`Buffer`

The buffer to be written in reverse.

#### Returns

`this`

Returns the instance for chaining.

***

### writeUInt16BE()

> **writeUInt16BE**(`n`): [`BufferWriter`](BufferWriter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:71

Writes a 16-bit unsigned integer in big-endian byte order.
Internally converts the value to little-endian and reverses the bytes.

#### Parameters

##### n

`number`

The number to write (0-65535).

#### Returns

[`BufferWriter`](BufferWriter.md)

Returns the BufferWriter instance for chaining.

***

### writeUInt16LE()

> **writeUInt16LE**(`n`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:64

Writes a 16-bit unsigned integer in little-endian format.

#### Parameters

##### n

`number`

The number to write.

#### Returns

`this`

Returns the instance for chaining.

***

### writeUInt32BE()

> **writeUInt32BE**(`n`): [`BufferWriter`](BufferWriter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:83

Writes a 32-bit unsigned integer in big-endian format.

#### Parameters

##### n

`number`

The number to write.

#### Returns

[`BufferWriter`](BufferWriter.md)

Returns the BufferWriter instance for chaining.

***

### writeUInt32LE()

> **writeUInt32LE**(`n`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:77

Writes a 32-bit unsigned integer in little-endian format.

#### Parameters

##### n

`number`

The number to write.

#### Returns

`this`

Returns the instance for chaining.

***

### writeUInt64BEBN()

> **writeUInt64BEBN**(`bn`): [`BufferWriter`](BufferWriter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:102

Writes a 64-bit unsigned integer in big-endian byte order (as BN.js instance).
Internally converts to little-endian and writes reversed for big-endian output.

#### Parameters

##### bn

`BN`

The BigNumber to write as 64-bit big-endian

#### Returns

[`BufferWriter`](BufferWriter.md)

Returns this instance for chaining

***

### writeUInt64LEBN()

> **writeUInt64LEBN**(`bn`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:95

Writes a 64-bit unsigned integer in little-endian byte order from a BigNumber.

#### Parameters

##### bn

`any`

The BigNumber to write.

#### Returns

`this`

Returns the BufferWriter instance for chaining.

***

### writeUInt8()

> **writeUInt8**(`n`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:89

Writes an unsigned 8-bit integer to the buffer in little-endian format.

#### Parameters

##### n

`number`

The number to write (0-255)

#### Returns

`this`

Returns the BufferWriter instance for chaining

***

### writeVarintBN()

> **writeVarintBN**(`bn`): [`BufferWriter`](BufferWriter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:125

Writes a variable-length integer (varint) to the buffer using BigNumber.
Handles numbers of different sizes with appropriate encoding:
- Numbers < 253: 1 byte
- Numbers < 0x10000: 1 byte prefix (253) + 2 bytes
- Numbers < 0x100000000: 1 byte prefix (254) + 4 bytes
- Larger numbers: 1 byte prefix (255) + 8 bytes

#### Parameters

##### bn

`BN`

BigNumber to write as varint

#### Returns

[`BufferWriter`](BufferWriter.md)

Returns this for chaining

***

### writeVarintNum()

> **writeVarintNum**(`n`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:108

Writes a variable-length integer (varint) to the buffer.

#### Parameters

##### n

`number`

The number to write as varint

#### Returns

`this`

Returns the BufferWriter instance for chaining

***

### varintBufNum()

> `static` **varintBufNum**(`n`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/bufferwriter.d.cts:20

Converts a number to a varint-encoded Buffer.

#### Parameters

##### n

`number`

The number to encode.

#### Returns

`Buffer`

The varint-encoded Buffer.
