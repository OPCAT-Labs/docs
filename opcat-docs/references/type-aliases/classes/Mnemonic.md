[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Mnemonic

# Class: Mnemonic

Defined in: node\_modules/@opcat-labs/opcat/types/mnemonic/mnemonic.d.cts:27

This is an immutable class that represents a BIP39 Mnemonic code.
See BIP39 specification for more info: https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
A Mnemonic code is a a group of easy to remember words used for the generation
of deterministic wallets. A Mnemonic can be used to generate a seed using
an optional passphrase, for later generate a HDPrivateKey.

## Example

```ts
// generate a random mnemonic
var mnemonic = new Mnemonic();
var phrase = mnemonic.phrase;

// use a different language
var mnemonic = new Mnemonic(Mnemonic.Words.SPANISH);
var xprivkey = mnemonic.toHDPrivateKey();
```

## Param

Input data (Buffer for seed, string for phrase, or number for entropy bits)

## Param

Optional wordlist for phrase generation/validation

## Throws

If invalid data type provided

## Throws

If phrase language can't be detected

## Throws

If phrase is invalid

## Throws

If invalid ENT value (must be >=128 and divisible by 32)

## Constructors

### new Mnemonic()

> **new Mnemonic**(`data`?, `wordlist`?): [`Mnemonic`](Mnemonic.md)

Defined in: node\_modules/@opcat-labs/opcat/types/mnemonic/mnemonic.d.cts:54

This is an immutable class that represents a BIP39 Mnemonic code.
See BIP39 specification for more info: https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
A Mnemonic code is a a group of easy to remember words used for the generation
of deterministic wallets. A Mnemonic can be used to generate a seed using
an optional passphrase, for later generate a HDPrivateKey.

#### Parameters

##### data?

Input data (Buffer for seed, string for phrase, or number for entropy bits)

`string` | `number` | `Buffer`

##### wordlist?

`any`[]

Optional wordlist for phrase generation/validation

#### Returns

[`Mnemonic`](Mnemonic.md)

A new instance of Mnemonic

#### Example

```ts
// generate a random mnemonic
var mnemonic = new Mnemonic();
var phrase = mnemonic.phrase;

// use a different language
var mnemonic = new Mnemonic(Mnemonic.Words.SPANISH);
var xprivkey = mnemonic.toHDPrivateKey();
```

#### Throws

If invalid data type provided

#### Throws

If phrase language can't be detected

#### Throws

If phrase is invalid

#### Throws

If invalid ENT value (must be >=128 and divisible by 32)

## Methods

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/mnemonic/mnemonic.d.cts:86

Will return a string formatted for the console

#### Returns

`string`

Mnemonic

***

### toHDPrivateKey()

> **toHDPrivateKey**(`passphrase`?, `network`?): [`HDPrivateKey`](HDPrivateKey.md)

Defined in: node\_modules/@opcat-labs/opcat/types/mnemonic/mnemonic.d.cts:74

Generates a HD Private Key from a Mnemonic.
Optionally receive a passphrase and bitcoin network.

#### Parameters

##### passphrase?

`string`

##### network?

`any`

The network: 'livenet' or 'testnet'

#### Returns

[`HDPrivateKey`](HDPrivateKey.md)

***

### toSeed()

> **toSeed**(`passphrase`?): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/mnemonic/mnemonic.d.cts:64

Will generate a seed based on the mnemonic and optional passphrase. Note that
this seed is absolutely NOT the seed that is output by .toSeed(). These are
two different seeds. The seed you want to put in here, if any, is just some
random byte string. Normally you should rely on the .fromRandom() method.

#### Parameters

##### passphrase?

`string`

#### Returns

`Buffer`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/mnemonic/mnemonic.d.cts:80

Will return a the string representation of the mnemonic

#### Returns

`string`

Mnemonic
