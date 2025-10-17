[**cat-sdk v1.0.3**](../README.md)

***

[cat-sdk](../README.md) / singleSendStep1

# Function: singleSendStep1()

> **singleSendStep1**(`provider`, `feeUtxos`, `inputTokenUtxos`, `receivers`, `feeChangeAddress`, `tokenChangeAddress`, `feeRate`): `Promise`\<\{ `changeTokenOutputIndex`: `number`; `guard`: [`CAT20Guard`](../classes/CAT20Guard.md); `guardPsbt`: `ExtPsbt`; `outputTokenStates`: [`CAT20State`](../type-aliases/CAT20State.md)[]; \}\>

Defined in: [packages/cat-sdk/src/features/cat20/send/singleSend.ts:128](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat20/send/singleSend.ts#L128)

Helper function for singleSend, create the send psbt but do not sign it

## Parameters

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### feeUtxos

`UTXO`[]

the UTXOs for the fee

### inputTokenUtxos

`UTXO`[]

the UTXOs of the input tokens

### receivers

`object`[]

the receivers of the tokens and the amounts

### feeChangeAddress

`ByteString`

the address for the change output

### tokenChangeAddress

`ByteString`

the address for the change output

### feeRate

`number`

the fee rate for the transaction

## Returns

`Promise`\<\{ `changeTokenOutputIndex`: `number`; `guard`: [`CAT20Guard`](../classes/CAT20Guard.md); `guardPsbt`: `ExtPsbt`; `outputTokenStates`: [`CAT20State`](../type-aliases/CAT20State.md)[]; \}\>

the guard and the output token states
