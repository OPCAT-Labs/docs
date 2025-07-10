[**scrypt-ts-opcat v1.0.1**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Input](../README.md) / fromObject

# Function: fromObject()

> **fromObject**(`params`): [`Input`](../../../classes/Input.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/input/input.d.cts:150

Creates an Input instance from a plain JavaScript object.

## Parameters

### params

Input parameters object

#### output?

[`Output`](../../../classes/Output.md)

Output instance or output parameters

#### outputIndex

`number`

Output index in previous transaction

#### prevTxId

`string` \| `Buffer`

Previous transaction ID (hex string or Buffer)

#### script?

`string` \| [`Script`](../../../classes/Script.md) \| `Buffer`

Script instance, buffer or hex string

#### sequenceNumber?

`number`

Sequence number (defaults to DEFAULT_SEQNUMBER)

## Returns

[`Input`](../../../classes/Input.md)

The created Input instance.

## Throws

Will throw if the argument is not an object.
