[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / deploy

# Function: deploy()

> **deploy**(`signer`, `provider`, `contract`, `satoshis`): `Promise`\<[`ExtPsbt`](../classes/ExtPsbt.md)\>

Defined in: [packages/scrypt-ts-opcat/src/features/deploy.ts:24](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/features/deploy.ts#L24)

Deploys a smart contract to the blockchain.

## Parameters

### signer

[`Signer`](../interfaces/Signer.md)

The signer used to sign the transaction

### provider

[`UtxoProvider`](../interfaces/UtxoProvider.md) & [`ChainProvider`](../interfaces/ChainProvider.md)

The provider for UTXO and chain operations

### contract

[`SmartContract`](../classes/SmartContract.md)\<`StructObject`\>

The smart contract instance to deploy

### satoshis

`number` = `1`

The amount of satoshis to lock in the contract (default: 1)

## Returns

`Promise`\<[`ExtPsbt`](../classes/ExtPsbt.md)\>

The finalized PSBT containing the deployment transaction

## Remarks

This function handles the complete deployment flow:
1. Collects UTXOs from the signer's address
2. Creates and signs a PSBT with contract deployment output
3. Broadcasts the transaction
4. Manages UTXO updates (spent UTXOs and change)
