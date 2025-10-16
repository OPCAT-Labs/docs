[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / singleSendNft

# Function: singleSendNft()

> **singleSendNft**(`signer`, `provider`, `minterScriptHash`, `inputNftUtxos`, `nftReceivers`, `feeRate`): `Promise`\<\{ `guardPsbt`: `ExtPsbt`; `guardTxId`: `string`; `newNftUtxos`: `UTXO`[]; `sendPsbt`: `ExtPsbt`; `sendTxId`: `string`; \}\>

Defined in: [packages/cat-sdk/src/features/cat721/send/singleSend.ts:19](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat721/send/singleSend.ts#L19)

Sends a CAT721 NFT using `CAT721Guard` contract

## Parameters

### signer

`Signer`

the signer for the sender

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### minterScriptHash

`ByteString`

the script hash of the minter contract

### inputNftUtxos

`UTXO`[]

the UTXOs of the input tokens

### nftReceivers

`ByteString`[]

the receivers of the tokens

### feeRate

`number`

the fee rate for the transaction

## Returns

`Promise`\<\{ `guardPsbt`: `ExtPsbt`; `guardTxId`: `string`; `newNftUtxos`: `UTXO`[]; `sendPsbt`: `ExtPsbt`; `sendTxId`: `string`; \}\>

the PSBTs for the guard and send transactions, the UTXOs of the new tokens
