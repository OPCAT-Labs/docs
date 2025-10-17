[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / singleSendNftStep3

# Function: singleSendNftStep3()

> **singleSendNftStep3**(`provider`, `finalizedGuardPsbt`, `finalizedSendPsbt`, `outputNftStates`): `Promise`\<\{ `newFeeUtxo`: `UTXO`; `newNftUtxos`: `ExtUtxo`[]; \}\>

Defined in: [packages/cat-sdk/src/features/cat721/send/singleSend.ts:267](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat721/send/singleSend.ts#L267)

Helper function for singleSendNft, broadcast the transactions and add the new fee UTXO

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

### outputNftStates

[`CAT721State`](../type-aliases/CAT721State.md)[]

the output token states

## Returns

`Promise`\<\{ `newFeeUtxo`: `UTXO`; `newNftUtxos`: `ExtUtxo`[]; \}\>

the new NFT UTXOs and the new fee UTXO
