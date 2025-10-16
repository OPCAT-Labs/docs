[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../../../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../../../README.md) / [crypto](../README.md) / BN

# Class: BN

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:10

BN (Big Number) constructor.
Creates a new BN instance or returns the existing one if input is already a BN.

## Param

The number to initialize with (or existing BN instance)

## Param

Numeric base (10, 16, etc) or endianness ('le', 'be')

## Param

Endianness ('le' for little-endian, 'be' for big-endian)

## Constructors

### new BN()

> **new BN**(`number`, `base`?, `endian`?): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:20

BN (Big Number) constructor.
Creates a new BN instance or returns the existing one if input is already a BN.

#### Parameters

##### number

The number to initialize with (or existing BN instance)

`number` | [`BN`](BN.md)

##### base?

Numeric base (10, 16, etc) or endianness ('le', 'be')

`string` | `number`

##### endian?

`string`

Endianness ('le' for little-endian, 'be' for big-endian)

#### Returns

[`BN`](BN.md)

## Properties

### length

> **length**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:23

***

### negative

> **negative**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:21

***

### red

> **red**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:24

***

### words

> **words**: `any`[] \| `number`[]

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:22

## Methods

### \_countBits()

> **\_countBits**(`w`): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:42

#### Parameters

##### w

`any`

#### Returns

`number`

***

### \_expand()

> **\_expand**(`size`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:32

#### Parameters

##### size

`any`

#### Returns

`this`

***

### \_forceRed()

> **\_forceRed**(`ctx`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:139

#### Parameters

##### ctx

`any`

#### Returns

`this`

***

### \_iaddn()

> **\_iaddn**(`num`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:92

#### Parameters

##### num

`any`

#### Returns

`this`

***

### \_init()

> **\_init**(`number`, `base`, `endian`): `void` \| [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:25

#### Parameters

##### number

`any`

##### base

`any`

##### endian

`any`

#### Returns

`void` \| [`BN`](BN.md)

***

### \_initArray()

> **\_initArray**(`number`, `base`, `endian`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:27

#### Parameters

##### number

`any`

##### base

`any`

##### endian

`any`

#### Returns

`this`

***

### \_invmp()

> **\_invmp**(`p`): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:116

#### Parameters

##### p

`any`

#### Returns

[`BN`](BN.md)

***

### \_ishlnsubmul()

> **\_ishlnsubmul**(`num`, `mul`, `shift`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:98

#### Parameters

##### num

`any`

##### mul

`any`

##### shift

`any`

#### Returns

`this`

***

### \_normSign()

> **\_normSign**(): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:34

#### Returns

`this`

***

### \_parseBase()

> **\_parseBase**(`number`, `base`, `start`): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:29

#### Parameters

##### number

`any`

##### base

`any`

##### start

`any`

#### Returns

`void`

***

### \_parseHex()

> **\_parseHex**(`number`, `start`): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:28

#### Parameters

##### number

`any`

##### start

`any`

#### Returns

`void`

***

### \_wordDiv()

> **\_wordDiv**(`num`, `mode`): `object`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:99

#### Parameters

##### num

`any`

##### mode

`any`

#### Returns

`object`

##### div

> **div**: [`BN`](BN.md)

##### mod

> **mod**: [`BN`](BN.md)

***

### \_zeroBits()

> **\_zeroBits**(`w`): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:43

#### Parameters

##### w

`any`

#### Returns

`number`

***

### abs()

> **abs**(): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:97

#### Returns

[`BN`](BN.md)

***

### add()

> **add**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:68

#### Parameters

##### num

`any`

#### Returns

`any`

***

### addn()

> **addn**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:94

#### Parameters

##### num

`any`

#### Returns

`any`

***

### and()

> **and**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:58

#### Parameters

##### num

`any`

#### Returns

`any`

***

### andln()

> **andln**(`num`): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:121

#### Parameters

##### num

`any`

#### Returns

`number`

***

### bincn()

> **bincn**(`bit`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:122

#### Parameters

##### bit

`any`

#### Returns

`this`

***

### bitLength()

> **bitLength**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:44

#### Returns

`number`

***

### byteLength()

> **byteLength**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:46

#### Returns

`number`

***

### clone()

> **clone**(): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:31

#### Returns

[`BN`](BN.md)

***

### cmp()

> **cmp**(`num`): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:125

#### Parameters

##### num

`any`

#### Returns

`number`

***

### cmpn()

> **cmpn**(`num`): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:124

#### Parameters

##### num

`any`

#### Returns

`number`

***

### copy()

> **copy**(`dest`): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:30

#### Parameters

##### dest

`any`

#### Returns

`void`

***

### div()

> **div**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:104

#### Parameters

##### num

`any`

#### Returns

`any`

***

### divmod()

> **divmod**(`num`, `mode`, `positive`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:103

#### Parameters

##### num

`any`

##### mode

`any`

##### positive

`any`

#### Returns

`any`

***

### divn()

> **divn**(`num`): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:110

#### Parameters

##### num

`any`

#### Returns

[`BN`](BN.md)

***

### divRound()

> **divRound**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:107

#### Parameters

##### num

`any`

#### Returns

`any`

***

### egcd()

> **egcd**(`p`): `object`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:111

#### Parameters

##### p

`any`

#### Returns

`object`

##### a

> **a**: [`BN`](BN.md)

##### b

> **b**: [`BN`](BN.md)

##### gcd

> **gcd**: `any`

***

### eq()

> **eq**(`num`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:136

#### Parameters

##### num

`any`

#### Returns

`boolean`

***

### eqn()

> **eqn**(`num`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:135

#### Parameters

##### num

`any`

#### Returns

`boolean`

***

### forceRed()

> **forceRed**(`ctx`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:140

#### Parameters

##### ctx

`any`

#### Returns

`this`

***

### fromRed()

> **fromRed**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:138

#### Returns

`any`

***

### fromTwos()

> **fromTwos**(`width`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:48

#### Parameters

##### width

`any`

#### Returns

`any`

***

### gcd()

> **gcd**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:117

#### Parameters

##### num

`any`

#### Returns

`any`

***

### gt()

> **gt**(`num`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:128

#### Parameters

##### num

`any`

#### Returns

`boolean`

***

### gte()

> **gte**(`num`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:130

#### Parameters

##### num

`any`

#### Returns

`boolean`

***

### gten()

> **gten**(`num`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:129

#### Parameters

##### num

`any`

#### Returns

`boolean`

***

### gtn()

> **gtn**(`num`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:127

#### Parameters

##### num

`any`

#### Returns

`boolean`

***

### iabs()

> **iabs**(): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:96

#### Returns

`this`

***

### iadd()

> **iadd**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:67

#### Parameters

##### num

`any`

#### Returns

`any`

***

### iaddn()

> **iaddn**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:91

#### Parameters

##### num

`any`

#### Returns

`any`

***

### iand()

> **iand**(`num`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:57

#### Parameters

##### num

`any`

#### Returns

`this`

***

### idivn()

> **idivn**(`num`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:109

#### Parameters

##### num

`any`

#### Returns

`this`

***

### imaskn()

> **imaskn**(`bits`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:89

#### Parameters

##### bits

`any`

#### Returns

`this`

***

### imul()

> **imul**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:74

#### Parameters

##### num

`any`

#### Returns

`any`

***

### imuln()

> **imuln**(`num`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:75

#### Parameters

##### num

`any`

#### Returns

`this`

***

### ineg()

> **ineg**(): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:51

#### Returns

`this`

***

### inotn()

> **inotn**(`width`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:64

#### Parameters

##### width

`any`

#### Returns

`this`

***

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:35

#### Returns

`string`

***

### invm()

> **invm**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:118

#### Parameters

##### num

`any`

#### Returns

`any`

***

### ior()

> **ior**(`num`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:53

#### Parameters

##### num

`any`

#### Returns

`this`

***

### isEven()

> **isEven**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:119

#### Returns

`boolean`

***

### ishln()

> **ishln**(`bits`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:81

#### Parameters

##### bits

`any`

#### Returns

`this`

***

### ishrn()

> **ishrn**(`bits`, `hint`, `extended`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:83

#### Parameters

##### bits

`any`

##### hint

`any`

##### extended

`any`

#### Returns

`this`

***

### isNeg()

> **isNeg**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:49

#### Returns

`boolean`

***

### isOdd()

> **isOdd**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:120

#### Returns

`boolean`

***

### isqr()

> **isqr**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:78

#### Returns

`any`

***

### isub()

> **isub**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:69

#### Parameters

##### num

`any`

#### Returns

`any`

***

### isubn()

> **isubn**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:93

#### Parameters

##### num

`any`

#### Returns

`any`

***

### isZero()

> **isZero**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:123

#### Returns

`boolean`

***

### iuand()

> **iuand**(`num`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:56

#### Parameters

##### num

`any`

#### Returns

`this`

***

### iuor()

> **iuor**(`num`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:52

#### Parameters

##### num

`any`

#### Returns

`this`

***

### iushln()

> **iushln**(`bits`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:80

#### Parameters

##### bits

`any`

#### Returns

`this`

***

### iushrn()

> **iushrn**(`bits`, `hint`, `extended`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:82

#### Parameters

##### bits

`any`

##### hint

`any`

##### extended

`any`

#### Returns

`this`

***

### iuxor()

> **iuxor**(`num`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:60

#### Parameters

##### num

`any`

#### Returns

`this`

***

### ixor()

> **ixor**(`num`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:61

#### Parameters

##### num

`any`

#### Returns

`this`

***

### lt()

> **lt**(`num`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:132

#### Parameters

##### num

`any`

#### Returns

`boolean`

***

### lte()

> **lte**(`num`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:134

#### Parameters

##### num

`any`

#### Returns

`boolean`

***

### lten()

> **lten**(`num`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:133

#### Parameters

##### num

`any`

#### Returns

`boolean`

***

### ltn()

> **ltn**(`num`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:131

#### Parameters

##### num

`any`

#### Returns

`boolean`

***

### maskn()

> **maskn**(`bits`): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:90

#### Parameters

##### bits

`any`

#### Returns

[`BN`](BN.md)

***

### mod()

> **mod**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:105

#### Parameters

##### num

`any`

#### Returns

`any`

***

### modn()

> **modn**(`num`): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:108

#### Parameters

##### num

`any`

#### Returns

`number`

***

### mul()

> **mul**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:72

#### Parameters

##### num

`any`

#### Returns

`any`

***

### mulf()

> **mulf**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:73

#### Parameters

##### num

`any`

#### Returns

`any`

***

### muln()

> **muln**(`num`): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:76

#### Parameters

##### num

`any`

#### Returns

[`BN`](BN.md)

***

### mulTo()

> **mulTo**(`num`, `out`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:71

#### Parameters

##### num

`any`

##### out

`any`

#### Returns

`any`

***

### neg()

> **neg**(): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:50

#### Returns

[`BN`](BN.md)

***

### notn()

> **notn**(`width`): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:65

#### Parameters

##### width

`any`

#### Returns

[`BN`](BN.md)

***

### or()

> **or**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:54

#### Parameters

##### num

`any`

#### Returns

`any`

***

### pow()

> **pow**(`num`): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:79

#### Parameters

##### num

`any`

#### Returns

[`BN`](BN.md)

***

### redAdd()

> **redAdd**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:141

#### Parameters

##### num

`any`

#### Returns

`any`

***

### redIAdd()

> **redIAdd**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:142

#### Parameters

##### num

`any`

#### Returns

`any`

***

### redIMul()

> **redIMul**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:147

#### Parameters

##### num

`any`

#### Returns

`any`

***

### redInvm()

> **redInvm**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:151

#### Returns

`any`

***

### redISqr()

> **redISqr**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:149

#### Returns

`any`

***

### redISub()

> **redISub**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:144

#### Parameters

##### num

`any`

#### Returns

`any`

***

### redMul()

> **redMul**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:146

#### Parameters

##### num

`any`

#### Returns

`any`

***

### redNeg()

> **redNeg**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:152

#### Returns

`any`

***

### redPow()

> **redPow**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:153

#### Parameters

##### num

`any`

#### Returns

`any`

***

### redShl()

> **redShl**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:145

#### Parameters

##### num

`any`

#### Returns

`any`

***

### redSqr()

> **redSqr**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:148

#### Returns

`any`

***

### redSqrt()

> **redSqrt**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:150

#### Returns

`any`

***

### redSub()

> **redSub**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:143

#### Parameters

##### num

`any`

#### Returns

`any`

***

### setn()

> **setn**(`bit`, `val`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:66

#### Parameters

##### bit

`any`

##### val

`any`

#### Returns

`this`

***

### shln()

> **shln**(`bits`): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:84

#### Parameters

##### bits

`any`

#### Returns

[`BN`](BN.md)

***

### shrn()

> **shrn**(`bits`): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:86

#### Parameters

##### bits

`any`

#### Returns

[`BN`](BN.md)

***

### sqr()

> **sqr**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:77

#### Returns

`any`

***

### strip()

> **strip**(): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:33

#### Returns

`this`

***

### sub()

> **sub**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:70

#### Parameters

##### num

`any`

#### Returns

`any`

***

### subn()

> **subn**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:95

#### Parameters

##### num

`any`

#### Returns

`any`

***

### testn()

> **testn**(`bit`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:88

#### Parameters

##### bit

`any`

#### Returns

`boolean`

***

### toArray()

> **toArray**(`endian`, `length`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:40

#### Parameters

##### endian

`any`

##### length

`any`

#### Returns

`any`

***

### toArrayLike()

> **toArrayLike**(`ArrayType`, `endian`, `length`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:41

#### Parameters

##### ArrayType

`any`

##### endian

`any`

##### length

`any`

#### Returns

`any`

***

### toBuffer()

> **toBuffer**(`endian`, `length`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:39

#### Parameters

##### endian

`any`

##### length

`any`

#### Returns

`any`

***

### toJSON()

> **toJSON**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:38

#### Returns

`string`

***

### toNumber()

> **toNumber**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:37

#### Returns

`any`

***

### toRed()

> **toRed**(`ctx`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:137

#### Parameters

##### ctx

`any`

#### Returns

`any`

***

### toString()

> **toString**(`base`, `padding`): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:36

#### Parameters

##### base

`any`

##### padding

`any`

#### Returns

`string`

***

### toTwos()

> **toTwos**(`width`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:47

#### Parameters

##### width

`any`

#### Returns

`any`

***

### uand()

> **uand**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:59

#### Parameters

##### num

`any`

#### Returns

`any`

***

### ucmp()

> **ucmp**(`num`): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:126

#### Parameters

##### num

`any`

#### Returns

`number`

***

### umod()

> **umod**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:106

#### Parameters

##### num

`any`

#### Returns

`any`

***

### uor()

> **uor**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:55

#### Parameters

##### num

`any`

#### Returns

`any`

***

### ushln()

> **ushln**(`bits`): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:85

#### Parameters

##### bits

`any`

#### Returns

[`BN`](BN.md)

***

### ushrn()

> **ushrn**(`bits`): [`BN`](BN.md)

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:87

#### Parameters

##### bits

`any`

#### Returns

[`BN`](BN.md)

***

### uxor()

> **uxor**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:63

#### Parameters

##### num

`any`

#### Returns

`any`

***

### xor()

> **xor**(`num`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:62

#### Parameters

##### num

`any`

#### Returns

`any`

***

### zeroBits()

> **zeroBits**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/bn.d.cts:45

#### Returns

`number`
