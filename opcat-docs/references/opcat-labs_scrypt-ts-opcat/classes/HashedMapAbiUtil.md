[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / HashedMapAbiUtil

# Class: HashedMapAbiUtil

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:6](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L6)

## Constructors

### new HashedMapAbiUtil()

> **new HashedMapAbiUtil**(): [`HashedMapAbiUtil`](HashedMapAbiUtil.md)

#### Returns

[`HashedMapAbiUtil`](HashedMapAbiUtil.md)

## Properties

### SYMBOLS

> `readonly` `static` **SYMBOLS**: `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:7](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L7)

#### HASHED\_MAP\_SCRYPT\_TYPE

> **HASHED\_MAP\_SCRYPT\_TYPE**: `string` = `'__ScryptInternalHashedMap__'`

#### JS\_SPLITTERS

> **JS\_SPLITTERS**: `object`

##### JS\_SPLITTERS.BRACKET\_LEFT

> **BRACKET\_LEFT**: `string` = `'['`

##### JS\_SPLITTERS.BRACKET\_RIGHT

> **BRACKET\_RIGHT**: `string` = `']'`

##### JS\_SPLITTERS.DOT

> **DOT**: `string` = `'.'`

#### SCRYPT\_PREFIXERS

> **SCRYPT\_PREFIXERS**: `object`

##### SCRYPT\_PREFIXERS.HASHED\_MAP\_CTX\_TYPE

> **HASHED\_MAP\_CTX\_TYPE**: `string` = `'ScryptTSHashedMapCtx'`

##### SCRYPT\_PREFIXERS.HASHED\_MAP\_CTX\_VARIABLE

> **HASHED\_MAP\_CTX\_VARIABLE**: `string` = `'__scrypt_ts_hashedMapCtx__'`

#### SCRYPT\_SPLITTERS

> **SCRYPT\_SPLITTERS**: `object`

##### SCRYPT\_SPLITTERS.BRACKET\_LEFT

> **BRACKET\_LEFT**: `string` = `'__brl__'`

##### SCRYPT\_SPLITTERS.BRACKET\_RIGHT

> **BRACKET\_RIGHT**: `string` = `'__brr__'`

##### SCRYPT\_SPLITTERS.DOT

> **DOT**: `string` = `'__dot__'`

##### SCRYPT\_SPLITTERS.HASHED\_MAP\_CTX\_GENERIC\_TYPE\_SPLITTER

> **HASHED\_MAP\_CTX\_GENERIC\_TYPE\_SPLITTER**: `string` = `'_hm_'`

#### SCRYPT\_VARIABLES

> **SCRYPT\_VARIABLES**: `object`

##### SCRYPT\_VARIABLES.CUR\_STATE

> **CUR\_STATE**: `string` = `'__scrypt_ts_curState'`

##### SCRYPT\_VARIABLES.NEXT\_STATE

> **NEXT\_STATE**: `string` = `'__scrypt_ts_nextState'`

##### SCRYPT\_VARIABLES.STATE\_HELPER\_FUNCTION

> **STATE\_HELPER\_FUNCTION**: `string` = `'__scrypt__stateHelper'`

## Methods

### checkTwoHashedMapCtxTypesEqual()

> `static` **checkTwoHashedMapCtxTypesEqual**(`type1`, `artifact1`, `type2`, `artifact2`): `boolean`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:75](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L75)

#### Parameters

##### type1

`string`

##### artifact1

[`Artifact`](../interfaces/Artifact.md)

##### type2

`string`

##### artifact2

[`Artifact`](../interfaces/Artifact.md)

#### Returns

`boolean`

***

### exportHashedMapTrackerConfig()

> `static` **exportHashedMapTrackerConfig**(`contract`, `stateFieldPath`, `initialStates`, `updaters`): `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:169](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L169)

#### Parameters

##### contract

`AbstractContract`

##### stateFieldPath

`string`

##### initialStates

`any`[]

##### updaters

`object`[]

#### Returns

`object`

##### initialKVsList

> **initialKVsList**: `any`[]

##### type

> **type**: `object`

###### type.artifact

> **artifact**: `string`

###### type.scripthash

> **scripthash**: `any`

###### type.stateFieldPath

> **stateFieldPath**: `string`

##### updaters

> **updaters**: `object`[]

***

### fieldPathToJsSymbol()

> `static` **fieldPathToJsSymbol**(`fieldPath`): `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:36](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L36)

#### Parameters

##### fieldPath

`string`

#### Returns

`string`

***

### fieldPathToScryptSymbol()

> `static` **fieldPathToScryptSymbol**(`fieldPath`): `string`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:31](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L31)

#### Parameters

##### fieldPath

`string`

#### Returns

`string`

***

### findHashedMapFieldsInStateType()

> `static` **findHashedMapFieldsInStateType**(`artifact`): `string`[]

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:111](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L111)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

`string`[]

***

### getFieldListByPath()

> `static` **getFieldListByPath**(`fieldPath`): (\{ `type`: `"dot"`; `value`: `string`; \} \| \{ `type`: `"array"`; `value`: `number`; \})[]

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:151](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L151)

#### Parameters

##### fieldPath

`string`

#### Returns

(\{ `type`: `"dot"`; `value`: `string`; \} \| \{ `type`: `"array"`; `value`: `number`; \})[]

***

### getFieldValueByPath()

> `static` **getFieldValueByPath**(`state`, `path`): `any`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:130](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L130)

#### Parameters

##### state

`any`

##### path

`string`

#### Returns

`any`

***

### getHashedMapCtxByFunctionParam()

> `static` **getHashedMapCtxByFunctionParam**(`artifact`, `methodName`, `paramName`, `stateFieldPath`): [`ParamEntity`](../type-aliases/ParamEntity.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:55](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L55)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

##### methodName

`string`

##### paramName

`string`

##### stateFieldPath

`string`

#### Returns

[`ParamEntity`](../type-aliases/ParamEntity.md)

***

### getHashedMapCtxByState()

> `static` **getHashedMapCtxByState**(`artifact`, `stateFieldPath`): [`ParamEntity`](../type-aliases/ParamEntity.md)

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:42](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L42)

#### Parameters

##### artifact

[`Artifact`](../interfaces/Artifact.md)

##### stateFieldPath

`string`

#### Returns

[`ParamEntity`](../type-aliases/ParamEntity.md)

***

### getHashedMapGenericsByCtxType()

> `static` **getHashedMapGenericsByCtxType**(`ctxType`, `artifact`): `object`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:91](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L91)

#### Parameters

##### ctxType

`string`

##### artifact

[`Artifact`](../interfaces/Artifact.md)

#### Returns

`object`

##### keyType

> **keyType**: `string`

##### maxAccessKeys

> **maxAccessKeys**: `number`

##### valueType

> **valueType**: `string`

***

### setFieldValueByPath()

> `static` **setFieldValueByPath**(`state`, `path`, `value`): `any`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts:139](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/builtin-libs/hashedMap/hashedMapAbiUtil.ts#L139)

#### Parameters

##### state

`any`

##### path

`string`

##### value

`any`

#### Returns

`any`
