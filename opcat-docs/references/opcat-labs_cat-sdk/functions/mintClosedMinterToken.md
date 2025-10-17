[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / mintClosedMinterToken

# Function: mintClosedMinterToken()

> **mintClosedMinterToken**(`signer`, `provider`, `minterUtxo`, `tokenId`, `tokenReceiver`, `tokenAmount`, `changeAddress`, `feeRate`): `Promise`\<\{ `cat20Utxo`: `UTXO`; `mintPsbt`: `ExtPsbt`; `mintTxId`: `string`; \}\>

Defined in: [packages/cat-sdk/src/features/cat20/mint/closedMinter.ts:31](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat20/mint/closedMinter.ts#L31)

Mints a CAT20 token using `CAT20ClosedMinter` contract
Only the token issuer can mint token

## Parameters

### signer

`Signer`

the signer for the issuer

### provider

`ChainProvider` & `UtxoProvider`

the provider for the blockchain and UTXO operations

### minterUtxo

`UTXO`

the UTXO of the minter contract

### tokenId

`string`

the ID of the token

### tokenReceiver

`ByteString`

the address to receive the token

### tokenAmount

`bigint`

the amount of the token to mint

### changeAddress

`string`

the address for the change output

### feeRate

`number`

the fee rate for the transaction

## Returns

`Promise`\<\{ `cat20Utxo`: `UTXO`; `mintPsbt`: `ExtPsbt`; `mintTxId`: `string`; \}\>

the mint Psbt and the UTXO of the minted token
