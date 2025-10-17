[**cat-sdk v1.0.3**](../README.md)

***

[cat-sdk](../README.md) / singleSendStep3

# Function: singleSendStep3()

> **singleSendStep3**(`provider`, `finalizedGuardPsbt`, `finalizedSendPsbt`, `outputTokenStates`): `Promise`\<\{ `newCAT20Utxos`: `ExtUtxo`[]; `newFeeUtxo`: `UTXO`; \}\>

Defined in: [packages/cat-sdk/src/features/cat20/send/singleSend.ts:357](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat20/send/singleSend.ts#L357)

Helper function for singleSend, broadcast the transactions and add the new fee UTXO

## Parameters

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### finalizedGuardPsbt

`ExtPsbt`

the finalized guard psbt

### finalizedSendPsbt

`ExtPsbt`

the finalized send psbt

### outputTokenStates

[`CAT20State`](../type-aliases/CAT20State.md)[]

the output token states

## Returns

`Promise`\<\{ `newCAT20Utxos`: `ExtUtxo`[]; `newFeeUtxo`: `UTXO`; \}\>

the new CAT20 UTXOs and the new fee UTXO
