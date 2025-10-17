[**cat-sdk v1.0.3**](../README.md)

***

[cat-sdk](../README.md) / singleSendStep2

# Function: singleSendStep2()

> **singleSendStep2**(`provider`, `minterScriptHash`, `guard`, `finalizedGuardPsbt`, `inputTokenUtxos`, `outputTokenStates`, `feeChangeAddress`, `publicKey`, `feeRate`, `sendChangeData`?): `Promise`\<\{ `sendPsbt`: `ExtPsbt`; \}\>

Defined in: [packages/cat-sdk/src/features/cat20/send/singleSend.ts:215](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat20/send/singleSend.ts#L215)

Helper function for singleSend, add the token inputs and outputs to the psbt

## Parameters

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### minterScriptHash

`ByteString`

the script hash of the minter contract

### guard

[`CAT20Guard`](../classes/CAT20Guard.md)

the guard contract

### finalizedGuardPsbt

`ExtPsbt`

the finalized guard psbt

### inputTokenUtxos

`UTXO`[]

the UTXOs of the input tokens

### outputTokenStates

[`CAT20State`](../type-aliases/CAT20State.md)[]

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
