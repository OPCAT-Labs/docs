[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / fromSupportedNetwork

# Function: fromSupportedNetwork()

> **fromSupportedNetwork**(`network`): [`Network`](../classes/Network.md)

Defined in: [packages/scrypt-ts-opcat/src/networks.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/e67b8657b34dbf57f8a4f9bdf87cdc2742db16bb/packages/scrypt-ts-opcat/src/networks.ts#L32)

Converts a supported network string into its corresponding Network object.

## Parameters

### network

[`SupportedNetwork`](../type-aliases/SupportedNetwork.md)

The supported network identifier ('opcat-mainnet', 'opcat-testnet', or 'opcat-regtest')

## Returns

[`Network`](../classes/Network.md)

The corresponding Network object

## Throws

When an unsupported network configuration is provided
