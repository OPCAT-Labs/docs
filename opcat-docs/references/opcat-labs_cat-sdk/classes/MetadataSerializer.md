[**@opcat-labs/cat-sdk v1.0.3**](../README.md)

***

[@opcat-labs/cat-sdk](../README.md) / MetadataSerializer

# Class: MetadataSerializer

Defined in: [packages/cat-sdk/src/lib/metadata.ts:92](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/lib/metadata.ts#L92)

Metadata serializer for CAT20 and CAT721, serialize the metadata and content or ordinals like format, deserialize the metadata and content from ordinals like format

## Constructors

### new MetadataSerializer()

> **new MetadataSerializer**(): [`MetadataSerializer`](MetadataSerializer.md)

#### Returns

[`MetadataSerializer`](MetadataSerializer.md)

## Properties

### CAT\_TAG

> `readonly` `static` **CAT\_TAG**: `"03636174"` = `'03636174'`

Defined in: [packages/cat-sdk/src/lib/metadata.ts:93](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/lib/metadata.ts#L93)

***

### EnvelopeMarker

> `readonly` `static` **EnvelopeMarker**: `object`

Defined in: [packages/cat-sdk/src/lib/metadata.ts:95](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/lib/metadata.ts#L95)

#### Collection

> **Collection**: `string` = `'52'`

#### NFT

> **NFT**: `string` = `'53'`

#### Token

> **Token**: `string` = `'51'`

***

### LIMIT

> `readonly` `static` **LIMIT**: `520` = `520`

Defined in: [packages/cat-sdk/src/lib/metadata.ts:94](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/lib/metadata.ts#L94)

***

### ORDINAL\_TAGS

> `readonly` `static` **ORDINAL\_TAGS**: `object`

Defined in: [packages/cat-sdk/src/lib/metadata.ts:100](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/lib/metadata.ts#L100)

#### CONTENT\_BODY

> **CONTENT\_BODY**: `string` = `'00'`

#### CONTENT\_ENCODING

> **CONTENT\_ENCODING**: `string` = `'59'`

#### CONTENT\_TYPE

> **CONTENT\_TYPE**: `string` = `'51'`

#### DELEGATE

> **DELEGATE**: `string` = `'63'`

#### METADATA

> **METADATA**: `string` = `'55'`

#### METAPROTOCOL

> **METAPROTOCOL**: `string` = `'57'`

#### PARENT

> **PARENT**: `string` = `'52'`

#### POINTER

> **POINTER**: `string` = `'53'`

***

### ORDINAL\_TAGS\_BYTES

> `readonly` `static` **ORDINAL\_TAGS\_BYTES**: `object`

Defined in: [packages/cat-sdk/src/lib/metadata.ts:112](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/lib/metadata.ts#L112)

#### CONTENT\_BODY

> **CONTENT\_BODY**: `string` = `'01'`

#### CONTENT\_ENCODING

> **CONTENT\_ENCODING**: `string` = `'09'`

#### CONTENT\_TYPE

> **CONTENT\_TYPE**: `string` = `'01'`

#### DELEGATE

> **DELEGATE**: `string` = `'0b'`

#### METADATA

> **METADATA**: `string` = `'05'`

#### METAPROTOCOL

> **METAPROTOCOL**: `string` = `'07'`

#### PARENT

> **PARENT**: `string` = `'02'`

#### POINTER

> **POINTER**: `string` = `'03'`

## Methods

### decodeContenType()

> `static` **decodeContenType**(`contentType`): `string`

Defined in: [packages/cat-sdk/src/lib/metadata.ts:209](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/lib/metadata.ts#L209)

decode the contentType from hex to utf8 string

#### Parameters

##### contentType

`string`

#### Returns

`string`

***

### deserialize()

> `static` **deserialize**(`hex`): `null` \| \{ `info`: \{ `contentBody`: `string`; `contentEncoding`: `string`; `contentType`: `string`; `delegate`: `string`; `metadata`: `null` \| `Record`\<`string`, `any`\>; `metaprotocol`: `string`; `parent`: `string`; `pointer`: `string`; \}; `type`: `"Token"` \| `"Collection"` \| `"NFT"`; \}

Defined in: [packages/cat-sdk/src/lib/metadata.ts:227](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/lib/metadata.ts#L227)

deserialize the metadata and content from ordinals like format

#### Parameters

##### hex

`string`

#### Returns

`null` \| \{ `info`: \{ `contentBody`: `string`; `contentEncoding`: `string`; `contentType`: `string`; `delegate`: `string`; `metadata`: `null` \| `Record`\<`string`, `any`\>; `metaprotocol`: `string`; `parent`: `string`; `pointer`: `string`; \}; `type`: `"Token"` \| `"Collection"` \| `"NFT"`; \}

***

### serialize()

> `static` **serialize**(`type`, `info`): `string`

Defined in: [packages/cat-sdk/src/lib/metadata.ts:172](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/cat-sdk/src/lib/metadata.ts#L172)

serialize the CAT20 or CAT721 metadata and content

#### Parameters

##### type

`"Token"` | `"Collection"` | `"NFT"`

##### info

###### content?

\{ `body`: `string`; `type`: `string`; \}

###### content.body

`string`

###### content.type

`string`

###### metadata

`Record`\<`string`, `any`\>

#### Returns

`string`
