[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / toTokenOwnerAddress

# Function: toTokenOwnerAddress()

> **toTokenOwnerAddress**(`addressOrScriptHex`, `forceContractAddress`): `ByteString`

Defined in: [packages/cat-sdk/src/utils/index.ts:103](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/utils/index.ts#L103)

## Parameters

### addressOrScriptHex

`string`

the address or script hex

### forceContractAddress

`boolean` = `false`

whether to force the contract address, default is false

## Returns

`ByteString`

the token owner address, p2pkh script hex or contract script hash
