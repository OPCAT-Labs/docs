[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / MempoolProvider

# Class: MempoolProvider

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:14](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L14)

The MempoolProvider is backed by [Mempool][https://opcatlabs.io](https://opcatlabs.io)

## Implements

- [`ChainProvider`](../interfaces/ChainProvider.md)
- [`UtxoProvider`](../interfaces/UtxoProvider.md)

## Constructors

### new MempoolProvider()

> **new MempoolProvider**(`network`): [`MempoolProvider`](MempoolProvider.md)

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:20](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L20)

#### Parameters

##### network

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

#### Returns

[`MempoolProvider`](MempoolProvider.md)

## Properties

### network

> `readonly` **network**: [`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:20](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L20)

## Methods

### addNewUTXO()

> **addNewUTXO**(`utxo`): `void`

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:90](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L90)

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

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:195](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L195)

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

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:112](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L112)

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

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:94](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L94)

Query current network fee

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getFeeRate`](../interfaces/ChainProvider.md#getfeerate)

***

### getNetwork()

> **getNetwork**(): `Promise`\<[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)\>

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:22](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L22)

Get the current network the provider is connected to.

#### Returns

`Promise`\<[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)\>

A promise which resolves to the current network identifier.

#### Implementation of

[`ChainProvider`](../interfaces/ChainProvider.md).[`getNetwork`](../interfaces/ChainProvider.md#getnetwork)

***

### getRawTransaction()

> **getRawTransaction**(`txId`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:204](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L204)

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

> **getUtxos**(`addressOrScript`, `_options`?): `Promise`\<[`UTXO`](../interfaces/UTXO.md)[]\>

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:26](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L26)

Get a list of the UTXOs.

#### Parameters

##### addressOrScript

`string`

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

Defined in: [packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts:83](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/providers/mempoolProvider.ts#L83)

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
