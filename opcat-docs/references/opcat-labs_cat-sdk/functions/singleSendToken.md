[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / singleSendToken

# Function: singleSendToken()

> **singleSendToken**(`signer`, `provider`, `minterScriptHash`, `inputTokenUtxos`, `receivers`, `tokenChangeAddress`, `feeRate`, `sendChangeData`?): `Promise`\<\{ `changeTokenOutputIndex`: `number`; `guardPsbt`: `ExtPsbt`; `guardTxId`: `string`; `newCAT20Utxos`: `UTXO`[]; `sendPsbt`: `ExtPsbt`; `sendTxId`: `string`; \}\>

Defined in: [packages/cat-sdk/src/features/cat20/send/singleSend.ts:52](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat20/send/singleSend.ts#L52)

Sends a CAT20 token using `CAT20Guard` contract

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

### inputTokenUtxos

`UTXO`[]

the UTXOs of the input tokens

### receivers

`object`[]

the receivers of the tokens and the amounts

### tokenChangeAddress

`ByteString`

the address for the change output

### feeRate

`number`

the fee rate for the transaction

### sendChangeData?

`Buffer`

the change data for the transaction

## Returns

`Promise`\<\{ `changeTokenOutputIndex`: `number`; `guardPsbt`: `ExtPsbt`; `guardTxId`: `string`; `newCAT20Utxos`: `UTXO`[]; `sendPsbt`: `ExtPsbt`; `sendTxId`: `string`; \}\>

the PSBTs for the guard and send transactions, the UTXOs of the new tokens, and the index of the change token output
