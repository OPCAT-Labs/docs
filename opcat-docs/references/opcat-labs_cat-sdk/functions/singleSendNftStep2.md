[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / singleSendNftStep2

# Function: singleSendNftStep2()

> **singleSendNftStep2**(`provider`, `minterScriptHash`, `guard`, `finalizedGuardPsbt`, `inputNftUtxos`, `outputNftStates`, `feeChangeAddress`, `publicKey`, `feeRate`, `sendChangeData`?): `Promise`\<\{ `sendPsbt`: `ExtPsbt`; \}\>

Defined in: [packages/cat-sdk/src/features/cat721/send/singleSend.ts:138](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat721/send/singleSend.ts#L138)

Helper function for singleSendNft, add the nft inputs and outputs to the psbt

## Parameters

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### minterScriptHash

`ByteString`

the script hash of the minter contract

### guard

[`CAT721Guard`](../classes/CAT721Guard.md)

the guard contract

### finalizedGuardPsbt

`ExtPsbt`

the finalized guard psbt

### inputNftUtxos

`UTXO`[]

the UTXOs of the input tokens

### outputNftStates

[`CAT721State`](../type-aliases/CAT721State.md)[]

the output token states

### feeChangeAddress

`string`

the address for the change output

### publicKey

`string`

the public key of the sender

### feeRate

`number`

the fee rate for the transaction

### sendChangeData?

`Buffer`

the change data for the transaction

## Returns

`Promise`\<\{ `sendPsbt`: `ExtPsbt`; \}\>

the send psbt
