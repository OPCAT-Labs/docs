[**scrypt-ts-opcat v1.0.1**](../README.md)

***

[scrypt-ts-opcat](../README.md) / Transaction

# Class: Transaction

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:12

Represents a transaction, a set of inputs and outputs to change ownership of tokens

## Param

Optional serialized data to initialize the transaction.
Can be a hex string, Buffer, plain object, or another Transaction instance.

## Throws

If invalid serialization format is provided.

## Constructors

### new Transaction()

> **new Transaction**(`serialized`?): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:24

Represents a transaction, a set of inputs and outputs to change ownership of tokens

#### Parameters

##### serialized?

`any`

Optional serialized data to initialize the transaction.
Can be a hex string, Buffer, plain object, or another Transaction instance.

#### Returns

[`Transaction`](Transaction.md)

#### Throws

If invalid serialization format is provided.

## Properties

### \_changeAddress

> **\_changeAddress**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:165

***

### \_changeData

> **\_changeData**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:166

***

### \_changeIndex

> **\_changeIndex**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:163

***

### \_changeScript

> **\_changeScript**: [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:164

***

### \_fee

> **\_fee**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:167

***

### \_feePerKb

> **\_feePerKb**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:294

***

### \_inputAmount

> **\_inputAmount**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:27

***

### \_inputsMap

> **\_inputsMap**: `Map`\<`any`, `any`\>

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:29

***

### \_outputAmount

> **\_outputAmount**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:28

***

### \_outputsMap

> **\_outputsMap**: `Map`\<`any`, `any`\>

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:30

***

### \_privateKey

> **\_privateKey**: `Buffer` \| `Buffer`[]

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:31

***

### \_sigType

> **\_sigType**: `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:32

***

### hash

> `readonly` **hash**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:34

***

### id

> `readonly` **id**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:35

***

### inputs

> **inputs**: `any`[]

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:25

Transaction input objects.

***

### nLockTime

> **nLockTime**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:145

***

### outputs

> **outputs**: `any`[]

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:26

Transaction output objects.

***

### sealed

> **sealed**: `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:33

Indicates if transaction is finalized.

***

### toObject()

> **toObject**: () => `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:152

Converts the Transaction object to a plain JavaScript object (POJO) for serialization.
Includes transaction details like hash, version, inputs, outputs, and lock time.
Optionally includes change script, change address, change index, and fee if they are defined.

#### Returns

`any`

A plain object representation of the transaction.

***

### toString()

> **toString**: () => `string`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:64

#### Returns

`string`

***

### uncheckedSerialize()

> **uncheckedSerialize**: () => `string`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:63

Serializes the transaction to a hexadecimal string.
This method is aliased as `toString()` and `toHex()` for convenience.

#### Returns

`string`

Hexadecimal representation of the transaction.

***

### version

> **version**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:144

## Accessors

### inputAmount

#### Get Signature

> **get** **inputAmount**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:36

##### Returns

`number`

***

### outputAmount

#### Get Signature

> **get** **outputAmount**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:37

##### Returns

`number`

## Methods

### \_isMissingSignatures()

> **\_isMissingSignatures**(`opts`): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:96

Checks if the transaction is missing signatures.

#### Parameters

##### opts

Options object.

###### disableIsFullySigned?

`boolean`

If true, skips the check.

#### Returns

`any`

Returns MissingSignatures error if not fully signed, otherwise undefined.

***

### addData()

> **addData**(`value`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:337

Add an OP_RETURN output to the transaction.

Beware that this resets all the signatures for inputs (in further versions,
SIGHASH_SINGLE or SIGHASH_NONE signatures will not be reset).

#### Parameters

##### value

the data to be stored in the OP_RETURN output.
   In case of a string, the UTF-8 representation will be stored

`string` | `Buffer`

#### Returns

[`Transaction`](Transaction.md)

this, for chaining

***

### addDummyInput()

> **addDummyInput**(`script`, `satoshis`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:624

Adds a dummy input to the transaction with the specified script and satoshis.
The dummy input uses a placeholder script and a fixed previous transaction ID.

#### Parameters

##### script

[`Script`](Script.md)

The script to use for the output of the dummy input.

##### satoshis

`number`

The amount in satoshis for the output of the dummy input.

#### Returns

[`Transaction`](Transaction.md)

The transaction instance for chaining.

***

### addInput()

> **addInput**(`input`, `outputScript`?, `satoshis`?, `data`?): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:261

Add an input to this transaction. The input must be an instance of the `Input` class.
It should have information about the Output that it's spending, but if it's not already
set, three additional parameters, `outputScript`, `satoshis` and `data` can be provided.

#### Parameters

##### input

[`Input`](Input.md)

The input to add

##### outputScript?

The output script (required if input doesn't have output)

`string` | [`Script`](Script.md)

##### satoshis?

`number`

The satoshis amount (required if input doesn't have output)

##### data?

Additional data for the output

`string` | `Buffer`

#### Returns

[`Transaction`](Transaction.md)

The transaction instance for chaining

#### Throws

If input has no output and missing required params

***

### addInputFromPrevTx()

> **addInputFromPrevTx**(`prevTx`, `outputIndex`?): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:615

Adds an input to the transaction from a previous transaction's output.

#### Parameters

##### prevTx

[`Transaction`](Transaction.md)

The previous transaction containing the output to spend.

##### outputIndex?

`number`

The index of the output in the previous transaction.

#### Returns

[`Transaction`](Transaction.md)

The transaction instance for chaining.

#### Throws

If prevTx is not a valid Transaction.

***

### addOutput()

> **addOutput**(`output`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:355

Add an output to the transaction.

#### Parameters

##### output

[`Output`](Output.md)

the output to add.

#### Returns

[`Transaction`](Transaction.md)

this, for chaining

***

### addSafeData()

> **addSafeData**(`value`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:348

Add an OP_FALSE | OP_RETURN output to the transaction.

Beware that this resets all the signatures for inputs (in further versions,
SIGHASH_SINGLE or SIGHASH_NONE signatures will not be reset).

#### Parameters

##### value

the data to be stored in the OP_RETURN output.
   In case of a string, the UTF-8 representation will be stored

`string` | `Buffer`

#### Returns

[`Transaction`](Transaction.md)

this, for chaining

***

### applySignature()

> **applySignature**(`signature`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:473

Add a signature to the transaction

#### Parameters

##### signature

###### inputIndex

`number`

###### publicKey

`PublicKey`

###### signature

[`Signature`](../namespaces/crypto/classes/Signature.md)

###### sigtype

`number`

#### Returns

[`Transaction`](Transaction.md)

this, for chaining

***

### change()

> **change**(`address`, `data`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:305

Set the change address for this transaction

Beware that this resets all the signatures for inputs (in further versions,
SIGHASH_SINGLE or SIGHASH_NONE signatures will not be reset).

#### Parameters

##### address

[`Address`](Address.md)

An address for change to be sent to.

##### data

The data to be stored in the change output.

`string` | `Buffer`

#### Returns

[`Transaction`](Transaction.md)

this, for chaining

***

### checkedSerialize()

> **checkedSerialize**(`opts`): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:73

Retrieve a hexa string that can be used with bitcoind's CLI interface
(decoderawtransaction, sendrawtransaction)

#### Parameters

##### opts

`any`

allows to skip certain tests. {@see Transaction#serialize}

#### Returns

`string`

***

### checkFeeRate()

> **checkFeeRate**(`feePerKb`?): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:581

Checks if the transaction's fee rate meets or exceeds the expected rate.

#### Parameters

##### feePerKb?

`number`

Optional fee per KB (in satoshis). Falls back to instance or default fee.

#### Returns

`boolean`

True if actual fee rate (fee/size) >= expected rate.

***

### clearOutputs()

> **clearOutputs**(): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:361

Remove all outputs from the transaction.

#### Returns

[`Transaction`](Transaction.md)

this, for chaining

***

### clone()

> **clone**(): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:57

Creates a deep clone of the Transaction instance.

#### Returns

[`Transaction`](Transaction.md)

A new Transaction instance with cloned inputs.

***

### dummyChange()

> **dummyChange**(): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:633

Same as change(addresss), but using the address of Transaction.DUMMY_PRIVATEKEY as default change address

Beware that this resets all the signatures for inputs (in further versions,
SIGHASH_SINGLE or SIGHASH_NONE signatures will not be reset).

#### Returns

[`Transaction`](Transaction.md)

this, for chaining

***

### fee()

> **fee**(`amount`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:284

Manually set the fee for this transaction. Beware that this resets all the signatures
for inputs (in further versions, SIGHASH_SINGLE or SIGHASH_NONE signatures will not
be reset).

#### Parameters

##### amount

`number`

satoshis to be sent

#### Returns

[`Transaction`](Transaction.md)

this, for chaining

***

### feePerKb()

> **feePerKb**(`amount`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:293

Manually set the fee per KB for this transaction. Beware that this resets all the signatures
for inputs (in further versions, SIGHASH_SINGLE or SIGHASH_NONE signatures will not
be reset).

#### Parameters

##### amount

`number`

satoshis per KB to be sent

#### Returns

[`Transaction`](Transaction.md)

this, for chaining

***

### from()

> **from**(`utxo`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:248

Add an input to this transaction. This is a high level interface
to add an input, for more control, use @{link Transaction#addInput}.

Can receive, as output information, the output of bitcoind's `listunspent` command,
and a slightly fancier format recognized by opcat:

```
{
 address: 'mszYqVnqKoQx4jcTdJXxwKAissE3Jbrrc1',
 txId: 'a477af6b2667c29670467e4e0728b685ee07b240235771862318e29ddbe58458',
 outputIndex: 0,
 script: Script.empty(),
 satoshis: 1020000
}
```
Where `address` can be either a string or a opcat Address object. The
same is true for `script`, which can be a string or a opcat Script.

Beware that this resets all the signatures for inputs (in further versions,
SIGHASH_SINGLE or SIGHASH_NONE signatures will not be reset).

#### Parameters

##### utxo

`any`

#### Returns

[`Transaction`](Transaction.md)

The transaction instance for chaining.

#### Example

```javascript
var transaction = new Transaction();

// From a pay to public key hash output from bitcoind's listunspent
transaction.from({'txid': '0000...', vout: 0, amount: 0.1, scriptPubKey: 'OP_DUP ...'});

// From a pay to public key hash output
transaction.from({'txId': '0000...', outputIndex: 0, satoshis: 1000, script: 'OP_DUP ...'});

```

***

### fromBuffer()

> **fromBuffer**(`buffer`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:136

Initializes the transaction from a buffer.

#### Parameters

##### buffer

`Buffer`

The buffer containing transaction data.

#### Returns

[`Transaction`](Transaction.md)

The transaction instance.

***

### fromBufferReader()

> **fromBufferReader**(`reader`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:143

Reads transaction data from a buffer reader and populates the transaction instance.

#### Parameters

##### reader

[`BufferReader`](../namespaces/encoding/classes/BufferReader.md)

The buffer reader containing transaction data.

#### Returns

[`Transaction`](Transaction.md)

The transaction instance with populated data.

#### Throws

If no transaction data is received (reader is finished).

***

### fromObject()

> **fromObject**(`arg`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:162

Creates a Transaction instance from a plain object or another Transaction.
Handles conversion of inputs/outputs and other transaction properties.

#### Parameters

##### arg

`any`

Either a transaction object or Transaction instance

#### Returns

[`Transaction`](Transaction.md)

The populated Transaction instance

#### Throws

If argument is not an object or Transaction instance

***

### fromString()

> **fromString**(`string`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:200

Converts a hex string into a transaction buffer and initializes the transaction.

#### Parameters

##### string

`string`

Hex string representation of the transaction data.

#### Returns

[`Transaction`](Transaction.md)

The transaction instance initialized from the hex string.

***

### getChangeAddress()

> **getChangeAddress**(): [`Address`](Address.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:315

Gets the change address for this transaction.

#### Returns

[`Address`](Address.md)

The change address if set, otherwise null.

***

### getChangeAmount()

> **getChangeAmount**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:570

Gets the amount of change (in satoshis) for this transaction.

#### Returns

`number`

The change amount in satoshis, or 0 if no change exists.

***

### getChangeOutput()

> **getChangeOutput**(): [`Output`](Output.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:310

Gets the change output from the transaction outputs.

#### Returns

[`Output`](Output.md)

The change output object if defined, otherwise null.

***

### getEstimateFee()

> **getEstimateFee**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:575

Gets the estimated fee for the transaction.

#### Returns

`number`

The estimated fee value.

***

### getEstimateSize()

> **getEstimateSize**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:396

Gets the estimated size of the transaction.

#### Returns

`number`

The estimated size in bytes.

***

### getFee()

> **getFee**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:384

Calculates the fee of the transaction.

If there's a fixed fee set, return that.

If there is no change output set, the fee is the
total value of the outputs minus inputs. Note that
a serialized transaction only specifies the value
of its outputs. (The value of inputs are recorded
in the previous transaction outputs being spent.)
This method therefore raises a "MissingPreviousOutput"
error when called on a serialized transaction.

If there's no fee set and no change address,
estimate the fee based on size.

#### Returns

`number`

fee of this transaction in satoshis

***

### getInputAmount()

> **getInputAmount**(`inputIndex`): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:653

Gets the amount of satoshis for a specific transaction input.

#### Parameters

##### inputIndex

`number`

The index of the input to query.

#### Returns

`number`

The satoshis amount of the specified input.

#### Throws

If the input at the specified index doesn't exist.

***

### getLockTime()

> **getLockTime**(): `number` \| `Date`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:194

Returns a semantic version of the transaction's nLockTime.

#### Returns

`number` \| `Date`

If nLockTime is 0, it returns null,
 if it is < 500000000, it returns a block height (number)
 else it returns a Date object.

***

### getOutputAmount()

> **getOutputAmount**(`outputIndex`): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:660

Gets the output amount in satoshis for the specified output index.

#### Parameters

##### outputIndex

`number`

The index of the output to retrieve.

#### Returns

`number`

The output amount in satoshis.

#### Throws

If the output index is invalid.

***

### getPreimage()

> **getPreimage**(`inputIndex`, `sigtype`?, `isLowS`?): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:599

Gets the preimage for a transaction input.

#### Parameters

##### inputIndex

`number`

The index of the input to get the preimage for.

##### sigtype?

`number`

The signature hash type.

##### isLowS?

`boolean`

Whether to use low-S signatures.

#### Returns

`any`

The preimage for the specified input.

***

### getSerializationError()

> **getSerializationError**(`opts`): `Error`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:86

Retrieve a possible error that could appear when trying to serialize and
broadcast this transaction.

#### Parameters

##### opts

`any`

allows to skip certain tests. {@see Transaction#serialize}

#### Returns

`Error`

***

### getSignature()

> **getSignature**(`inputIndex`, `privateKeys`?, `sigtypes`?): `string` \| `any`[]

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:607

Gets the signature(s) for a transaction input.

#### Parameters

##### inputIndex

`number`

Index of the input to sign.

##### privateKeys?

Private key(s) to sign with. Defaults to input's privateKey or transaction's _privateKey.

`string` | `any`[] | `Buffer`

##### sigtypes?

`number`

Signature hash type. Defaults to SIGHASH_ALL.

#### Returns

`string` \| `any`[]

- Single signature hex string or array of signatures. Returns empty array if no privateKeys provided.

***

### getSignatures()

> **getSignatures**(`privKey`, `sigtype`?): `any`[]

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:462

Generates signatures for all inputs in the transaction using the provided private key.

#### Parameters

##### privKey

The private key to sign with (can be string or PrivateKey instance).

`string` | [`PrivateKey`](PrivateKey.md)

##### sigtype?

`number`

The signature hash type (defaults to SIGHASH_ALL).

#### Returns

`any`[]

Array of generated signatures for the transaction inputs.

***

### getUnspentValue()

> **getUnspentValue**(): `number`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:390

Calculates the unspent value (difference between input and output amounts) of the transaction.

#### Returns

`number`

The unspent value (input amount minus output amount).

***

### hasAllUtxoInfo()

> **hasAllUtxoInfo**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:275

Returns true if the transaction has enough info on all inputs to be correctly validated

#### Returns

`boolean`

***

### hashForSignature()

> **hashForSignature**(`inputIndex`, `hashType`): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:118

Calculates the double SHA-256 hash of the transaction preimage for signature verification.
The resulting hash is returned in reverse byte order (little-endian).

#### Parameters

##### inputIndex

`number`

Index of the input being signed

##### hashType

`number`

SIGHASH type flag

#### Returns

`Buffer`

The hash result in little-endian format

***

### inspect()

> **inspect**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:104

Returns a string representation of the Transaction object for debugging/inspection.
The format is: '<Transaction: [serializedData]>' where serializedData comes from uncheckedSerialize().

#### Returns

`string`

Formatted transaction inspection string.

***

### invalidSatoshis()

> **invalidSatoshis**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:78

Checks if any output in the transaction has invalid satoshis.

#### Returns

`boolean`

True if at least one output has invalid satoshis, false otherwise.

***

### isCoinbase()

> **isCoinbase**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:522

Checks if the transaction is a coinbase transaction.
A coinbase transaction has exactly one input and that input is null.

#### Returns

`boolean`

True if the transaction is a coinbase, false otherwise.

***

### isFullySigned()

> **isFullySigned**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:485

Checks if all inputs in the transaction are fully signed.

#### Returns

`boolean`

True if all inputs have valid signatures, false otherwise.

#### Throws

If any input has an unrecognized script kind
        or insufficient information to verify signatures (common when deserializing transactions).

***

### isSealed()

> **isSealed**(): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:591

Checks if the transaction is sealed.

#### Returns

`boolean`

True if the transaction is sealed, false otherwise.

***

### isValidSignature()

> **isValidSignature**(`signature`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:492

Validates a signature for a transaction input.

#### Parameters

##### signature

`any`

The signature object to validate.

#### Returns

`boolean`

True if the signature is valid for the specified input.

#### Throws

If the input script is unrecognized or lacks execution info.

***

### lockUntilBlockHeight()

> **lockUntilBlockHeight**(`height`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:186

Sets the transaction's lock time to a specific block height.
Validates the height is within allowed bounds (0 <= height < NLOCKTIME_BLOCKHEIGHT_LIMIT).
Updates sequence numbers of inputs to enable lock time if using default sequence.

#### Parameters

##### height

`number`

The block height to lock until (must be non-negative and below limit)

#### Returns

[`Transaction`](Transaction.md)

Returns the transaction instance for chaining

#### Throws

If height exceeds block height limit

#### Throws

If height is negative

***

### lockUntilDate()

> **lockUntilDate**(`time`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:176

Sets nLockTime so that transaction is not valid until the desired date(a
timestamp in seconds since UNIX epoch is also accepted)

#### Parameters

##### time

The lock time as a timestamp (number) or Date object.

`number` | `Date`

#### Returns

[`Transaction`](Transaction.md)

The transaction instance for chaining.

#### Throws

If the time is a number below NLOCKTIME_BLOCKHEIGHT_LIMIT.

***

### prevouts()

> **prevouts**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:586

Serializes the transaction's inputs (prevTxId and outputIndex) into a hex string.

#### Returns

`string`

Hex-encoded serialized input data.

***

### removeInput()

> **removeInput**(`txId`, `outputIndex`?): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:444

Removes an input from the transaction by either its index or txId/outputIndex pair.

#### Parameters

##### txId

Transaction ID (as hex string) or input index if outputIndex is omitted.

`string` | `number`

##### outputIndex?

`number`

Output index of the input to remove (required if txId is string).

#### Returns

`void`

#### Throws

If input index is out of bounds.

***

### removeOutput()

> **removeOutput**(`index`): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:403

Removes an output from the transaction at the specified index and updates the change output.

#### Parameters

##### index

`number`

The index of the output to remove.

#### Returns

`void`

***

### seal()

> **seal**(): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:559

Seals the transaction by processing all outputs and inputs.
- For each output, executes the registered callback to generate the final output.
- Updates the change output if applicable.
- For each input, generates and sets the unlock script using the registered callback.
- If a private key is provided, signs the transaction.
- Marks the transaction as sealed and returns the instance.

#### Returns

[`Transaction`](Transaction.md)

The sealed transaction instance.

***

### serialize()

> **serialize**(`unsafe`?): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:52

Retrieve a hexa string that can be used with bitcoind's CLI interface
(decoderawtransaction, sendrawtransaction)

#### Parameters

##### unsafe?

`any`

if true, skip all tests. if it's an object,
  it's expected to contain a set of flags to skip certain tests:
* `disableAll`: disable all checks
* `disableLargeFees`: disable checking for fees that are too large
* `disableIsFullySigned`: disable checking if all inputs are fully signed
* `disableDustOutputs`: disable checking if there are no outputs that are dust amounts
* `disableMoreOutputThanInput`: disable checking if the transaction spends more bitcoins than the sum of the input amounts

#### Returns

`string`

***

### setInputScript()

> **setInputScript**(`options`, `unlockScriptOrCallback`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:533

Sets the input script for a transaction input.

#### Parameters

##### options

`any`

Either an input index number or an options object

##### unlockScriptOrCallback

Either a script or callback function that returns a script

`Function` | [`Script`](Script.md)

#### Returns

[`Transaction`](Transaction.md)

Returns the transaction instance for chaining

***

### setInputSequence()

> **setInputSequence**(`inputIndex`, `sequence`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:540

Sets the sequence number for a specific transaction input.

#### Parameters

##### inputIndex

`number`

The index of the input to update.

##### sequence

`number`

The sequence number to set.

#### Returns

[`Transaction`](Transaction.md)

Returns the transaction instance for chaining.

***

### setLockTime()

> **setLockTime**(`nLockTime`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:565

Sets the lock time for the transaction.

#### Parameters

##### nLockTime

`number`

The lock time to set.

#### Returns

[`Transaction`](Transaction.md)

Returns the transaction instance for chaining.

***

### setOutput()

> **setOutput**(`outputIndex`, `outputOrcb`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:549

Sets an output at the specified index, either directly or via a callback function.
If a callback is provided, it will be invoked with the transaction instance to generate the output value.
Automatically updates the change output after setting.

#### Parameters

##### outputIndex

`number`

The index of the output to set

##### outputOrcb

`any`

The output value or a callback function that returns the output value

#### Returns

[`Transaction`](Transaction.md)

Returns the transaction instance for chaining

***

### shuffleOutputs()

> **shuffleOutputs**(): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:417

Randomize this transaction's outputs ordering. The shuffling algorithm is a
version of the Fisher-Yates shuffle.

#### Returns

[`Transaction`](Transaction.md)

this

***

### sign()

> **sign**(`privateKey`, `sigtype`?): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:455

Sign the transaction using one or more private keys.

It tries to sign each input, verifying that the signature will be valid
(matches a public key).

#### Parameters

##### privateKey

Private key(s) to sign the transaction with.

`Buffer` | `Buffer`[]

##### sigtype?

`number`

Optional signature type.

#### Returns

[`Transaction`](Transaction.md)

Returns the transaction instance for chaining.

#### Throws

Throws if not all UTXO information is available.

***

### sort()

> **sort**(): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:410

Sort a transaction's inputs and outputs according to BIP69

#### Returns

[`Transaction`](Transaction.md)

this

#### See

***

### sortInputs()

> **sortInputs**(`sortingFunction`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:436

Sort this transaction's inputs, according to a given sorting function that
takes an array as argument and returns a new array, with the same elements
but with a different order.

#### Parameters

##### sortingFunction

`Function`

#### Returns

[`Transaction`](Transaction.md)

this

***

### sortOutputs()

> **sortOutputs**(`sortingFunction`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:427

Sort this transaction's outputs, according to a given sorting function that
takes an array as argument and returns a new array, with the same elements
but with a different order. The argument function MUST NOT modify the order
of the original array

#### Parameters

##### sortingFunction

`Function`

#### Returns

[`Transaction`](Transaction.md)

this

***

### to()

> **to**(`address`, `amount`): [`Transaction`](Transaction.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:326

Add an output to the transaction.

Beware that this resets all the signatures for inputs (in further versions,
SIGHASH_SINGLE or SIGHASH_NONE signatures will not be reset).

#### Parameters

##### address

`string` | [`Address`](Address.md) | [`Address`](Address.md)[]

##### amount

`number`

in satoshis

#### Returns

[`Transaction`](Transaction.md)

this, for chaining

***

### toBuffer()

> **toBuffer**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:109

Converts the transaction to a Buffer.

#### Returns

`Buffer`

The serialized transaction as a Buffer.

***

### toBufferWriter()

> **toBufferWriter**(`forTxHash`, `writer`?): [`BufferWriter`](../namespaces/encoding/classes/BufferWriter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:130

Serializes the transaction to a BufferWriter.

#### Parameters

##### forTxHash

`boolean`

Whether to serialize for transaction hash calculation (excludes some fields)

##### writer?

[`BufferWriter`](../namespaces/encoding/classes/BufferWriter.md)

Optional BufferWriter instance to write to

#### Returns

[`BufferWriter`](../namespaces/encoding/classes/BufferWriter.md)

The BufferWriter containing serialized transaction data

***

### toHex()

> **toHex**(): `string`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:65

#### Returns

`string`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:153

#### Returns

`any`

***

### toTxHashPreimage()

> **toTxHashPreimage**(): `Buffer`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:123

Converts the transaction to a hash preimage by serializing it into a buffer.

#### Returns

`Buffer`

The serialized transaction data as a buffer.

***

### uncheckedAddInput()

> **uncheckedAddInput**(`input`): `this`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:269

Add an input to this transaction, without checking that the input has information about
the output that it's spending.

#### Parameters

##### input

[`Input`](Input.md)

#### Returns

`this`

Transaction this, for chaining

***

### verify()

> **verify**(`notVerifyInput`?): `string` \| `true`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:516

Check that a transaction passes basic sanity tests. If not, return a string
describing the error. This function contains the same logic as
CheckTransaction in bitcoin core.

Checks include:
- Non-empty inputs and outputs
- Valid output satoshis (non-negative, not exceeding MAX_MONEY)
- No duplicate inputs
- Coinbase script size validation (if coinbase)
- Input null checks and verification (if not coinbase and notVerifyInput is false)

#### Parameters

##### notVerifyInput?

`boolean`

Whether to skip input verification

#### Returns

`string` \| `true`

Returns true if valid, or an error message string if invalid

***

### verifyInputScript()

> **verifyInputScript**(`inputIndex`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:646

Verifies the input script for a specific input index in the transaction.

#### Parameters

##### inputIndex

`number`

The index of the input to verify.

#### Returns

`boolean`

True if the input script is valid, false otherwise.

***

### verifyScript()

> **verifyScript**(`inputIndex`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:640

Verifies the script for a specific transaction input.

#### Parameters

##### inputIndex

`number`

Index of the input to verify.

#### Returns

`boolean`

True if the script verification passes.

#### Throws

If input at given index doesn't exist.

***

### verifySignature()

> **verifySignature**(`sig`, `pubkey`, `nin`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/transaction/transaction.d.cts:500

Verifies a signature for this transaction.

#### Parameters

##### sig

`Buffer`

The signature to verify.

##### pubkey

`Buffer`

The public key corresponding to the signature.

##### nin

`number`

The input index being signed.

#### Returns

`boolean`

True if the signature is valid, false otherwise.
