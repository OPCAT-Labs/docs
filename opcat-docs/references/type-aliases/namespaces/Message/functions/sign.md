[**scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[scrypt-ts-opcat](../../../README.md) / [Message](../README.md) / sign

# Function: sign()

> **sign**(`message`, `privateKey`): [`Message`](../../../classes/Message.md)

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:80

Signs a message with the given private key.

## Parameters

### message

The message to sign.

`string` | `Buffer`

### privateKey

[`PrivateKey`](../../../classes/PrivateKey.md)

The private key used for signing.

## Returns

[`Message`](../../../classes/Message.md)

The signed message instance.
