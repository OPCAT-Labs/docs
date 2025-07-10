[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / DummyProvider

# Class: DummyProvider

Defined in: [packages/scrypt-ts-opcat/src/providers/dummyProvider.ts:11](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/dummyProvider.ts#L11)

A DummyProvider is build for test purpose only, it always returns a dummy utxo for `getUtxos` request.

## Implements

- [`ChainProvider`](../interfaces/ChainProvider.md)
- [`UtxoProvider`](../interfaces/UtxoProvider.md)

## Constructors

### new DummyProvider()

> **new DummyProvider**(`network`): [`DummyProvider`](DummyProvider.md)

Defined in: [packages/scrypt-ts-opcat/src/providers/dummyProvider.ts:17](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/dummyProvider.ts#L17)

#### Parameters

##### network

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md) = `'opcat-mainnet'`

#### Returns

[`DummyProvider`](DummyProvider.md)

## Methods

### addNewUTXO()

> **addNewUTXO**(`utxo`): `void`

Defined in: [packages/scrypt-ts-opcat/src/providers/dummyProvider.ts:63](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/dummyProvider.ts#L63)

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

Defined in: [packages/scrypt-ts-opcat/src/providers/dummyProvider.ts:73](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/dummyProvider.ts#L73)

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

> **getConfirmations**(`_txId`): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/dummyProvider.ts:70](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/dummyProvider.ts#L70)

Query a transaction confirmation

#### Parameters

##### \_txId

`string`

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getConfirmations`](../interfaces/ChainProvider.md#getconfirmations)

***

### getFeeRate()

> **getFeeRate**(): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/dummyProvider.ts:67](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/dummyProvider.ts#L67)

Query current network fee

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getFeeRate`](../interfaces/ChainProvider.md#getfeerate)

***

### getNetwork()

> **getNetwork**(): `Promise`\<[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)\>

Defined in: [packages/scrypt-ts-opcat/src/providers/dummyProvider.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/dummyProvider.ts#L19)

Get the current network the provider is connected to.

#### Returns

`Promise`\<[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)\>

A promise which resolves to the current network identifier.

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getNetwork`](../interfaces/ChainProvider.md#getnetwork)

***

### getRawTransaction()

> **getRawTransaction**(`txId`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/dummyProvider.ts:79](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/dummyProvider.ts#L79)

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

Defined in: [packages/scrypt-ts-opcat/src/providers/dummyProvider.ts:22](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/dummyProvider.ts#L22)

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

Defined in: [packages/scrypt-ts-opcat/src/providers/dummyProvider.ts:56](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/providers/dummyProvider.ts#L56)

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
