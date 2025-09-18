[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / ChainProvider

# Interface: ChainProvider

Defined in: [packages/scrypt-ts-opcat/src/providers/chainProvider.ts:7](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/providers/chainProvider.ts#L7)

a provider for interacting with the blockchain

## Methods

### broadcast()

> **broadcast**(`txHex`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/chainProvider.ts:13](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/providers/chainProvider.ts#L13)

Send a raw transaction hex string.

#### Parameters

##### txHex

`string`

#### Returns

`Promise`\<`string`\>

A promise which resolves to the hash of the transaction that has been sent.

***

### getConfirmations()

> **getConfirmations**(`txId`): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/chainProvider.ts:24](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/providers/chainProvider.ts#L24)

Query a transaction confirmation

#### Parameters

##### txId

`string`

#### Returns

`Promise`\<`number`\>

***

### getFeeRate()

> **getFeeRate**(): `Promise`\<`number`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/chainProvider.ts:29](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/providers/chainProvider.ts#L29)

Query current network fee

#### Returns

`Promise`\<`number`\>

***

### getNetwork()

> **getNetwork**(): `Promise`\<[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)\>

Defined in: [packages/scrypt-ts-opcat/src/providers/chainProvider.ts:36](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/providers/chainProvider.ts#L36)

Get the current network the provider is connected to.

#### Returns

`Promise`\<[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)\>

A promise which resolves to the current network identifier.

***

### getRawTransaction()

> **getRawTransaction**(`txId`): `Promise`\<`string`\>

Defined in: [packages/scrypt-ts-opcat/src/providers/chainProvider.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/providers/chainProvider.ts#L19)

Get a transaction raw hex from the network.

#### Parameters

##### txId

`string`

#### Returns

`Promise`\<`string`\>

The query result with the transaction raw hex.
