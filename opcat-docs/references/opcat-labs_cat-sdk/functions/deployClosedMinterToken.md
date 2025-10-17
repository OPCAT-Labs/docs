[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / deployClosedMinterToken

# Function: deployClosedMinterToken()

> **deployClosedMinterToken**(`signer`, `provider`, `metadata`, `feeRate`, `changeAddress`?): `Promise`\<[`CAT20TokenInfo`](../interfaces/CAT20TokenInfo.md)\<[`ClosedMinterCAT20Meta`](../interfaces/ClosedMinterCAT20Meta.md)\> & `object`\>

Defined in: [packages/cat-sdk/src/features/cat20/deploy/closedMinter.ts:28](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat20/deploy/closedMinter.ts#L28)

Deploys a CAT20 token and its metadata using `CAT20ClosedMinter` contract
Only the token issuer can mint token

## Parameters

### signer

`Signer`

the signer for the deployer

### provider

`ChainProvider` & `UtxoProvider`

the provider for the blockchain and UTXO operations

### metadata

[`ClosedMinterCAT20Meta`](../interfaces/ClosedMinterCAT20Meta.md)

the metadata for the token

### feeRate

`number`

the fee rate for the transaction

### changeAddress?

`string`

the address for the change output

## Returns

`Promise`\<[`CAT20TokenInfo`](../interfaces/CAT20TokenInfo.md)\<[`ClosedMinterCAT20Meta`](../interfaces/ClosedMinterCAT20Meta.md)\> & `object`\>

the token info and the PSBTs for the genesis and deploy transactions
