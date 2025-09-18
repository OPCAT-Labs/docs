[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Opcode

# Class: Opcode

Defined in: node\_modules/@opcat-labs/opcat/types/opcode.d.cts:9

Creates an Opcode instance from a number or string representation.

## Param

The numeric value or string name of the opcode

## Throws

If the input type is not recognized

## Constructors

### new Opcode()

> **new Opcode**(`num`): [`Opcode`](Opcode.md)

Defined in: node\_modules/@opcat-labs/opcat/types/opcode.d.cts:18

Creates an Opcode instance from a number or string representation.

#### Parameters

##### num

The numeric value or string name of the opcode

`string` | `number`

#### Returns

[`Opcode`](Opcode.md)

A new Opcode instance

#### Throws

If the input type is not recognized

## Methods

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/opcode.d.cts:52

Will return a string formatted for the console

#### Returns

`string`

Script opcode

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/opcode.d.cts:28

Converts the opcode to a Buffer by first converting it to a hex string.

#### Returns

`Buffer`

The opcode represented as a Buffer.

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/opcode.d.cts:23

Converts the opcode number to its hexadecimal string representation.

#### Returns

`string`

Hexadecimal string of the opcode number.

***

### toNumber()

> **toNumber**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/opcode.d.cts:33

Gets the numeric value of the opcode.

#### Returns

`number`

The numeric representation of the opcode.

***

### toSafeString()

> **toSafeString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/opcode.d.cts:46

Converts the opcode to a human-readable string representation.
If the opcode has a known mnemonic, returns that string.
Otherwise, returns the hexadecimal representation of the opcode.

#### Returns

`string`

The safe string representation of the opcode.

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/opcode.d.cts:39

Converts the opcode number to its string representation.

#### Returns

`string`

The string representation of the opcode.

#### Throws

If the opcode number has no corresponding string mapping.
