[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / UtxoProvider

# Interface: UtxoProvider

Defined in: [packages/scrypt-ts-opcat/src/providers/utxoProvider.ts:23](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/utxoProvider.ts#L23)

a Provider used to query UTXO related to the address

## Methods

### addNewUTXO()

> **addNewUTXO**(`utxo`): `void`

Defined in: [packages/scrypt-ts-opcat/src/providers/utxoProvider.ts:42](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/utxoProvider.ts#L42)

Add a UTXO to the provider

#### Parameters

##### utxo

[`UTXO`](UTXO.md)

#### Returns

`void`

***

### getUtxos()

> **getUtxos**(`address`, `options`?): `Promise`\<[`ExtUtxo`](../type-aliases/ExtUtxo.md)[]\>

Defined in: [packages/scrypt-ts-opcat/src/providers/utxoProvider.ts:30](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/utxoProvider.ts#L30)

Get a list of the UTXOs.

#### Parameters

##### address

`string`

The address of the returned UTXOs belongs to.

##### options?

[`UtxoQueryOptions`](UtxoQueryOptions.md)

The optional query conditions, see details in `UtxoQueryOptions`.

#### Returns

`Promise`\<[`ExtUtxo`](../type-aliases/ExtUtxo.md)[]\>

A promise which resolves to a list of UTXO for the query options.

***

### markSpent()

> **markSpent**(`txId`, `vout`): `void`

Defined in: [packages/scrypt-ts-opcat/src/providers/utxoProvider.ts:36](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/providers/utxoProvider.ts#L36)

Mark an outpoint as spent

#### Parameters

##### txId

`string`

##### vout

`number`

#### Returns

`void`
