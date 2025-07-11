[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / MempoolProvider

# Class: MempoolProvider

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:12](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L12)

The MempoolProvider is backed by [Mempool][https://opcatlabs.io](https://opcatlabs.io)

## Implements

- [`ChainProvider`](../interfaces/ChainProvider.md)
- [`UtxoProvider`](../interfaces/UtxoProvider.md)

## Constructors

### new MempoolProvider()

> **new MempoolProvider**(`network`): [`MempoolProvider`](MempoolProvider.md)

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:18](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L18)

#### Parameters

##### network

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

#### Returns

[`MempoolProvider`](MempoolProvider.md)

## Properties

### network

> `readonly` **network**: [`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:18](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L18)

## Methods

### addNewUTXO()

> **addNewUTXO**(`utxo`): `void`

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:81](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L81)

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

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:186](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L186)

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

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:103](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L103)

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

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:85](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L85)

Query current network fee

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getFeeRate`](../interfaces/ChainProvider.md#getfeerate)

***

### getNetwork()

> **getNetwork**(): `Promise`\<[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)\>

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:20](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L20)

Get the current network the provider is connected to.

#### Returns

`Promise`\<[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)\>

A promise which resolves to the current network identifier.

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getNetwork`](../interfaces/ChainProvider.md#getnetwork)

***

### getRawTransaction()

> **getRawTransaction**(`txId`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:195](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L195)

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

### getUtxos()

> **getUtxos**(`address`, `_options`?): `Promise`\<[`UTXO`](../interfaces/UTXO.md)[]\>

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:24](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L24)

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

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:74](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L74)

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
