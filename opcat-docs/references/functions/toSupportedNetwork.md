[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / toSupportedNetwork

# Function: toSupportedNetwork()

> **toSupportedNetwork**(`network`): [`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

Defined in: [packages/scrypt-ts-opcat/src/networks.ts:13](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/networks.ts#L13)

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
