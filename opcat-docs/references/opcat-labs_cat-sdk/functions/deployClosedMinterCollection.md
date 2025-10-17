[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / deployClosedMinterCollection

# Function: deployClosedMinterCollection()

> **deployClosedMinterCollection**(`signer`, `provider`, `metadata`, `feeRate`, `content`?, `changeAddress`?): `Promise`\<[`CAT721NftInfo`](../interfaces/CAT721NftInfo.md)\<[`ClosedMinterCAT721Meta`](../type-aliases/ClosedMinterCAT721Meta.md)\> & `object`\>

Defined in: [packages/cat-sdk/src/features/cat721/deploy/cat721ClosedMinter.ts:28](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat721/deploy/cat721ClosedMinter.ts#L28)

Deploys a CAT721 closed minter and its metadata using `CAT721ClosedMinter` contract
Only the token issuer can mint token

## Parameters

### signer

`Signer`

the signer for the deployer

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### metadata

[`ClosedMinterCAT721Meta`](../type-aliases/ClosedMinterCAT721Meta.md)

the metadata for the collection

### feeRate

`number`

the fee rate for the transaction

### content?

the content for the collection

#### body

`string`

#### type

`string`

### changeAddress?

`string`

the address for the change output

## Returns

`Promise`\<[`CAT721NftInfo`](../interfaces/CAT721NftInfo.md)\<[`ClosedMinterCAT721Meta`](../type-aliases/ClosedMinterCAT721Meta.md)\> & `object`\>

the collection info and the PSBTs for the genesis and deploy transactions
