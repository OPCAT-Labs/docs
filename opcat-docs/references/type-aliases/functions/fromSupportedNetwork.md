[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / fromSupportedNetwork

# Function: fromSupportedNetwork()

> **fromSupportedNetwork**(`network`): [`Network`](../classes/Network.md)

Defined in: [packages/scrypt-ts-opcat/src/networks.ts:32](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/networks.ts#L32)

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
