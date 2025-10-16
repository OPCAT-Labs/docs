[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / mintClosedMinterNft

# Function: mintClosedMinterNft()

> **mintClosedMinterNft**(`issuerSigner`, `feeSigner`, `provider`, `minterUtxo`, `nft`, `collectionId`, `metadata`, `nftReceiver`, `changeAddress`, `feeUtxos`, `feeRate`): `Promise`\<\{ `createNftPsbt`: `ExtPsbt`; `createNftTxId`: `string`; `mintPsbt`: `ExtPsbt`; `mintTxId`: `string`; \}\>

Defined in: [packages/cat-sdk/src/features/cat721/mint/cat721ClosedMinter.ts:27](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat721/mint/cat721ClosedMinter.ts#L27)

Mints a CAT721 NFT using `CAT721ClosedMinter` contract
Only the token issuer can mint token

## Parameters

### issuerSigner

`Signer`

the signer for the issuer

### feeSigner

`Signer`

the signer for the fee

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### minterUtxo

`UTXO`

the UTXO of the minter contract

### nft

the nft to mint

#### contentBody

`string`

#### contentType

`string`

#### nftmetadata

`object`

### collectionId

`string`

the id of the collection

### metadata

[`ClosedMinterCAT721Meta`](../type-aliases/ClosedMinterCAT721Meta.md)

the metadata and content for the nft

### nftReceiver

`ByteString`

the address to receive the nft

### changeAddress

`string`

the address for the change output

### feeUtxos

`UTXO`[]

the UTXOs for the fee

### feeRate

`number`

the fee rate for the transaction

## Returns

`Promise`\<\{ `createNftPsbt`: `ExtPsbt`; `createNftTxId`: `string`; `mintPsbt`: `ExtPsbt`; `mintTxId`: `string`; \}\>

the PSBTs for the create and mint transactions
