[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / incinerate

# Function: incinerate()

> **incinerate**(`feeSigner`, `provider`, `minterScriptHash`, `tokenUtxos`, `feeRate`): `Promise`\<\{ `burnPsbt`: `ExtPsbt`; `guardPsbt`: `ExtPsbt`; \}\>

Defined in: [packages/cat-sdk/src/features/cat20/incinerate.ts:45](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat20/incinerate.ts#L45)

Incinerates a CAT20 token using `CAT20Incinerator` contract

## Parameters

### feeSigner

`Signer`

the signer for the fee

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### minterScriptHash

`ByteString`

the script hash of the minter contract

### tokenUtxos

`UTXO`[]

the UTXOs of the input tokens

### feeRate

`number`

the fee rate for the transaction

## Returns

`Promise`\<\{ `burnPsbt`: `ExtPsbt`; `guardPsbt`: `ExtPsbt`; \}\>

the PSBTs for the guard and burn transactions
