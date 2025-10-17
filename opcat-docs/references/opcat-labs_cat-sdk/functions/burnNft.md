[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / burnNft

# Function: burnNft()

> **burnNft**(`signer`, `provider`, `minterScriptHash`, `inputNftUtxos`, `feeRate`): `Promise`\<\{ `burnPsbt`: `ExtPsbt`; `burnTxid`: `string`; `guardPsbt`: `ExtPsbt`; `guardTxid`: `string`; \}\>

Defined in: [packages/cat-sdk/src/features/cat721/burn/burn.ts:20](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat721/burn/burn.ts#L20)

Burns a CAT721 NFT using `CAT721Guard` contract

## Parameters

### signer

`Signer`

the signer for the burner

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### minterScriptHash

`ByteString`

the script hash of the minter contract

### inputNftUtxos

`UTXO`[]

the UTXOs of the input tokens

### feeRate

`number`

the fee rate for the transaction

## Returns

`Promise`\<\{ `burnPsbt`: `ExtPsbt`; `burnTxid`: `string`; `guardPsbt`: `ExtPsbt`; `guardTxid`: `string`; \}\>

the PSBTs for the guard and burn transactions
