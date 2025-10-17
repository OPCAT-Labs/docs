[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / TransactionSignature

# Class: TransactionSignature

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/signature.d.cts:9

## Desc

Wrapper around Signature with fields related to signing a transaction specifically

## Param

## Constructors

### new TransactionSignature()

> **new TransactionSignature**(`arg`): [`TransactionSignature`](TransactionSignature.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/signature.d.cts:18

#### Parameters

##### arg

`any`

#### Returns

[`TransactionSignature`](TransactionSignature.md)

#### Desc

Wrapper around Signature with fields related to signing a transaction specifically

## Properties

### inputIndex

> **inputIndex**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/signature.d.cts:23

***

### outputIndex

> **outputIndex**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/signature.d.cts:22

***

### prevTxId

> **prevTxId**: `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/signature.d.cts:21

***

### publicKey

> **publicKey**: [`PublicKey`](PublicKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/signature.d.cts:20

***

### signature

> **signature**: [`Signature`](../namespaces/crypto/classes/Signature.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/signature.d.cts:24

***

### sigtype

> **sigtype**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/signature.d.cts:25

***

### toObject()

> **toObject**: () => `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/signature.d.cts:31

Serializes a transaction to a plain JS object

#### Returns

`any`

## Methods

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/signature.d.cts:32

#### Returns

`any`
