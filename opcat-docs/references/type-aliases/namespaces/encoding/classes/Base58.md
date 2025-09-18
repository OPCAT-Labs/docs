[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [encoding](../README.md) / Base58

# Class: Base58

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58.d.cts:10

A Base58 object can encode/decoded Base 58, which is used primarily for
string-formatted Bitcoin addresses and private keys. Addresses and private
keys actually use an additional checksum, and so they actually use the
Base58Check class.

## Param

Can be a string or buffer.

## Constructors

### new Base58()

> **new Base58**(`obj`): [`Base58`](Base58.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58.d.cts:20

A Base58 object can encode/decoded Base 58, which is used primarily for
string-formatted Bitcoin addresses and private keys. Addresses and private
keys actually use an additional checksum, and so they actually use the
Base58Check class.

#### Parameters

##### obj

`object`

Can be a string or buffer.

#### Returns

[`Base58`](Base58.md)

## Properties

### buf

> **buf**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58.d.cts:30

## Methods

### fromBuffer()

> **fromBuffer**(`buf`): [`Base58`](Base58.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58.d.cts:36

Sets the internal buffer to the provided buffer and returns the instance for chaining.

#### Parameters

##### buf

`Buffer`

The buffer to set as the internal buffer.

#### Returns

[`Base58`](Base58.md)

The instance for method chaining.

***

### fromString()

> **fromString**(`str`): [`Base58`](Base58.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58.d.cts:42

Converts a Base58 encoded string to a buffer and stores it in the instance.

#### Parameters

##### str

`string`

The Base58 encoded string to decode.

#### Returns

[`Base58`](Base58.md)

The current instance for chaining.

***

### set()

> **set**(`obj`): [`Base58`](Base58.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58.d.cts:27

Sets the buffer property from the given object.

#### Parameters

##### obj

The object containing the buffer to set.

###### buf?

`Buffer`

The buffer to assign. If not provided, retains current buffer or sets to undefined.

#### Returns

[`Base58`](Base58.md)

Returns the instance for chaining.

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58.d.cts:47

Returns the internal buffer containing the Base58 encoded data.

#### Returns

`Buffer`

The raw buffer representation of the Base58 data.

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58.d.cts:52

Converts the Base58 encoded data to a hexadecimal string.

#### Returns

`string`

Hexadecimal representation of the Base58 data.

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58.d.cts:57

Converts the Base58 instance to its string representation.

#### Returns

`string`

The Base58 encoded string.
