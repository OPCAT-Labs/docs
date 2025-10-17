[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / deployOpenMinterCollection

# Function: deployOpenMinterCollection()

> **deployOpenMinterCollection**(`signer`, `provider`, `metadata`, `initMerkleRoot`, `feeRate`, `changeAddress`?): `Promise`\<[`CAT721NftInfo`](../interfaces/CAT721NftInfo.md)\<[`OpenMinterCAT721Meta`](../type-aliases/OpenMinterCAT721Meta.md)\> & `object`\>

Defined in: [packages/cat-sdk/src/features/cat721/deploy/cat721OpenMinter.ts:25](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat721/deploy/cat721OpenMinter.ts#L25)

Deploys a CAT721 open minter and its metadata using `CAT721OpenMinter` contract

## Parameters

### signer

`Signer`

the signer for the deployer

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### metadata

[`OpenMinterCAT721Meta`](../type-aliases/OpenMinterCAT721Meta.md)

the metadata for the collection

### initMerkleRoot

`ByteString`

the initial merkle root for the collection

### feeRate

`number`

the fee rate for the transaction

### changeAddress?

`string`

the address for the change output

## Returns

`Promise`\<[`CAT721NftInfo`](../interfaces/CAT721NftInfo.md)\<[`OpenMinterCAT721Meta`](../type-aliases/OpenMinterCAT721Meta.md)\> & `object`\>

the collection info and the PSBTs for the genesis and deploy transactions
