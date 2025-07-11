[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / deployGenesis

# Function: deployGenesis()

> **deployGenesis**\<`Contract`\>(`signer`, `provider`, `createContract`, `satoshis`): `Promise`\<\{ `contract`: `Contract`; `psbt`: [`ExtPsbt`](../classes/ExtPsbt.md); \}\>

Defined in: [packages/scrypt-ts-opcat/src/features/deployGenesis.ts:26](https://github.com/OPCAT-Labs/ts-tools/blob/2cea47af983eceafde930347ac310f78dee140a3/packages/scrypt-ts-opcat/src/features/deployGenesis.ts#L26)

Deploys a smart contract, which can be traced back to genesis, to the blockchain

## Type Parameters

• **Contract** *extends* [`SmartContract`](../classes/SmartContract.md)\<`StructObject`\>

## Parameters

### signer

[`Signer`](../interfaces/Signer.md)

The signer used to sign the transaction

### provider

[`UtxoProvider`](../interfaces/UtxoProvider.md) & [`ChainProvider`](../interfaces/ChainProvider.md)

The provider for chain and UTXO data

### createContract

(`genesisOutpoint`) => `Contract`

Factory function to create the contract instance with genesis outpoint

### satoshis

`number` = `1`

Amount of satoshis to lock in the contract (default: 1)

## Returns

`Promise`\<\{ `contract`: `Contract`; `psbt`: [`ExtPsbt`](../classes/ExtPsbt.md); \}\>

Promise resolving to the PSBT and deployed contract instance

## Remarks

This function:
1. Creates a genesis transaction from the first available UTXO
2. Builds and signs the contract deployment PSBT
3. Broadcasts the transaction and updates UTXO state
4. Returns the finalized PSBT and contract instance
