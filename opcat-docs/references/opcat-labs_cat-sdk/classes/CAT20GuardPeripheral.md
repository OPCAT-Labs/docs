[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / CAT20GuardPeripheral

# Class: CAT20GuardPeripheral

Defined in: [packages/cat-sdk/src/utils/contractPeripheral.ts:151](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/utils/contractPeripheral.ts#L151)

Helper class for CAT20 guard peripheral operations

## Constructors

### new CAT20GuardPeripheral()

> **new CAT20GuardPeripheral**(): [`CAT20GuardPeripheral`](CAT20GuardPeripheral.md)

#### Returns

[`CAT20GuardPeripheral`](CAT20GuardPeripheral.md)

## Methods

### createBurnGuard()

> `static` **createBurnGuard**(`tokenInputs`, `inputStateHashes`): `object`

Defined in: [packages/cat-sdk/src/utils/contractPeripheral.ts:227](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/utils/contractPeripheral.ts#L227)

#### Parameters

##### tokenInputs

`object`[]

##### inputStateHashes

`ByteString`[]

#### Returns

`object`

##### guardState

> **guardState**: [`CAT20GuardConstState`](../type-aliases/CAT20GuardConstState.md)

##### outputTokens

> **outputTokens**: `FixedArray`\<`undefined` \| [`CAT20State`](../type-aliases/CAT20State.md), `10`\>

***

### createTransferGuard()

> `static` **createTransferGuard**(`tokenInputs`, `receivers`): `object`

Defined in: [packages/cat-sdk/src/utils/contractPeripheral.ts:152](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/utils/contractPeripheral.ts#L152)

#### Parameters

##### tokenInputs

`object`[]

##### receivers

`object`[]

#### Returns

`object`

##### guardState

> **guardState**: [`CAT20GuardConstState`](../type-aliases/CAT20GuardConstState.md)

##### outputTokens

> **outputTokens**: `FixedArray`\<`undefined` \| [`CAT20State`](../type-aliases/CAT20State.md), `10`\>

***

### getBackTraceInfo()

> `static` **getBackTraceInfo**(`minterScrtptHash`, `inputTokenUtxos`, `provider`): `Promise`\<`object`[]\>

Defined in: [packages/cat-sdk/src/utils/contractPeripheral.ts:268](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/utils/contractPeripheral.ts#L268)

#### Parameters

##### minterScrtptHash

`string`

##### inputTokenUtxos

`UTXO`[]

##### provider

`UtxoProvider` & `ChainProvider`

#### Returns

`Promise`\<`object`[]\>
