[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / ContextUtils

# Class: ContextUtils

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:25](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L25)

Utility class for Bitcoin smart contract context operations.
Provides methods for:
- ECDSA signature generation and verification
- Transaction preimage serialization and validation
- Prevouts and spent data verification
- Lock time checking
- Various cryptographic and serialization utilities

Contains precomputed cryptographic constants for optimized signing operations.
All methods are static and can be used without class instantiation.

## Onchain

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Constructors

### new ContextUtils()

> **new ContextUtils**(...`args`): [`ContextUtils`](ContextUtils.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L32)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`ContextUtils`](ContextUtils.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`constructor`](SmartContractLib.md#constructors)

## Properties

### args

> **args**: `any`[] = `[]`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:31](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L31)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`args`](SmartContractLib.md#args-1)

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:16](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L16)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`artifact`](SmartContractLib.md#artifact)

***

### invK

> `readonly` `static` **invK**: `bigint` = `0xc8ffdbaa05d93aa4ede79ec58f06a72562048b775a3507c2bf44bde4f007c40an`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:35](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L35)

***

### privKey

> `readonly` `static` **privKey**: [`PrivKey`](../type-aliases/PrivKey.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:30](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L30)

***

### pubKey

> `readonly` `static` **pubKey**: [`PubKey`](../type-aliases/PubKey.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L32)

***

### r

> `readonly` `static` **r**: `bigint` = `0x1008ce7480da41702918d1ec8e6849ba32b4d65b1e40dc669c31a1e6306b266cn`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:38](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L38)

***

### rBigEndian

> `readonly` `static` **rBigEndian**: [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:41](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L41)

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L17)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`stateType`](SmartContractLib.md#statetype)

## Methods

### checknLockTime()

> `static` **checknLockTime**(`shPreimage`, `nlockTime`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:316](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L316)

Checks if the lock time conditions are met for a given preimage and lock time.

#### Parameters

##### shPreimage

[`SHPreimage`](../type-aliases/SHPreimage.md)

The preimage containing lock time and sequence values.

##### nlockTime

`UInt32`

The required minimum lock time to validate against.

#### Returns

`boolean`

True if the lock time conditions are satisfied, false otherwise.

***

### checkPrevouts()

> `static` **checkPrevouts**(`prevouts`, `t_hashPrevouts`, `t_inputIndex`, `t_inputCount`): [`Outpoint`](../type-aliases/Outpoint.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:199](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L199)

Verify that the prevouts context passed in by the user is authentic

#### Parameters

##### prevouts

[`ByteString`](../type-aliases/ByteString.md)

prevouts context passed in by the user that need to be verified

##### t\_hashPrevouts

[`ByteString`](../type-aliases/ByteString.md)

hashPrevouts in preimage which is trustable

##### t\_inputIndex

`UInt32`

the index of the input, which is trustable

##### t\_inputCount

[`Int32`](../type-aliases/Int32.md)

#### Returns

[`Outpoint`](../type-aliases/Outpoint.md)

the number of inputs, which is trustable

***

### checkSHPreimage()

> `static` **checkSHPreimage**(`shPreimage`, `sigHashType`): [`Sig`](../type-aliases/Sig.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:128](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L128)

Checks and signs a SHPreimage by serializing it, hashing, and creating a signature.

#### Parameters

##### shPreimage

[`SHPreimage`](../type-aliases/SHPreimage.md)

The SHPreimage to be checked and signed.

##### sigHashType

[`ByteString`](../type-aliases/ByteString.md)

The signature hash type to use for signing.

#### Returns

[`Sig`](../type-aliases/Sig.md)

The generated signature for the provided SHPreimage.

***

### checkSpentAmounts()

> `static` **checkSpentAmounts**(`spentAmounts`, `hashSpentAmounts`): [`Int32`](../type-aliases/Int32.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:240](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L240)

Check if the spent amounts array passed in matches the hashSpentAmounts

#### Parameters

##### spentAmounts

[`ByteString`](../type-aliases/ByteString.md)

array of spent amounts passed in that need to be verified

##### hashSpentAmounts

[`ByteString`](../type-aliases/ByteString.md)

the hash of the merged spent amounts, which comes from preimage and is trustable

#### Returns

[`Int32`](../type-aliases/Int32.md)

***

### checkSpentDataHashes()

> `static` **checkSpentDataHashes**(`spentDataHashes`, `hashSpentDataHashes`, `inputCount`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:257](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L257)

Verifies the integrity of spent data hashes against the provided transaction hash and input count.

#### Parameters

##### spentDataHashes

[`ByteString`](../type-aliases/ByteString.md)

The hashes of spent data to be verified

##### hashSpentDataHashes

[`ByteString`](../type-aliases/ByteString.md)

The expected hash of all spent data hashes

##### inputCount

`bigint`

The expected number of inputs (must match the length of spentDataHashes)

#### Returns

`void`

#### Throws

Throws an error if hash verification fails or if input count doesn't match

***

### checkSpentScripts()

> `static` **checkSpentScripts**(`spentScriptHashes`, `t_hashSpentScripts`, `t_inputCount`): `void`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:224](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L224)

Check if the spent scripts array passed in matches the shaSpentScripts

#### Parameters

##### spentScriptHashes

[`ByteString`](../type-aliases/ByteString.md)

array of spent scripts passed in that need to be verified

##### t\_hashSpentScripts

[`ByteString`](../type-aliases/ByteString.md)

the hash of the merged spent scripts, which comes from preimage and is trustable

##### t\_inputCount

`bigint`

must be trustable, the number of inputs

#### Returns

`void`

***

### fromBEUnsigned()

> `static` **fromBEUnsigned**(`b`): [`Int32`](../type-aliases/Int32.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:113](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L113)

Converts a big-endian unsigned byte string to a signed integer.

#### Parameters

##### b

[`ByteString`](../type-aliases/ByteString.md)

The input byte string in big-endian format.

#### Returns

[`Int32`](../type-aliases/Int32.md)

The converted Int32 value.

***

### getSpentAmount()

> `static` **getSpentAmount**(`spentAmounts`, `inputIndex`): [`Int32`](../type-aliases/Int32.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:288](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L288)

Retrieves the spent amount for a specific input index from the given spent amounts buffer.

#### Parameters

##### spentAmounts

[`ByteString`](../type-aliases/ByteString.md)

Buffer containing all spent amounts in little-endian format

##### inputIndex

[`Int32`](../type-aliases/Int32.md)

Index of the input to retrieve the spent amount for

#### Returns

[`Int32`](../type-aliases/Int32.md)

The spent amount for the specified input index as a 32-bit integer

***

### getSpentDataHash()

> `static` **getSpentDataHash**(`spentDataHashes`, `inputIndex`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:302](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L302)

Retrieves the data hash for a specific input index from spent data hashes.

#### Parameters

##### spentDataHashes

[`ByteString`](../type-aliases/ByteString.md)

The collection of spent data hashes

##### inputIndex

[`Int32`](../type-aliases/Int32.md)

The index of the input to retrieve

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

The 32-byte data hash corresponding to the specified input index

***

### getSpentScriptHash()

> `static` **getSpentScriptHash**(`spentScriptHashes`, `inputIndex`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:274](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L274)

Retrieves the spent script hash for a specific input index from the given spent scripts buffer.

#### Parameters

##### spentScriptHashes

[`ByteString`](../type-aliases/ByteString.md)

Buffer containing all spent script hashes

##### inputIndex

[`Int32`](../type-aliases/Int32.md)

Index of the input to retrieve the spent script hash for

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

The spent script hash for the specified input index as a 32-byte string

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L19)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

*typeof* [`SmartContractLib`](SmartContractLib.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`loadArtifact`](SmartContractLib.md#loadartifact)

***

### normalize()

> `static` **normalize**(`k`, `modulus`): `bigint`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:51](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L51)

Normalizes a value to be within the range [0, modulus) by taking modulo and ensuring positivity.

#### Parameters

##### k

`bigint`

The value to normalize

##### modulus

`bigint`

The modulus value

#### Returns

`bigint`

The normalized value (k mod modulus) guaranteed to be non-negative

***

### serializeSHPreimage()

> `static` **serializeSHPreimage**(`shPreimage`): [`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:151](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L151)

Serializes a SHPreimage object into a SigHashPreimage.
Validates all fields of the input SHPreimage meet required specifications before serialization.

#### Parameters

##### shPreimage

[`SHPreimage`](../type-aliases/SHPreimage.md)

The SHPreimage object containing transaction preimage data

#### Returns

[`SigHashPreimage`](../type-aliases/SigHashPreimage.md)

A SigHashPreimage constructed from the validated and concatenated fields

#### Throws

If any field validation fails (invalid length, negative value, or unsupported sigHashType)

***

### sign()

> `static` **sign**(`h`, `privKey`, `inverseK`, `r`, `rBigEndian`, `sigHashType`): [`Sig`](../type-aliases/Sig.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts:73](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/contextUtils.ts#L73)

Generates a DER-encoded ECDSA signature from given parameters.

#### Parameters

##### h

`bigint`

The message hash to sign (bigint)

##### privKey

[`PrivKey`](../type-aliases/PrivKey.md)

The private key to sign with (PrivKey)

##### inverseK

`bigint`

The inverse of the nonce value (bigint)

##### r

`bigint`

The r component of the signature (bigint)

##### rBigEndian

[`ByteString`](../type-aliases/ByteString.md)

The r component in big-endian byte format (ByteString)

##### sigHashType

[`ByteString`](../type-aliases/ByteString.md)

The signature hash type (ByteString)

#### Returns

[`Sig`](../type-aliases/Sig.md)

A DER-encoded signature (Sig)

#### Remarks

- Normalizes the s value to be in the lower range of the curve order
- Conforms to strict DER encoding rules
- Handles endianness conversion for signature components
