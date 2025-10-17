[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / OwnerUtils

# Class: OwnerUtils

Defined in: [packages/cat-sdk/src/contracts/utils/ownerUtils.ts:14](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/utils/ownerUtils.ts#L14)

The owner utilities for the CAT contracts

## Onchain

## Extends

- `SmartContractLib`

## Constructors

### new OwnerUtils()

> **new OwnerUtils**(...`args`): [`OwnerUtils`](OwnerUtils.md)

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContractLib.d.ts:18

#### Parameters

##### args

...`SupportedParamType`[]

#### Returns

[`OwnerUtils`](OwnerUtils.md)

#### Inherited from

`SmartContractLib.constructor`

## Properties

### args

> **args**: `any`[]

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContractLib.d.ts:17

#### Inherited from

`SmartContractLib.args`

***

### artifact

> `static` **artifact**: `Artifact`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContractLib.d.ts:14

#### Inherited from

`SmartContractLib.artifact`

***

### stateType?

> `static` `optional` **stateType**: `string`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContractLib.d.ts:15

#### Inherited from

`SmartContractLib.stateType`

## Methods

### checkOwnerAddr()

> `static` **checkOwnerAddr**(`ownerAddr`): `void`

Defined in: [packages/cat-sdk/src/contracts/utils/ownerUtils.ts:42](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/utils/ownerUtils.ts#L42)

#### Parameters

##### ownerAddr

`ByteString`

#### Returns

`void`

***

### checkPubKey()

> `static` **checkPubKey**(`pubKey`): `void`

Defined in: [packages/cat-sdk/src/contracts/utils/ownerUtils.ts:37](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/utils/ownerUtils.ts#L37)

#### Parameters

##### pubKey

`ByteString`

#### Returns

`void`

***

### checkUserOwner()

> `static` **checkUserOwner**(`pubKey`, `ownerAddr`): `void`

Defined in: [packages/cat-sdk/src/contracts/utils/ownerUtils.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/utils/ownerUtils.ts#L32)

Check if the user public key matches the owner's address

#### Parameters

##### pubKey

`ByteString`

user public key

##### ownerAddr

`ByteString`

owner address

#### Returns

`void`

***

### loadArtifact()

> `static` **loadArtifact**(`artifact`): *typeof* `SmartContractLib`

Defined in: node\_modules/@opcat-labs/scrypt-ts-opcat/dist/types/smart-contract/smartContractLib.d.ts:16

#### Parameters

##### artifact

`Artifact`

#### Returns

*typeof* `SmartContractLib`

#### Inherited from

`SmartContractLib.loadArtifact`

***

### serialize()

> `static` **serialize**(`ownerAddr`): `ByteString`

Defined in: [packages/cat-sdk/src/contracts/utils/ownerUtils.ts:51](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/utils/ownerUtils.ts#L51)

#### Parameters

##### ownerAddr

`ByteString`

#### Returns

`ByteString`

***

### toLockingScript()

> `static` **toLockingScript**(`pubKey`): `ByteString`

Defined in: [packages/cat-sdk/src/contracts/utils/ownerUtils.ts:21](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/contracts/utils/ownerUtils.ts#L21)

Convert public key to P2PKH locking script

#### Parameters

##### pubKey

`ByteString`

user public key

#### Returns

`ByteString`

locking script
