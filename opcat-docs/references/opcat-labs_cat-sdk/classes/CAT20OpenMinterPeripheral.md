[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / CAT20OpenMinterPeripheral

# Class: CAT20OpenMinterPeripheral

Defined in: [packages/cat-sdk/src/utils/contractPeripheral.ts:58](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/utils/contractPeripheral.ts#L58)

Helper class for CAT20 open minter peripheral operations

## Constructors

### new CAT20OpenMinterPeripheral()

> **new CAT20OpenMinterPeripheral**(): [`CAT20OpenMinterPeripheral`](CAT20OpenMinterPeripheral.md)

#### Returns

[`CAT20OpenMinterPeripheral`](CAT20OpenMinterPeripheral.md)

## Methods

### createCAT20Contract()

> `static` **createCAT20Contract**(`minter`, `state`, `toAddr`): readonly \[[`CAT20`](CAT20.md), [`CAT20State`](../type-aliases/CAT20State.md)\]

Defined in: [packages/cat-sdk/src/utils/contractPeripheral.ts:126](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/utils/contractPeripheral.ts#L126)

#### Parameters

##### minter

[`CAT20OpenMinter`](CAT20OpenMinter.md)

##### state

[`CAT20OpenMinterState`](../interfaces/CAT20OpenMinterState.md)

##### toAddr

`ByteString`

#### Returns

readonly \[[`CAT20`](CAT20.md), [`CAT20State`](../type-aliases/CAT20State.md)\]

***

### createMinter()

> `static` **createMinter**(`tokenId`, `metadata`): [`CAT20OpenMinter`](CAT20OpenMinter.md)

Defined in: [packages/cat-sdk/src/utils/contractPeripheral.ts:107](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/utils/contractPeripheral.ts#L107)

#### Parameters

##### tokenId

`string`

##### metadata

[`OpenMinterCAT20Meta`](../interfaces/OpenMinterCAT20Meta.md)

#### Returns

[`CAT20OpenMinter`](CAT20OpenMinter.md)

***

### createNextMinters()

> `static` **createNextMinters**(`contract`, `state`): `object`

Defined in: [packages/cat-sdk/src/utils/contractPeripheral.ts:73](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/utils/contractPeripheral.ts#L73)

#### Parameters

##### contract

[`CAT20OpenMinter`](CAT20OpenMinter.md)

##### state

[`CAT20OpenMinterState`](../interfaces/CAT20OpenMinterState.md)

#### Returns

`object`

##### nextMinterStates

> **nextMinterStates**: [`CAT20OpenMinterState`](../interfaces/CAT20OpenMinterState.md)[]

##### splitAmountList

> **splitAmountList**: `FixedArray`\<`bigint`, `2`\>

***

### getSplitAmountList()

> `static` **getSplitAmountList**(`preRemainingSupply`, `isPremined`, `premineAmount`): `FixedArray`\<`bigint`, `2`\>

Defined in: [packages/cat-sdk/src/utils/contractPeripheral.ts:59](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/utils/contractPeripheral.ts#L59)

#### Parameters

##### preRemainingSupply

`bigint`

##### isPremined

`boolean`

##### premineAmount

`bigint`

#### Returns

`FixedArray`\<`bigint`, `2`\>
