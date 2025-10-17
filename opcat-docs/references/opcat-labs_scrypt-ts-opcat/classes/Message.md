[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / Message

# Class: Message

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:9

Creates a Message instance from a string or Buffer.

## Param

The message content as either a string or Buffer

## Throws

Will throw if message is not a string or Buffer

## Constructors

### new Message()

> **new Message**(`message`): [`Message`](Message.md)

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:18

Creates a Message instance from a string or Buffer.

#### Parameters

##### message

The message content as either a string or Buffer

`string` | `Buffer`

#### Returns

[`Message`](Message.md)

A new Message instance containing the message buffer

#### Throws

Will throw if message is not a string or Buffer

## Properties

### error

> **error**: `string`

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:42

***

### messageBuffer

> **messageBuffer**: `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:19

## Methods

### \_verify()

> **\_verify**(`publicKey`, `signature`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:41

Verifies the message signature using the provided public key.

#### Parameters

##### publicKey

[`PublicKey`](PublicKey.md)

The public key to verify against

##### signature

[`Signature`](../namespaces/crypto/classes/Signature.md)

The signature to verify

#### Returns

`boolean`

True if signature is valid, false otherwise

#### Throws

If arguments are not valid PublicKey/Signature instances

***

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:71

Custom inspect method for Message instances.

#### Returns

`string`

String representation in format '<Message: [content]>'.

***

### magicHash()

> **magicHash**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:25

Calculates the magic hash for the message by concatenating magic bytes prefixes
with the message buffer and computing a double SHA-256 hash.

#### Returns

`Buffer`

The resulting 32-byte hash.

***

### sign()

> **sign**(`privateKey`): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:33

Will sign a message with a given bitcoin private key.

#### Parameters

##### privateKey

[`PrivateKey`](PrivateKey.md)

An instance of PrivateKey

#### Returns

`string`

A base64 encoded compact signature

***

### toJSON()

> **toJSON**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:61

Converts the Message instance to a JSON string representation.

#### Returns

`string`

The JSON string representation of the Message object.

***

### toObject()

> **toObject**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:56

Converts the message to a plain object with hex representation.

#### Returns

`any`

An object containing the hex string of the message buffer.

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:66

Converts the message buffer to a string representation.

#### Returns

`string`

The string representation of the message buffer.

***

### verify()

> **verify**(`bitcoinAddress`, `signatureString`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/message/message.d.cts:51

Will return a boolean of the signature is valid for a given bitcoin address.
If it isn't the specific reason is accessible via the "error" member.

#### Parameters

##### bitcoinAddress

A bitcoin address

`string` | [`Address`](Address.md)

##### signatureString

`string`

A base64 encoded compact signature

#### Returns

`boolean`
