[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / TxUtils

# Class: TxUtils

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:26](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L26)

Library for parsing and constructing transactions

## Onchain

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Constructors

### new TxUtils()

> **new TxUtils**(...`args`): [`TxUtils`](TxUtils.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L32)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`TxUtils`](TxUtils.md)

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

***

### ZERO\_SATS

> `readonly` `static` **ZERO\_SATS**: [`UInt64`](../type-aliases/UInt64.md) = `0n`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:29](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L29)

if a output satoshi value is zero

## Methods

### buildChangeOutput()

> `static` **buildChangeOutput**(`change`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:66](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L66)

Build serialized change output

#### Parameters

##### change

[`TxOut`](../type-aliases/TxOut.md)

change output to build

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized change output in format ByteString

***

### buildDataOutput()

> `static` **buildDataOutput**(`scriptHash`, `satoshis`, `dataHash`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:50](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L50)

Build serialized tx output

#### Parameters

##### scriptHash

[`ByteString`](../type-aliases/ByteString.md)

##### satoshis

[`UInt64`](../type-aliases/UInt64.md)

serialized satoshis of the output

##### dataHash

[`ByteString`](../type-aliases/ByteString.md)

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized tx output in format ByteString

***

### buildOpReturnOutput()

> `static` **buildOpReturnOutput**(`data`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:95](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L95)

build `OP_RETURN` script from data payload

#### Parameters

##### data

[`ByteString`](../type-aliases/ByteString.md)

the data payload

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a ByteString contains the data payload

***

### buildOpreturnScript()

> `static` **buildOpreturnScript**(`data`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:134](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L134)

build `OP_FALSE OP_RETURN` script from data payload

#### Parameters

##### data

[`ByteString`](../type-aliases/ByteString.md)

the data payload

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a ByteString contains the data payload

***

### buildOutput()

> `static` **buildOutput**(`scriptHash`, `satoshis`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:38](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L38)

Build serialized tx output

#### Parameters

##### scriptHash

[`ByteString`](../type-aliases/ByteString.md)

##### satoshis

[`UInt64`](../type-aliases/UInt64.md)

serialized satoshis of the output

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized tx output in format ByteString

***

### buildP2PKHOutput()

> `static` **buildP2PKHOutput**(`amount`, `addr`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:124](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L124)

constructs a P2PKH output from a given PubKeyHash and satoshi amount

#### Parameters

##### amount

[`UInt64`](../type-aliases/UInt64.md)

the satoshi amount

##### addr

[`Ripemd160`](../type-aliases/Ripemd160.md)

the recipient's public key hash

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString` representing the P2PKH output

***

### buildP2PKHScript()

> `static` **buildP2PKHScript**(`addr`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:106](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L106)

constructs a P2PKH script from a given PubKeyHash

#### Parameters

##### addr

[`Ripemd160`](../type-aliases/Ripemd160.md)

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString` representing the P2PKH script

***

### byteStringToSatoshis()

> `static` **byteStringToSatoshis**(`bs`): [`UInt64`](../type-aliases/UInt64.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:154](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L154)

convert a `ByteString` to a `UInt64` number

#### Parameters

##### bs

[`ByteString`](../type-aliases/ByteString.md)

the satoshi amount

#### Returns

[`UInt64`](../type-aliases/UInt64.md)

a `UInt64`

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

### mergeInput()

> `static` **mergeInput**(`txInput`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:78](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L78)

Merge tx input into a ByteString

#### Parameters

##### txInput

[`TxIn`](../type-aliases/TxIn.md)

tx input, must be a segwit input

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

serialized tx input

***

### satoshisToByteString()

> `static` **satoshisToByteString**(`n`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts:144](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txUtils.ts#L144)

convert a `UInt64` number to 8 bytes in little-end order.

#### Parameters

##### n

[`UInt64`](../type-aliases/UInt64.md)

the satoshi amount

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

a `ByteString`
