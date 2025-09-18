[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Input

# Class: Input

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:13

Creates an Input instance from parameters.

## Param

Input parameters object

## Param

Previous transaction ID (hex string or Buffer)

## Param

Output index in previous transaction

## Param

Output instance or output parameters

## Param

Sequence number (defaults to DEFAULT_SEQNUMBER)

## Param

Script instance, buffer or hex string

## Constructors

### new Input()

> **new Input**(`params`): [`Input`](Input.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:32

Creates an Input instance from parameters.

#### Parameters

##### params

Input parameters object

###### output?

[`Output`](Output.md)

Output instance or output parameters

###### outputIndex

`number`

Output index in previous transaction

###### prevTxId

`string` \| `Buffer`

Previous transaction ID (hex string or Buffer)

###### script?

`string` \| [`Script`](Script.md) \| `Buffer`

Script instance, buffer or hex string

###### sequenceNumber?

`number`

Sequence number (defaults to DEFAULT_SEQNUMBER)

#### Returns

[`Input`](Input.md)

New Input instance or initialized instance if params provided.

## Properties

### \_script

> **\_script**: [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:73

***

### \_scriptBuffer

> **\_scriptBuffer**: `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:74

***

### output

> **output**: [`Output`](Output.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:41

***

### outputIndex

> **outputIndex**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:43

***

### prevTxId

> **prevTxId**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:42

***

### sequenceNumber

> **sequenceNumber**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:44

***

### toObject()

> **toObject**: () => `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:52

Converts the Input instance to a plain object for JSON serialization.
Includes prevTxId, outputIndex, sequenceNumber, and script as hex strings.
Optionally adds human-readable scriptString if script is valid,
and includes the output object if present.

#### Returns

`any`

A plain object representation of the Input.

## Accessors

### script

#### Get Signature

> **get** **script**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:39

##### Returns

`any`

## Methods

### addSignature()

> `abstract` **addSignature**(`_transaction`, `_signature`): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:112

Abstract method to add a signature to the transaction input.
Must be implemented by concrete input types.

#### Parameters

##### \_transaction

`any`

##### \_signature

`any`

#### Returns

`void`

***

### clearSignatures()

> `abstract` **clearSignatures**(): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:117

Clears all signatures from the input.

#### Returns

`void`

***

### getPreimage()

> **getPreimage**(`transaction`, `inputIndex`, `sigtype`, `isLowS`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:92

Retrieve preimage for the Input.

#### Parameters

##### transaction

`Transaction`

the transaction to be signed

##### inputIndex

`number`

the index of this input in the provided transaction

##### sigtype

`any`

##### isLowS

`boolean`

true if the sig hash is safe for low s.

#### Returns

`Buffer`

***

### getSignatures()

> **getSignatures**(`transaction`, `privateKeys`, `inputIndex`, `sigtype`): [`TransactionSignature`](TransactionSignature.md)[]

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:83

Retrieve signatures for the provided PrivateKey.

#### Parameters

##### transaction

`Transaction`

the transaction to be signed

##### privateKeys

the private key to use when signing

`any`[] | [`PrivateKey`](PrivateKey.md)

##### inputIndex

`number`

the index of this input in the provided transaction

##### sigtype

`any`

#### Returns

[`TransactionSignature`](TransactionSignature.md)[]

***

### isFinal()

> **isFinal**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:104

Checks if the input is final (has maximum sequence number).

#### Returns

`boolean`

True if the input is final, false otherwise.

***

### isFullySigned()

> `abstract` **isFullySigned**(): `never`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:99

Abstract method that throws an error when invoked. Must be implemented by subclasses
to determine if all required signatures are present on this input.

#### Returns

`never`

#### Throws

Always throws to indicate abstract method usage

***

### isNull()

> **isNull**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:130

#### Returns

`boolean`

true if this is a coinbase input (represents no input)

***

### isValidSignature()

> **isValidSignature**(`transaction`, `signature`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:126

Verifies if a signature is valid for this input in the given transaction.
Note: Temporarily modifies the signature object by setting nhashtype from sigtype.

#### Parameters

##### transaction

`any`

The transaction to verify against

##### signature

[`TransactionSignature`](TransactionSignature.md)

Signature object containing signature, publicKey, etc.

#### Returns

`boolean`

True if the signature is valid, false otherwise

***

### setScript()

> **setScript**(`script`): [`Input`](Input.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:72

Sets the script for this input.

#### Parameters

##### script

Can be a Script object, hex string, human-readable string, Buffer, or null (for empty script)

`string` | [`Script`](Script.md) | `Buffer`

#### Returns

[`Input`](Input.md)

Returns the Input instance for chaining

#### Throws

If script is of invalid type

***

### toBufferWriter()

> **toBufferWriter**(`hashScriptSig`, `writer`?): [`BufferWriter`](../namespaces/encoding/classes/BufferWriter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:60

Serializes the input to a BufferWriter.

#### Parameters

##### hashScriptSig

`boolean`

Whether to hash the script (true) or include it directly (false).

##### writer?

[`BufferWriter`](../namespaces/encoding/classes/BufferWriter.md)

Optional BufferWriter instance to write to.

#### Returns

[`BufferWriter`](../namespaces/encoding/classes/BufferWriter.md)

The BufferWriter containing the serialized input.

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:53

#### Returns

`any`

***

### toPrevout()

> **toPrevout**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:65

Converts the input to a prevout format (txid + output index) as a buffer.

#### Returns

`Buffer`

The serialized prevout data.
