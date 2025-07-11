[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / call

# Function: call()

> **call**\<`Contract`\>(`signer`, `provider`, `contract`, `contractCall`, `options`?): `Promise`\<[`ExtPsbt`](../classes/ExtPsbt.md)\>

Defined in: [packages/scrypt-ts-opcat/src/features/call.ts:53](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/features/call.ts#L53)

Calls a smart contract method and broadcasts the transaction.

## Type Parameters

• **Contract** *extends* [`SmartContract`](../classes/SmartContract.md)\<`StructObject`\>

## Parameters

### signer

[`Signer`](../interfaces/Signer.md)

The signer to sign the transaction

### provider

[`UtxoProvider`](../interfaces/UtxoProvider.md) & [`ChainProvider`](../interfaces/ChainProvider.md)

The provider to interact with the blockchain

### contract

`Contract`

The smart contract instance to call

### contractCall

[`ContractCall`](../type-aliases/ContractCall.md)\<`Contract`\>

The contract method call details

### options?

`CallOptions`

Optional call configuration (fee rate, change address, etc.)

## Returns

`Promise`\<[`ExtPsbt`](../classes/ExtPsbt.md)\>

A promise resolving to the signed PSBT (Partially Signed Bitcoin Transaction)

## Remarks

- Automatically handles UTXO selection and change calculation
- Supports contract outputs if specified in options
- Can include backtrace information if enabled
- Broadcasts the transaction by default (can be disabled with unfinalize option)
