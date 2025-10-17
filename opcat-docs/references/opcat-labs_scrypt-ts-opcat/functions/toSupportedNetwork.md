[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / toSupportedNetwork

# Function: toSupportedNetwork()

> **toSupportedNetwork**(`network`): [`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

Defined in: [packages/scrypt-ts-opcat/src/networks.ts:13](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/networks.ts#L13)

Converts a Network object to a SupportedNetwork string.

## Parameters

### network

[`Network`](../classes/Network.md)

The network configuration to check

## Returns

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

The corresponding supported network name ('opcat-mainnet', 'opcat-testnet', or 'opcat-regtest')

## Throws

If the network configuration is not supported
