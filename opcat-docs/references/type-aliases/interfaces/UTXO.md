[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / UTXO

# Interface: UTXO

Defined in: [packages/scrypt-ts-opcat/src/globalTypes.ts:23](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/globalTypes.ts#L23)

Represents an Unspent Transaction Output (UTXO) in a blockchain.

## Properties

### address?

> `optional` **address**: `string`

Defined in: [packages/scrypt-ts-opcat/src/globalTypes.ts:24](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/globalTypes.ts#L24)

The address associated with this UTXO (optional).

***

### data

> **data**: `string`

Defined in: [packages/scrypt-ts-opcat/src/globalTypes.ts:29](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/globalTypes.ts#L29)

Additional data associated with this UTXO.

***

### outputIndex

> **outputIndex**: `number`

Defined in: [packages/scrypt-ts-opcat/src/globalTypes.ts:26](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/globalTypes.ts#L26)

The index of this output in the transaction.

***

### satoshis

> **satoshis**: `number`

Defined in: [packages/scrypt-ts-opcat/src/globalTypes.ts:28](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/globalTypes.ts#L28)

The amount of satoshis in this UTXO.

***

### script

> **script**: `string`

Defined in: [packages/scrypt-ts-opcat/src/globalTypes.ts:27](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/globalTypes.ts#L27)

The locking script (ScriptPubKey) for this UTXO.

***

### txId

> **txId**: `string`

Defined in: [packages/scrypt-ts-opcat/src/globalTypes.ts:25](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/globalTypes.ts#L25)

The transaction ID where this UTXO was created.
