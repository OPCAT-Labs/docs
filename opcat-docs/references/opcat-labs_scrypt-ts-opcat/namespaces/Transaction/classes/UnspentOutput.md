[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [Transaction](../README.md) / UnspentOutput

# Class: UnspentOutput

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/unspentoutput.d.cts:18

Represents an unspent output information: its script, associated amount and address,
transaction id and output index.

## Param

## Param

the previous transaction id

## Param

alias for `txid`

## Param

the index in the transaction

## Param

alias for `vout`

## Param

the script that must be resolved to release the funds

## Param

alias for `scriptPubKey`

## Param

amount of bitcoins associated

## Param

alias for `amount`, but expressed in satoshis (1 OPCAT = 1e8 satoshis)

## Param

the associated address to the script, if provided

## Constructors

### new UnspentOutput()

> **new UnspentOutput**(`data`): [`UnspentOutput`](UnspentOutput.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/unspentoutput.d.cts:46

Represents an unspent output information: its script, associated amount and address,
transaction id and output index.

#### Parameters

##### data

###### address?

`string` \| [`Address`](../../../classes/Address.md)

the associated address to the script, if provided

###### amount

`number`

amount of bitcoins associated

###### outputIndex?

`number`

alias for `vout`

###### satoshis?

`number`

alias for `amount`, but expressed in satoshis (1 OPCAT = 1e8 satoshis)

###### script?

`string` \| [`Script`](../../../classes/Script.md)

alias for `scriptPubKey`

###### scriptPubKey

`string` \| [`Script`](../../../classes/Script.md)

the script that must be resolved to release the funds

###### txid

`string`

the previous transaction id

###### txId?

`string`

alias for `txid`

###### vout

`number`

the index in the transaction

#### Returns

[`UnspentOutput`](UnspentOutput.md)

## Properties

### toObject()

> **toObject**: () => `object`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/unspentoutput.d.cts:71

Returns a plain object (no prototype or methods) with the associated info for this output

#### Returns

`object`

## Methods

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/unspentoutput.d.cts:61

Provide an informative output when displaying this object in the console

#### Returns

`string`

string

***

### toJSON()

> **toJSON**(): `object`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/unspentoutput.d.cts:72

#### Returns

`object`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/unspentoutput.d.cts:66

String representation: just "txid:index"

#### Returns

`string`

string
