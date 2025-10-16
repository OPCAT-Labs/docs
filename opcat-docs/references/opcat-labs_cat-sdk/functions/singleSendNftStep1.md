[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / singleSendNftStep1

# Function: singleSendNftStep1()

> **singleSendNftStep1**(`provider`, `feeUtxos`, `inputNftUtxos`, `receivers`, `feeChangeAddress`, `feeRate`): `Promise`\<\{ `guard`: [`CAT721Guard`](../classes/CAT721Guard.md); `guardPsbt`: `ExtPsbt`; `outputNftStates`: [`CAT721State`](../type-aliases/CAT721State.md)[]; \}\>

Defined in: [packages/cat-sdk/src/features/cat721/send/singleSend.ts:85](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat721/send/singleSend.ts#L85)

Helper function for singleSendNft, create the guard psbt but do not sign it

## Parameters

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### feeUtxos

`UTXO`[]

the UTXOs for the fee

### inputNftUtxos

`UTXO`[]

the UTXOs of the input tokens

### receivers

`ByteString`[]

the receivers of the tokens

### feeChangeAddress

`ByteString`

the address for the change output

### feeRate

`number`

the fee rate for the transaction

## Returns

`Promise`\<\{ `guard`: [`CAT721Guard`](../classes/CAT721Guard.md); `guardPsbt`: `ExtPsbt`; `outputNftStates`: [`CAT721State`](../type-aliases/CAT721State.md)[]; \}\>

the guard and the output token states
