[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / HashCache

# Class: HashCache

Defined in: node\_modules/@opcat-labs/opcat/types/hash-cache.d.cts:11

A class representing a cache for transaction hash buffers.
Provides methods for serialization/deserialization between Buffer, JSON, and hex formats.

## Constructors

### new HashCache()

> **new HashCache**(`prevoutsHashBuf`, `sequenceHashBuf`, `outputsHashBuf`): [`HashCache`](HashCache.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hash-cache.d.cts:43

Constructs a new hash cache instance with the provided hash buffers.

#### Parameters

##### prevoutsHashBuf

`Buffer`

Hash buffer for prevouts

##### sequenceHashBuf

`Buffer`

Hash buffer for sequence

##### outputsHashBuf

`Buffer`

Hash buffer for outputs

#### Returns

[`HashCache`](HashCache.md)

## Properties

### outputsHashBuf

> **outputsHashBuf**: `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/hash-cache.d.cts:46

Hash buffer for transaction outputs

***

### prevoutsHashBuf

> **prevoutsHashBuf**: `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/hash-cache.d.cts:44

Hash buffer for transaction prevouts

***

### sequenceHashBuf

> **sequenceHashBuf**: `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/hash-cache.d.cts:45

Hash buffer for transaction sequence

## Methods

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/hash-cache.d.cts:51

Converts the object to a Buffer containing its JSON string representation.

#### Returns

`Buffer`

A Buffer containing the JSON string of the object.

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/hash-cache.d.cts:64

Converts the object's buffer representation to a hexadecimal string.

#### Returns

`string`

Hexadecimal string representation of the buffer.

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/hash-cache.d.cts:59

Converts the hash cache object to a JSON representation.

#### Returns

`any`

An object containing hex string representations of the hash buffers:
                  - prevoutsHashBuf: Hex string of prevouts hash buffer (if exists)
                  - sequenceHashBuf: Hex string of sequence hash buffer (if exists)
                  - outputsHashBuf: Hex string of outputs hash buffer (if exists)

***

### fromBuffer()

> `static` **fromBuffer**(`buf`): [`HashCache`](HashCache.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hash-cache.d.cts:17

Creates a HashCache instance from a buffer by parsing it as JSON.

#### Parameters

##### buf

`Buffer`

The input buffer containing JSON data.

#### Returns

[`HashCache`](HashCache.md)

A new HashCache instance created from the parsed JSON.

***

### fromHex()

> `static` **fromHex**(`hex`): [`HashCache`](HashCache.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hash-cache.d.cts:36

Creates a HashCache instance from a hex string.

#### Parameters

##### hex

`string`

The hex string to convert to a buffer.

#### Returns

[`HashCache`](HashCache.md)

A HashCache instance created from the hex string buffer.

***

### fromJSON()

> `static` **fromJSON**(`json`): [`HashCache`](HashCache.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hash-cache.d.cts:26

Creates a HashCache instance from a JSON object.

#### Parameters

##### json

The JSON object containing hash buffers in hex format.

###### outputsHashBuf?

`string`

Hex string for outputs hash buffer.

###### prevoutsHashBuf?

`string`

Hex string for prevouts hash buffer.

###### sequenceHashBuf?

`string`

Hex string for sequence hash buffer.

#### Returns

[`HashCache`](HashCache.md)

A new HashCache instance with converted Buffer values.
