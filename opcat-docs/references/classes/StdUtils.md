[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / StdUtils

# Class: StdUtils

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts:28](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts#L28)

A utility class providing standard helper methods for working with ByteStrings and numeric conversions.
Includes methods for:
- Checking ByteString length divisibility
- Converting between numeric types (UInt32, UInt64) and ByteStrings
- Little-endian unsigned integer conversions
- Variable-length integer (VarInt) serialization/deserialization
- Push data serialization for Bitcoin script
All methods are static and annotated with @method() decorator.

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Constructors

### new StdUtils()

> **new StdUtils**(...`args`): [`StdUtils`](StdUtils.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L32)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`StdUtils`](StdUtils.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`constructor`](SmartContractLib.md#constructors)

## Properties

### args

> **args**: `any`[] = `[]`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:31](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L31)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`args`](SmartContractLib.md#args-1)

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:16](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L16)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`artifact`](SmartContractLib.md#artifact)

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L17)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`stateType`](SmartContractLib.md#statetype)

## Methods

### byteStringToUInt32()

> `static` **byteStringToUInt32**(`b`): `UInt32`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts:75](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts#L75)

Converts a 4-byte ByteString to an unsigned 32-bit integer in little-endian format.

#### Parameters

##### b

[`ByteString`](../type-aliases/ByteString.md)

The ByteString to convert (must be exactly 4 bytes long)

#### Returns

`UInt32`

The converted UInt32 value

#### Throws

Will throw an error if the input ByteString length is not 4 bytes

***

### checkLenDivisibleBy()

> `static` **checkLenDivisibleBy**(`b`, `n`): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts:37](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts#L37)

Checks if the length of a ByteString is divisible by a given number and returns the quotient.

#### Parameters

##### b

[`ByteString`](../type-aliases/ByteString.md)

The ByteString to check

##### n

`bigint`

The divisor to check against

#### Returns

`bigint`

The quotient of the division (length / n)

#### Throws

If the length is not divisible by n

***

### fromLEUnsigned()

> `static` **fromLEUnsigned**(`b`): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts:99](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts#L99)

convert `ByteString` to unsigned integer, in sign-magnitude little endian

#### Parameters

##### b

[`ByteString`](../type-aliases/ByteString.md)

#### Returns

`bigint`

returns a number

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L19)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

*typeof* [`SmartContractLib`](SmartContractLib.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`loadArtifact`](SmartContractLib.md#loadartifact)

***

### pushData()

> `static` **pushData**(`buf`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts:149](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts#L149)

Pushes data to a buffer with appropriate size header.

#### Parameters

##### buf

[`ByteString`](../type-aliases/ByteString.md)

The input data as a ByteString

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

The input data prefixed with appropriate size header in little-endian format

#### Remarks

The header format follows standard Bitcoin script pushdata rules:
         - 0x4c for 1-byte length (0-255 bytes)
         - 0x4d for 2-byte length (256-65535 bytes)
         - 0x4e for 4-byte length (65536-4294967295 bytes)

#### Throws

Will assert if input size exceeds 32-bit limit (4294967295 bytes)

***

### readVarint()

> `static` **readVarint**(`buf`, `pos`): `ReadVarintResult`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts:184](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts#L184)

read [VarInt (variable integer)][https://learnmeabitcoin.com/technical/general/compact-size/](https://learnmeabitcoin.com/technical/general/compact-size/)-encoded data from the beginning of 'buf'

#### Parameters

##### buf

[`ByteString`](../type-aliases/ByteString.md)

a buffer `ByteString` of format: [prefix FD/FE/FF +] length + data

##### pos

`bigint`

#### Returns

`ReadVarintResult`

return data

***

### toLEUnsigned()

> `static` **toLEUnsigned**(`n`, `l`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts:87](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts#L87)

convert signed integer `n` to unsigned integer of `l` string, in little endian

#### Parameters

##### n

`bigint`

the number to be converted

##### l

`bigint`

expected length

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

returns a `ByteString`

***

### uint32ToByteString()

> `static` **uint32ToByteString**(`n`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts:63](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts#L63)

Converts a UInt32 number to a 4-byte little-endian ByteString.

#### Parameters

##### n

`UInt32`

The UInt32 number to convert

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

The resulting 4-byte little-endian ByteString

#### Throws

If the input number is outside the UInt32 range (0 to 4294967295)

***

### uint64ToByteString()

> `static` **uint64ToByteString**(`n`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts:51](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts#L51)

Converts a UInt64 value to a little-endian ByteString.

#### Parameters

##### n

[`UInt64`](../type-aliases/UInt64.md)

The UInt64 value to convert

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

The little-endian ByteString representation

#### Throws

If the input value is outside UInt64 range (0 to 2^64-1)

***

### writeVarInt()

> `static` **writeVarInt**(`n`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts:114](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/stdUtils.ts#L114)

Encodes a bigint into a variable-length integer (VarInt) format as ByteString.
The encoding follows the standard VarInt scheme:
- Values < 0xfd: encoded as 1 byte
- Values < 0x10000: prefixed with 0xfd and encoded as 2 bytes (little-endian)
- Values < 0x100000000: prefixed with 0xfe and encoded as 4 bytes (little-endian)
- Larger values: prefixed with 0xff and encoded as 8 bytes (little-endian)

#### Parameters

##### n

`bigint`

The bigint value to encode

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

ByteString containing the VarInt encoded value
