[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Script

# Class: Script

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:11

A bitcoin transaction script. Each transaction's inputs and outputs
has a script that is evaluated to validate it's spending.

See https://en.bitcoin.it/wiki/Script

## Param

optional data to populate script

## Constructors

### new Script()

> **new Script**(`from`?): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:22

A bitcoin transaction script. Each transaction's inputs and outputs
has a script that is evaluated to validate it's spending.

See https://en.bitcoin.it/wiki/Script

#### Parameters

##### from?

`any`

optional data to populate script

#### Returns

[`Script`](Script.md)

## Properties

### buffer

> **buffer**: `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:23

## Accessors

### chunks

#### Get Signature

> **get** **chunks**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:48

##### Returns

`any`

***

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:49

##### Returns

`number`

## Methods

### \_addBuffer()

> **\_addBuffer**(`buf`, `prepend`?): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:219

Adds a buffer to the script with appropriate opcode based on buffer length.
Handles different buffer sizes by using corresponding pushdata opcodes.

#### Parameters

##### buf

`Buffer`

The buffer to add to the script

##### prepend?

`boolean`

Whether to prepend the buffer (default: append)

#### Returns

[`Script`](Script.md)

Returns the script instance for chaining

#### Throws

If buffer length exceeds maximum allowed size (2^32)

***

### \_addOpcode()

> **\_addOpcode**(`opcode`, `prepend`?): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:210

Adds an opcode to the script.

#### Parameters

##### opcode

The opcode to add (can be a number, Opcode instance, or string).

`string` | `number` | [`Opcode`](Opcode.md)

##### prepend?

`boolean`

Whether to prepend the opcode (true) or append it (false).

#### Returns

[`Script`](Script.md)

Returns the script instance for chaining.

#### Throws

Throws if the opcode value exceeds 255.

***

### \_getOutputAddressInfo()

> **\_getOutputAddressInfo**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:253

Gets the output address information from the script.

#### Returns

`any`

An object containing the hash buffer and address type if the script is a public key hash output, otherwise false.

***

### add()

> **add**(`obj`): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:200

Adds a script element to the end of the script.

#### Parameters

##### obj

`any`

The object to add.

#### Returns

[`Script`](Script.md)

Returns the script instance for chaining.

***

### checkMinimalPush()

> **checkMinimalPush**(`i`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:288

Checks if a script chunk uses the minimal push operation possible.

#### Parameters

##### i

`number`

Index of the chunk to check

#### Returns

`boolean`

True if the chunk uses minimal push operation, false otherwise

The function verifies if the chunk could have been represented with:
- OP_0 for empty buffer
- OP_1 to OP_16 for single-byte values 1-16
- OP_1NEGATE for 0x81
- Direct push for buffers ≤75 bytes
- OP_PUSHDATA1 for buffers ≤255 bytes
- OP_PUSHDATA2 for buffers ≤65535 bytes

***

### classify()

> **classify**(): `object`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:167

#### Returns

`object`

The Script type if it is a known form,
or Script.UNKNOWN if it isn't

***

### classifyInput()

> **classifyInput**(): `object`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:177

#### Returns

`object`

The Script type if it is a known form,
or Script.UNKNOWN if it isn't

***

### classifyOutput()

> **classifyOutput**(): `object`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:172

#### Returns

`object`

The Script type if it is a known form,
or Script.UNKNOWN if it isn't

***

### clone()

> **clone**(): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:224

Creates a shallow copy of the Script instance.

#### Returns

[`Script`](Script.md)

A new Script instance with the same buffer content.

***

### decodeMultisigOut()

> **decodeMultisigOut**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:133

Decodes a multisig output script into its components.

#### Returns

`any`

An object containing:
  - m {number} The required number of signatures (m-of-n)
  - n {number} The total number of public keys
  - pubkeys {Buffer[]} Array of public keys involved in the multisig

***

### equals()

> **equals**(`script`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:194

Compares this script with another script for equality.

#### Parameters

##### script

[`Script`](Script.md)

The script to compare with.

#### Returns

`boolean`

True if the scripts have identical buffer contents, false otherwise.

#### Throws

If the provided argument is not a Script instance.

***

### findAndDelete()

> **findAndDelete**(`script`): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:273

Finds and deletes a matching script chunk from the current script.
Analogous to bitcoind's FindAndDelete. Find and delete equivalent chunks,
typically used with push data chunks.  Note that this will find and delete
not just the same data, but the same data with the same push data op as
produced by default. i.e., if a pushdata in a tx does not use the minimal
pushdata op, then when you try to remove the data it is pushing, it will not
be removed, because they do not use the same pushdata op.

#### Parameters

##### script

[`Script`](Script.md)

The script chunk to find and delete.

#### Returns

[`Script`](Script.md)

The modified script instance after deletion.

***

### getAddressInfo()

> **getAddressInfo**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:246

Gets address information for the script.
For input scripts, returns input address info.
For output scripts, returns output address info.
For general scripts, tries output address info first, falls back to input if not available.

#### Returns

`any`

Address information object

***

### getData()

> **getData**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:157

Retrieve the associated data for this script.
In the case of a pay to public key hash, return the hash.
In the case of safe OP_RETURN data, return an array of buffers
In the case of a standard deprecated OP_RETURN, return the data

#### Returns

`Buffer`

***

### getPublicKey()

> **getPublicKey**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:96

Gets the public key from a script output.

#### Returns

`Buffer`

The public key buffer.

#### Throws

If the script is not a public key output.

***

### getPublicKeyHash()

> **getPublicKeyHash**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:102

Retrieves the PublicKeyHash from a script output.

#### Returns

`Buffer`

The PublicKeyHash buffer.

#### Throws

If the script output is not a PublicKeyHash output.

***

### getSignatureOperationsCount()

> **getSignatureOperationsCount**(`accurate`?): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:295

Counts the number of signature operations in the script.

#### Parameters

##### accurate?

`boolean`

Whether to count accurately for OP_CHECKMULTISIG(VERIFY).

#### Returns

`number`

The total count of signature operations.

***

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:73

Custom inspect method for Script instances.

#### Returns

`string`

String representation of the Script object in format '<Script: [content]>'.

***

### isDataOut()

> **isDataOut**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:143

Checks if the script is a data-only output script (OP_RETURN followed by push-only data).

#### Returns

`boolean`

True if the script is a valid data-only output, false otherwise.

***

### isMultisigIn()

> **isMultisigIn**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:138

Checks if the script is a multisig input script.

#### Returns

`boolean`

True if the script is a valid multisig input (starts with OP_0 and has valid DER signatures).

***

### isMultisigOut()

> **isMultisigOut**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:125

Checks if the script is a multisig output script.

#### Returns

`boolean`

True if the script matches the multisig output pattern:
- Has more than 3 chunks
- First chunk is a small integer opcode
- Middle chunks are all buffers
- Second-to-last chunk is a small integer opcode
- Last chunk is OP_CHECKMULTISIG

***

### isPublicKeyHashIn()

> **isPublicKeyHashIn**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:90

Checks if the script contains a valid public key hash.

#### Returns

`boolean`

True if the script has exactly 2 chunks (signature and public key),
                  the signature starts with 0x30, and the public key has a valid version
                  and length (65 bytes for versions 0x04/0x06/0x07, 33 bytes for 0x02/0x03).

***

### isPublicKeyHashOut()

> **isPublicKeyHashOut**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:83

Checks if the script is a standard public key hash output script (P2PKH).

#### Returns

`boolean`

True if the script matches the P2PKH pattern:
- OP_DUP
- OP_HASH160
- 20-byte hash
- OP_EQUALVERIFY
- OP_CHECKSIG

***

### isPublicKeyIn()

> **isPublicKeyIn**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:115

Checks if the script contains a valid public key signature.

#### Returns

`boolean`

True if the script has exactly one chunk that starts with 0x30 (DER signature marker), false otherwise.

***

### isPublicKeyOut()

> **isPublicKeyOut**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:110

Checks if the script is a standard public key output script.

#### Returns

`boolean`

True if the script matches the standard public key output format:
                   - Contains exactly 2 chunks
                   - First chunk is a valid public key buffer (65 bytes for uncompressed, 33 bytes for compressed)
                   - Second chunk is OP_CHECKSIG opcode

***

### isPushOnly()

> **isPushOnly**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:162

Checks if the script consists only of push operations (OP_0 to OP_16) or data push operations (OP_PUSHDATA1/2/4).

#### Returns

`boolean`

True if all chunks are push operations, false otherwise.

***

### isSafeDataOut()

> **isSafeDataOut**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:149

Checks if the script is a safe data output script.
A safe data output script must start with OP_FALSE followed by a valid data output script.

#### Returns

`boolean`

True if the script is a safe data output, false otherwise.

***

### isStandard()

> **isStandard**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:181

#### Returns

`boolean`

if script is one of the known types

***

### prepend()

> **prepend**(`obj`): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:187

Adds a script element at the start of the script.

#### Parameters

##### obj

`any`

a string, number, Opcode, Buffer, or object to add

#### Returns

[`Script`](Script.md)

this script instance

***

### removeCodeseparators()

> **removeCodeseparators**(): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:230

Removes all OP_CODESEPARATOR opcodes from the script chunks.
Updates the script buffer with the filtered chunks and clears the cache.

#### Returns

[`Script`](Script.md)

The modified script instance for chaining.

***

### set()

> **set**(`obj`): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:32

Sets the script content from an object.

#### Parameters

##### obj

The source object containing either chunks array or buffer.

###### buffer?

`Buffer`

Optional buffer containing script data.

###### chunks?

`any`[]

Optional array of chunks to create script from.

#### Returns

[`Script`](Script.md)

Returns the script instance for chaining.

#### Throws

Will throw if argument is invalid (not object or missing required buffer).

***

### slice()

> **slice**(`start`?, `end`?): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:47

Gets a portion of the script's buffer as a new buffer.

#### Parameters

##### start?

`number`

The beginning index of the specified portion of the buffer.

##### end?

`number`

The end index of the specified portion of the buffer.

#### Returns

`Buffer`

A new Buffer that contains the specified portion of the original buffer.

***

### subScript()

> **subScript**(`n`): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:238

If the script does not contain any OP_CODESEPARATOR, Return all scripts
If the script contains any OP_CODESEPARATOR, the scriptCode is the script but removing everything up to and including the last executed OP_CODESEPARATOR before the signature checking opcode being executed

#### Parameters

##### n

`any`

#### Returns

[`Script`](Script.md)

Subset of script starting at the {n}th codeseparator

***

### toAddress()

> **toAddress**(`network`?): [`Address`](Address.md)

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:261

Converts the script to an Address object for the specified network.

#### Parameters

##### network?

`any`

optianal, the network name or identifier.

#### Returns

[`Address`](Address.md)

The derived Address object.

#### Throws

If address information cannot be derived from the script.

***

### toASM()

> **toASM**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:56

Converts the script chunks to ASM (Assembly) format string representation.
Iterates through each chunk and appends its ASM string representation.

#### Returns

`string`

The ASM formatted string (excluding the first character).

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:40

Returns the underlying buffer of the script.

#### Returns

`Buffer`

The script's buffer data.

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:68

Converts the script's buffer to a hexadecimal string.

#### Returns

`string`

Hex-encoded representation of the script buffer.

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/script/script.d.cts:63

Converts the script's chunks to a string representation.
Iterates through each chunk and appends its string representation,
then removes the leading character from the result.

#### Returns

`string`

The concatenated string of all chunks.
