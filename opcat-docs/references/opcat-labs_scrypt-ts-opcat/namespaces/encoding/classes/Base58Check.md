[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [encoding](../README.md) / Base58Check

# Class: Base58Check

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:9

A Base58check object can encode/decodd Base 58, which is used primarily for
string-formatted Bitcoin addresses and private keys. This is the same as
Base58, except that it includes a checksum to prevent accidental mistypings.

## Param

Can be a string or buffer.

## Constructors

### new Base58Check()

> **new Base58Check**(`obj`): [`Base58Check`](Base58Check.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:18

A Base58check object can encode/decodd Base 58, which is used primarily for
string-formatted Bitcoin addresses and private keys. This is the same as
Base58, except that it includes a checksum to prevent accidental mistypings.

#### Parameters

##### obj

Can be a string or buffer.

`string` | `Buffer`

#### Returns

[`Base58Check`](Base58Check.md)

## Properties

### buf

> **buf**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:25

## Methods

### fromBuffer()

> **fromBuffer**(`buf`): [`Base58Check`](Base58Check.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:31

Sets the internal buffer to the provided Buffer object.

#### Parameters

##### buf

`Buffer`

The buffer to set as the internal state.

#### Returns

[`Base58Check`](Base58Check.md)

Returns the instance for chaining.

***

### fromString()

> **fromString**(`str`): [`Base58Check`](Base58Check.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:37

Converts a Base58Check encoded string to a buffer and stores it in the instance.

#### Parameters

##### str

`string`

The Base58Check encoded string to decode.

#### Returns

[`Base58Check`](Base58Check.md)

Returns the instance for chaining.

***

### set()

> **set**(`obj`): [`Base58Check`](Base58Check.md)

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:24

Sets the buffer property from the given object.

#### Parameters

##### obj

`any`

The object containing the buffer to set.

#### Returns

[`Base58Check`](Base58Check.md)

Returns the instance for chaining.

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:42

Returns the internal buffer containing the Base58Check encoded data.

#### Returns

`Buffer`

The raw buffer representation of the Base58Check data.

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:47

Converts the Base58Check encoded data to a hexadecimal string.

#### Returns

`string`

Hexadecimal representation of the data.

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/encoding/base58check.d.cts:52

Converts the Base58Check instance to its string representation.

#### Returns

`string`

The Base58Check encoded string.
