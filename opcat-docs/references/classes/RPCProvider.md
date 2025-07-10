[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / RPCProvider

# Class: RPCProvider

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:12](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L12)

The RPCProvider is backed by opcat RPC

## Implements

- [`ChainProvider`](../interfaces/ChainProvider.md)
- [`UtxoProvider`](../interfaces/UtxoProvider.md)

## Constructors

### new RPCProvider()

> **new RPCProvider**(`network`, `url`, `walletName`, `username`, `password`): [`RPCProvider`](RPCProvider.md)

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:18](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L18)

#### Parameters

##### network

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

##### url

`string`

##### walletName

`string`

##### username

`string`

##### password

`string`

#### Returns

[`RPCProvider`](RPCProvider.md)

## Properties

### network

> `readonly` **network**: [`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L19)

***

### password

> `readonly` **password**: `string`

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:23](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L23)

***

### url

> `readonly` **url**: `string`

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:20](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L20)

***

### username

> `readonly` **username**: `string`

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:22](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L22)

***

### walletName

> `readonly` **walletName**: `string`

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:21](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L21)

## Methods

### addNewUTXO()

> **addNewUTXO**(`utxo`): `void`

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:300](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L300)

Add a UTXO to the provider

#### Parameters

##### utxo

[`UTXO`](../interfaces/UTXO.md)

#### Returns

`void`

#### Implementation of

[`UtxoProvider`](../interfaces/UtxoProvider.md).[`addNewUTXO`](../interfaces/UtxoProvider.md#addnewutxo)

***

### broadcast()

> **broadcast**(`txHex`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:176](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L176)

Send a raw transaction hex string.

#### Parameters

##### txHex

`string`

#### Returns

`Promise`\<`string`\>

A promise which resolves to the hash of the transaction that has been sent.

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`broadcast`](../interfaces/ChainProvider.md#broadcast)

***

### getConfirmations()

> **getConfirmations**(`txId`): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:81](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L81)

Query a transaction confirmation

#### Parameters

##### txId

`string`

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getConfirmations`](../interfaces/ChainProvider.md#getconfirmations)

***

### getFeeRate()

> **getFeeRate**(): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:30](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L30)

Query current network fee

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getFeeRate`](../interfaces/ChainProvider.md#getfeerate)

***

### getNetwork()

> **getNetwork**(): `Promise`\<[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)\>

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:26](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L26)

Get the current network the provider is connected to.

#### Returns

`Promise`\<[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)\>

A promise which resolves to the current network identifier.

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getNetwork`](../interfaces/ChainProvider.md#getnetwork)

***

### getRawTransaction()

> **getRawTransaction**(`txId`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:185](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L185)

Get a transaction raw hex from the network.

#### Parameters

##### txId

`string`

#### Returns

`Promise`\<`string`\>

The query result with the transaction raw hex.

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getRawTransaction`](../interfaces/ChainProvider.md#getrawtransaction)

***

### getRpcPassword()

> `protected` **getRpcPassword**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:74](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L74)

#### Returns

`string`

***

### getRpcUrl()

> `protected` **getRpcUrl**(`walletName`): `string`

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:77](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L77)

#### Parameters

##### walletName

`string`

#### Returns

`string`

***

### getRpcUser()

> `protected` **getRpcUser**(): `string`

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:71](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L71)

#### Returns

`string`

***

### getUtxos()

> **getUtxos**(`address`, `_options`?): `Promise`\<[`UTXO`](../interfaces/UTXO.md)[]\>

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:235](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L235)

Get a list of the UTXOs.

#### Parameters

##### address

`string`

The address of the returned UTXOs belongs to.

##### \_options?

[`UtxoQueryOptions`](../interfaces/UtxoQueryOptions.md)

#### Returns

`Promise`\<[`UTXO`](../interfaces/UTXO.md)[]\>

A promise which resolves to a list of UTXO for the query options.

#### Implementation of

[`UtxoProvider`](../interfaces/UtxoProvider.md).[`getUtxos`](../interfaces/UtxoProvider.md#getutxos)

***

### markSpent()

> **markSpent**(`txId`, `vout`): `void`

Defined in: [packages/scrypt-ts-opcat/src/providers/rpcProvider.ts:293](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/rpcProvider.ts#L293)

Mark an outpoint as spent

#### Parameters

##### txId

`string`

##### vout

`number`

#### Returns

`void`

#### Implementation of

[`UtxoProvider`](../interfaces/UtxoProvider.md).[`markSpent`](../interfaces/UtxoProvider.md#markspent)
