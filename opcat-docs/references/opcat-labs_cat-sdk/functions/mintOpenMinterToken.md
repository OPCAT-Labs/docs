[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / mintOpenMinterToken

# Function: mintOpenMinterToken()

> **mintOpenMinterToken**(`signer`, `preminerSigner`, `provider`, `minterUtxo`, `tokenId`, `metadata`, `tokenReceiver`, `changeAddress`, `feeRate`): `Promise`\<\{ `mintPsbt`: `ExtPsbt`; `mintTxid`: `string`; \}\>

Defined in: [packages/cat-sdk/src/features/cat20/mint/openMinter.ts:18](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat20/mint/openMinter.ts#L18)

Mints a CAT20 token using `CAT20OpenMinter` contract
The preimner can mint the token with premined amount first, other users can mint the token with a fixed amount later

## Parameters

### signer

`Signer`

the signer for the minting

### preminerSigner

`Signer`

the signer for the preminer, pass the deployer signer if premine is disabled, otherwise pass the reminer signer

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### minterUtxo

`UTXO`

the UTXO of the minter contract

### tokenId

`string`

the ID of the token

### metadata

[`OpenMinterCAT20Meta`](../interfaces/OpenMinterCAT20Meta.md)

### tokenReceiver

`ByteString`

### changeAddress

`string`

### feeRate

`number`

## Returns

`Promise`\<\{ `mintPsbt`: `ExtPsbt`; `mintTxid`: `string`; \}\>
