[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / mintOpenMinterNft

# Function: mintOpenMinterNft()

> **mintOpenMinterNft**(`signer`, `provider`, `minterUtxo`, `proof`, `proofNodePos`, `nextMerkleRoot`, `nft`, `collectionId`, `metadata`, `nftReceiver`, `changeAddress`, `feeRate`): `Promise`\<\{ `createNftPsbt`: `ExtPsbt`; `createNftTxId`: `string`; `mintPsbt`: `ExtPsbt`; `mintTxId`: `string`; \}\>

Defined in: [packages/cat-sdk/src/features/cat721/mint/cat721OpenMinter.ts:28](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat721/mint/cat721OpenMinter.ts#L28)

Mints a CAT721 NFT using `CAT721OpenMinter` contract

## Parameters

### signer

`Signer`

the signer for the minting

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### minterUtxo

`UTXO`

the UTXO of the minter contract

### proof

[`MerkleProof`](../type-aliases/MerkleProof.md)

the proof for the merkle root

### proofNodePos

[`ProofNodePos`](../type-aliases/ProofNodePos.md)

the position of the proof node

### nextMerkleRoot

`ByteString`

the next merkle root

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

[`OpenMinterCAT721Meta`](../type-aliases/OpenMinterCAT721Meta.md)

the metadata and content for the nft

### nftReceiver

`ByteString`

the address to receive the nft

### changeAddress

`string`

the address for the change output

### feeRate

`number`

the fee rate for the transaction

## Returns

`Promise`\<\{ `createNftPsbt`: `ExtPsbt`; `createNftTxId`: `string`; `mintPsbt`: `ExtPsbt`; `mintTxId`: `string`; \}\>

the PSBTs for the create and mint transactions
