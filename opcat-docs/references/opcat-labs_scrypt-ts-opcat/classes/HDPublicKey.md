[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / HDPublicKey

# Class: HDPublicKey

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:10

The representation of an hierarchically derived public key.

See https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki

## Param

## Constructors

### new HDPublicKey()

> **new HDPublicKey**(`arg`): [`HDPublicKey`](HDPublicKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:20

The representation of an hierarchically derived public key.

See https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki

#### Parameters

##### arg

`any`

#### Returns

[`HDPublicKey`](HDPublicKey.md)

## Properties

### toObject()

> **toObject**: () => `object`

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:81

Returns a plain JavaScript object with information to reconstruct a key.

Fields are:
<ul>
 <li> network: 'livenet' or 'testnet' </li>
 <li> depth: a number from 0 to 255, the depth to the master extended key </li>
 <li> fingerPrint: a number of 32 bits taken from the hash of the public key </li>
 <li> fingerPrint: a number of 32 bits taken from the hash of this key's parent's public key </li>
 <li> childIndex: index with which this key was derived </li>
 <li> chainCode: string in hexa encoding used for derivation </li>
 <li> publicKey: string, hexa encoded, in compressed key format </li>
 <li> checksum: this._buffers.checksum.readUInt32BE(0) </li>
 <li> xpubkey: the string with the base58 representation of this extended key </li>
 <li> checksum: the base58 checksum of xpubkey </li>
</ul>

#### Returns

`object`

##### chainCode

> **chainCode**: `any`

##### checksum

> **checksum**: `any`

##### childIndex

> **childIndex**: `any`

##### depth

> **depth**: `any`

##### fingerPrint

> **fingerPrint**: `any`

##### network

> **network**: `any`

##### parentFingerPrint

> **parentFingerPrint**: `any`

##### publicKey

> **publicKey**: `any`

##### xpubkey

> **xpubkey**: `any`

## Methods

### deriveChild()

> **deriveChild**(`arg`, `hardened`?): [`HDPublicKey`](HDPublicKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:48

WARNING: This method will not be officially supported until v1.0.0.

Get a derivated child based on a string or number.

If the first argument is a string, it's parsed as the full path of
derivation. Valid values for this argument include "m" (which returns the
same public key), "m/0/1/40/2/1000".

Note that hardened keys can't be derived from a public extended key.

If the first argument is a number, the child with that index will be
derived. See the example usage for clarification.

#### Parameters

##### arg

The index or path to derive

`string` | `number`

##### hardened?

`boolean`

Whether to use hardened derivation

#### Returns

[`HDPublicKey`](HDPublicKey.md)

The derived child public key

#### Example

```javascript
var parent = new HDPublicKey('xpub...');
var child_0_1_2 = parent.deriveChild(0).deriveChild(1).deriveChild(2);
var copy_of_child_0_1_2 = parent.deriveChild("m/0/1/2");
assert(child_0_1_2.xprivkey === copy_of_child_0_1_2);
```

***

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:63

Returns the console representation of this extended public key.

#### Returns

`string`

string

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:108

Return a buffer representation of the xpubkey

#### Returns

`Buffer`

***

### toHex()

> **toHex**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:114

Return a hex string representation of the xpubkey

#### Returns

`Buffer`

***

### toJSON()

> **toJSON**(): `object`

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:92

#### Returns

`object`

##### chainCode

> **chainCode**: `any`

##### checksum

> **checksum**: `any`

##### childIndex

> **childIndex**: `any`

##### depth

> **depth**: `any`

##### fingerPrint

> **fingerPrint**: `any`

##### network

> **network**: `any`

##### parentFingerPrint

> **parentFingerPrint**: `any`

##### publicKey

> **publicKey**: `any`

##### xpubkey

> **xpubkey**: `any`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/hdpublickey.d.cts:58

Returns the base58 checked representation of the public key

#### Returns

`string`

a string starting with "xpub..." in livenet
