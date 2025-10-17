[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / Output

# Class: Output

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:11

Represents a transaction output in the Bitcoin protocol.

## Param

The arguments to create an Output.

## Param

The amount in satoshis.

## Param

The output script (either as Buffer or hex string).

## Param

Additional data associated with the output.

## Throws

If arguments are invalid or unrecognized.

## Constructors

### new Output()

> **new Output**(`args`): [`Output`](Output.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:26

Represents a transaction output in the Bitcoin protocol.

#### Parameters

##### args

The arguments to create an Output.

###### data?

`string` \| `Buffer`

Additional data associated with the output.

###### satoshis

`number`

The amount in satoshis.

###### script

`string` \| [`Script`](Script.md) \| `Buffer`

The output script (either as Buffer or hex string).

#### Returns

[`Output`](Output.md)

#### Throws

If arguments are invalid or unrecognized.

## Properties

### \_data

> **\_data**: `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:55

***

### \_script

> **\_script**: [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:62

***

### satoshis

> **satoshis**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:31

***

### toObject()

> **toObject**: () => `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:47

Converts the Output instance to a plain object representation.
The resulting object includes satoshis, script (as hex string), and data (as hex string).

#### Returns

`any`

- An object with satoshis, script, and data properties.

## Accessors

### data

#### Get Signature

> **get** **data**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:33

##### Returns

`Buffer`

***

### satoshisBN

#### Get Signature

> **get** **satoshisBN**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:41

##### Returns

`any`

#### Set Signature

> **set** **satoshisBN**(`value`): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:40

##### Parameters

###### value

`any`

##### Returns

`void`

***

### script

#### Get Signature

> **get** **script**(): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:32

##### Returns

[`Script`](Script.md)

## Methods

### clone()

> **clone**(): [`Output`](Output.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:98

Creates a shallow clone of the Output instance.

#### Returns

[`Output`](Output.md)

A new Output instance with the same properties as the original.

***

### getSize()

> **getSize**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:93

Calculates the total size of the output in bytes.
Includes the script size, data size, and their respective varint sizes,
plus a fixed 8-byte overhead.
8    value
???  script+data size (VARINT)
script size
data size

#### Returns

`number`

The total output size in bytes.

***

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:75

Returns a human-readable string representation of the Output object.
Format: '<Output (satoshis sats) scriptString>'

#### Returns

`string`

Formatted string showing satoshis and script inspection result

***

### invalidSatoshis()

> **invalidSatoshis**(): `string` \| `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:39

Checks if the satoshis value in this output is invalid.

#### Returns

`string` \| `boolean`

Returns an error message string if invalid (satoshis exceed max safe integer,
                          corrupted value, or negative), otherwise returns false.

***

### setData()

> **setData**(`data`): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:54

Sets the output data.

#### Parameters

##### data

The data to set. Can be a Buffer or hex string.

`string` | `Buffer`

#### Returns

`void`

#### Throws

If data is not a Buffer or valid hex string.

***

### setScript()

> **setScript**(`script`): [`Output`](Output.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:69

Sets the script for this output.

#### Parameters

##### script

The script to set, which can be a Script instance, hex string, or Buffer.

`string` | [`Script`](Script.md) | `Buffer`

#### Returns

[`Output`](Output.md)

Returns the output instance for chaining.

#### Throws

Throws if the script type is invalid.

***

### setScriptFromBuffer()

> **setScriptFromBuffer**(`buffer`): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:61

Sets the script for this output from a buffer.

#### Parameters

##### buffer

`Buffer`

The buffer containing the script data.

#### Returns

`void`

#### Throws

If the buffer is invalid.

***

### toBufferWriter()

> **toBufferWriter**(`hashScriptPubkey`, `writer`?): [`BufferWriter`](../namespaces/encoding/classes/BufferWriter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:82

Converts the Output instance to a buffer writer format.

#### Parameters

##### hashScriptPubkey

`boolean`

If true, hashes script and data with SHA256; otherwise writes them directly.

##### writer?

[`BufferWriter`](../namespaces/encoding/classes/BufferWriter.md)

Optional BufferWriter instance. If not provided, a new one is created.

#### Returns

[`BufferWriter`](../namespaces/encoding/classes/BufferWriter.md)

The buffer writer containing the serialized output data.

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/output.d.cts:48

#### Returns

`any`
