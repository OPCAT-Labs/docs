[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / TxHashPreimageUtils

# Class: TxHashPreimageUtils

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txHashPreimageUtils.ts:15](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txHashPreimageUtils.ts#L15)

Utility class for working with transaction hash preimages in Bitcoin smart contracts.
Provides methods to:
- Calculate transaction hash from preimage data
- Extract individual input/output byte strings from preimage

## Extends

- [`SmartContractLib`](SmartContractLib.md)

## Constructors

### new TxHashPreimageUtils()

> **new TxHashPreimageUtils**(...`args`): [`TxHashPreimageUtils`](TxHashPreimageUtils.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L32)

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`TxHashPreimageUtils`](TxHashPreimageUtils.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`constructor`](SmartContractLib.md#constructors)

## Properties

### args

> **args**: `any`[] = `[]`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:31](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L31)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`args`](SmartContractLib.md#args-1)

***

### artifact

> `static` **artifact**: [`Artifact`](../interfaces/Artifact.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:16](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L16)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`artifact`](SmartContractLib.md#artifact)

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L17)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`stateType`](SmartContractLib.md#statetype)

## Methods

### getInputByteString()

> `static` **getInputByteString**(`txHashPreimage`, `inputIndex`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txHashPreimageUtils.ts:46](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txHashPreimageUtils.ts#L46)

Extracts the byte string of a specific input from the transaction hash preimage.

#### Parameters

##### txHashPreimage

[`TxHashPreimage`](../type-aliases/TxHashPreimage.md)

The transaction hash preimage containing input data.

##### inputIndex

`bigint`

The index of the input to extract.

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

The byte string representing the specified input.

***

### getOutputByteString()

> `static` **getOutputByteString**(`txHashPreimage`, `outputIndex`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txHashPreimageUtils.ts:57](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txHashPreimageUtils.ts#L57)

Extracts the byte string of a specific output from the transaction hash preimage.

#### Parameters

##### txHashPreimage

[`TxHashPreimage`](../type-aliases/TxHashPreimage.md)

The transaction hash preimage containing output list.

##### outputIndex

`bigint`

The index of the output to extract.

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

The byte string of the specified output.

***

### getTxHashFromTxHashPreimage()

> `static` **getTxHashFromTxHashPreimage**(`txHashPreimage`): [`ByteString`](../type-aliases/ByteString.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txHashPreimageUtils.ts:26](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/txHashPreimageUtils.ts#L26)

Computes the transaction hash from a given transaction hash preimage.
Validates the preimage structure and constructs the hash by concatenating
version, input/output counts, input/output lists, and lock time.

#### Parameters

##### txHashPreimage

[`TxHashPreimage`](../type-aliases/TxHashPreimage.md)

The transaction hash preimage containing version,
                       input/output lists, and lock time.

#### Returns

[`ByteString`](../type-aliases/ByteString.md)

The computed transaction hash as a ByteString.

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* [`SmartContractLib`](SmartContractLib.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/smartContractLib.ts#L19)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

*typeof* [`SmartContractLib`](SmartContractLib.md)

#### Inherited from

[`SmartContractLib`](SmartContractLib.md).[`loadArtifact`](SmartContractLib.md#loadartifact)
