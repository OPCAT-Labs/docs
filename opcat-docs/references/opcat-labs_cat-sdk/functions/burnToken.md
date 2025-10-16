[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / burnToken

# Function: burnToken()

> **burnToken**(`signer`, `provider`, `minterScriptHash`, `inputTokenUtxos`, `feeRate`): `Promise`\<\{ `burnPsbt`: `ExtPsbt`; `burnTxid`: `string`; `guardPsbt`: `ExtPsbt`; `guardTxid`: `string`; \}\>

Defined in: [packages/cat-sdk/src/features/cat20/burn/burn.ts:43](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat20/burn/burn.ts#L43)

Burns a CAT20 token using `CAT20Guard` contract

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

### inputTokenUtxos

`UTXO`[]

the UTXOs of the input tokens

### feeRate

`number`

the fee rate for the transaction

## Returns

`Promise`\<\{ `burnPsbt`: `ExtPsbt`; `burnTxid`: `string`; `guardPsbt`: `ExtPsbt`; `guardTxid`: `string`; \}\>

the PSBTs for the guard and burn transactions
