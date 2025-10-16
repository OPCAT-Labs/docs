[**cat-sdk v1.0.3**](../README.md)

***

[cat-sdk](../README.md) / deployOpenMinter

# Function: deployOpenMinter()

> **deployOpenMinter**(`signer`, `preminerSigner`, `provider`, `metadata`, `feeRate`, `changeAddress`?): `Promise`\<[`CAT20TokenInfo`](../interfaces/CAT20TokenInfo.md)\<[`OpenMinterCAT20Meta`](../interfaces/OpenMinterCAT20Meta.md)\> & `object`\>

Defined in: [packages/cat-sdk/src/features/cat20/deploy/openMinter.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/features/cat20/deploy/openMinter.ts#L32)

Deploys a CAT20 token and its metadata using `CAT20OpenMinter` contract, and premines the token if applicable.
The preimner can mint the token with premined amount first, other users can mint the token with a fixed amount later

## Parameters

### signer

`Signer`

the signer for the deployer

### preminerSigner

`Signer`

the signer for the preminer, pass the deployer signer if premine is disabled, otherwise pass the reminer signer

### provider

`UtxoProvider` & `ChainProvider`

the provider for the blockchain and UTXO operations

### metadata

[`OpenMinterCAT20Meta`](../interfaces/OpenMinterCAT20Meta.md)

the metadata for the token

### feeRate

`number`

the fee rate for the transaction

### changeAddress?

`string`

the address for the change output

## Returns

`Promise`\<[`CAT20TokenInfo`](../interfaces/CAT20TokenInfo.md)\<[`OpenMinterCAT20Meta`](../interfaces/OpenMinterCAT20Meta.md)\> & `object`\>

the token info and the PSBTs for the genesis, deploy, and premine transactions
