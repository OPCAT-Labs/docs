[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / HDPrivateKey

# Class: HDPrivateKey

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:15

Creates a new HDPrivateKey instance from various input formats.
More info on https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki

## Param

Input can be:
  - Existing HDPrivateKey instance (returns same instance)
  - Network name (generates random key for that network)
  - Serialized string/Buffer (base58 encoded)
  - JSON string
  - Object with key properties

## Throws

If input format is not recognized

## Throws

If serialized input is invalid

## Constructors

### new HDPrivateKey()

> **new HDPrivateKey**(`arg`): [`HDPrivateKey`](HDPrivateKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:30

Creates a new HDPrivateKey instance from various input formats.
More info on https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki

#### Parameters

##### arg

`any`

Input can be:
  - Existing HDPrivateKey instance (returns same instance)
  - Network name (generates random key for that network)
  - Serialized string/Buffer (base58 encoded)
  - JSON string
  - Object with key properties

#### Returns

[`HDPrivateKey`](HDPrivateKey.md)

#### Throws

If input format is not recognized

#### Throws

If serialized input is invalid

## Properties

### \_hdPublicKey

> **\_hdPublicKey**: [`HDPublicKey`](HDPublicKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:89

***

### toObject()

> **toObject**: () => `any`

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:129

Returns a plain object with a representation of this private key.

Fields include:
<ul>
<li> network: either 'livenet' or 'testnet' </li>
<li> depth: a number ranging from 0 to 255 </li>
<li> fingerPrint: a number ranging from 0 to 2^32-1, taken from the hash of the associated public key </li>
<li> parentFingerPrint: a number ranging from 0 to 2^32-1, taken from the hash of this parent's associated public key or zero. </li>
<li> childIndex: the index from which this child was derived (or zero) </li>
<li> chainCode: an hexa string representing a number used in the derivation </li>
<li> privateKey: the private key associated, in hexa representation </li>
<li> xprivkey: the representation of this extended private key in checksum base58 format </li>
<li> checksum: the base58 checksum of xprivkey </li>
</ul>

#### Returns

`any`

## Accessors

### hdPublicKey

#### Get Signature

> **get** **hdPublicKey**(): [`HDPublicKey`](HDPublicKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:31

##### Returns

[`HDPublicKey`](HDPublicKey.md)

***

### xpubkey

#### Get Signature

> **get** **xpubkey**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:32

##### Returns

`any`

## Methods

### deriveChild()

> **deriveChild**(`arg`, `hardened`?): [`HDPrivateKey`](HDPrivateKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:62

WARNING: This method will not be officially supported until v1.0.0.

Get a derived child based on a string or number.

If the first argument is a string, it's parsed as the full path of
derivation. Valid values for this argument include "m" (which returns the
same private key), "m/0/1/40/2'/1000", where the ' quote means a hardened
derivation.

If the first argument is a number, the child with that index will be
derived. If the second argument is truthy, the hardened version will be
derived. See the example usage for clarification.

WARNING: The `nonCompliant` option should NOT be used, except for older implementation
that used a derivation strategy that used a non-zero padded private key.

#### Parameters

##### arg

`string` | `number`

##### hardened?

`boolean`

#### Returns

[`HDPrivateKey`](HDPrivateKey.md)

#### Example

```javascript
var parent = new HDPrivateKey('xprv...');
var child_0_1_2h = parent.deriveChild(0).deriveChild(1).deriveChild(2, true);
var copy_of_child_0_1_2h = parent.deriveChild("m/0/1/2'");
assert(child_0_1_2h.xprivkey === copy_of_child_0_1_2h);
```

***

### deriveNonCompliantChild()

> **deriveNonCompliantChild**(`arg`, `hardened`?): [`HDPrivateKey`](HDPrivateKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:81

WARNING: This method will not be officially supported until v1.0.0

WARNING: If this is a new implementation you should NOT use this method, you should be using
`derive` instead.

This method is explicitly for use and compatibility with an implementation that
was not compliant with BIP32 regarding the derivation algorithm. The private key
must be 32 bytes hashing, and this implementation will use the non-zero padded
serialization of a private key, such that it's still possible to derive the privateKey
to recover those funds.

#### Parameters

##### arg

Either a child index number or derivation path string

`string` | `number`

##### hardened?

`boolean`

Whether to create hardened derivation (only used with number arg)

#### Returns

[`HDPrivateKey`](HDPrivateKey.md)

The derived child private key

#### Throws

If argument type is invalid

***

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:111

Returns the console representation of this extended private key.

#### Returns

`string`

string

***

### toBuffer()

> **toBuffer**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:136

Returns a buffer representation of the HDPrivateKey

#### Returns

`string`

***

### toHDPublicKey()

> **toHDPublicKey**(): [`HDPublicKey`](HDPublicKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:94

Converts the HDPrivateKey instance to its corresponding HDPublicKey.

#### Returns

[`HDPublicKey`](HDPublicKey.md)

The derived HD public key.

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:142

Returns a hex string representation of the HDPrivateKey

#### Returns

`string`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:130

#### Returns

`any`

***

### toPrivateKey()

> **toPrivateKey**(): [`PrivateKey`](PrivateKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:99

Returns the private key associated with this HD private key.

#### Returns

[`PrivateKey`](PrivateKey.md)

The private key instance.

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/hdprivatekey.d.cts:106

Returns the extended private key string representation of this HDPrivateKey.
 (a string starting with "xprv...")

#### Returns

`string`

The extended private key in base58 string format.
