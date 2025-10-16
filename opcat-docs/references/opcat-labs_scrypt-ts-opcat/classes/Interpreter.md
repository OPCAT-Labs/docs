[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / Interpreter

# Class: Interpreter

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:15

Bitcoin transactions contain scripts. Each input has a script called the
scriptSig, and each output has a script called the scriptPubkey. To validate
an input, the input's script is concatenated with the referenced output script,
and the result is executed. If at the end of execution the stack contains a
"true" value, then the transaction is valid.

The primary way to use this class is via the verify function.
e.g., Interpreter().verify( ... );

## Param

Optional object to initialize the interpreter with.

## Constructors

### new Interpreter()

> **new Interpreter**(`obj`?): [`Interpreter`](Interpreter.md)

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:30

Bitcoin transactions contain scripts. Each input has a script called the
scriptSig, and each output has a script called the scriptPubkey. To validate
an input, the input's script is concatenated with the referenced output script,
and the result is executed. If at the end of execution the stack contains a
"true" value, then the transaction is valid.

The primary way to use this class is via the verify function.
e.g., Interpreter().verify( ... );

#### Parameters

##### obj?

`any`

Optional object to initialize the interpreter with.

#### Returns

[`Interpreter`](Interpreter.md)

A new Interpreter instance.

## Properties

### altstack

> **altstack**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:54

***

### errstr

> **errstr**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:46

***

### flags

> **flags**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:60

***

### nin

> **nin**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:97

***

### nonTopLevelReturnAfterGenesis

> **nonTopLevelReturnAfterGenesis**: `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:61

***

### nOpCount

> **nOpCount**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:57

***

### pbegincodehash

> **pbegincodehash**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:56

***

### pc

> **pc**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:55

***

### returned

> **returned**: `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:62

***

### satoshisBN

> **satoshisBN**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:98

***

### script

> **script**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:95

***

### stack

> **stack**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:53

***

### tx

> **tx**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:96

***

### vfElse

> **vfElse**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:59

***

### vfExec

> **vfExec**: `any`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:58

## Methods

### checkLockTime()

> **checkLockTime**(`nLockTime`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:146

Checks a locktime parameter with the transaction's locktime.
There are two times of nLockTime: lock-by-blockheight and lock-by-blocktime,
distinguished by whether nLockTime < LOCKTIME_THRESHOLD = 500000000

See the corresponding code on bitcoin core:
https://github.com/bitcoin/bitcoin/blob/ffd75adce01a78b3461b3ff05bcc2b530a9ce994/src/script/interpreter.cpp#L1129

#### Parameters

##### nLockTime

[`BN`](../namespaces/crypto/classes/BN.md)

the locktime read from the script

#### Returns

`boolean`

true if the transaction's locktime is less than or equal to
                  the transaction's locktime

***

### checkPubkeyEncoding()

> **checkPubkeyEncoding**(`buf`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:120

Checks if the provided public key buffer is valid according to strict encoding rules.
Sets an error message if validation fails under SCRIPT_VERIFY_STRICTENC flag.

#### Parameters

##### buf

`Buffer`

The public key buffer to validate.

#### Returns

`boolean`

True if valid, false otherwise (with error string set).

***

### checkSequence()

> **checkSequence**(`nSequence`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:153

Checks a sequence parameter with the transaction's sequence.

#### Parameters

##### nSequence

[`BN`](../namespaces/crypto/classes/BN.md)

the sequence read from the script

#### Returns

`boolean`

true if the transaction's sequence is less than or equal to
                  the transaction's sequence

***

### checkSignatureEncoding()

> **checkSignatureEncoding**(`buf`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:113

Checks if a signature encoding is valid according to the interpreter's flags.
- For empty signatures: always valid (used for compact invalid signatures in CHECK(MULTI)SIG)
- With DERSIG/STRICTENC flags: validates DER encoding and strict encoding rules
- With LOW_S flag: ensures signature uses low S value
- With STRICTENC flag: validates defined hash type

#### Parameters

##### buf

`Buffer`

The signature buffer to validate

#### Returns

`boolean`

True if valid, false otherwise (sets errstr on failure)

***

### evaluate()

> **evaluate**(`scriptType`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:131

Evaluates a script by executing each opcode step-by-step.
Performs size checks on the script and stacks before execution.

Based on bitcoind's EvalScript function, with the inner loop moved to `Interpreter.prototype.step()`
bitcoind commit: b5d1b1092998bc95313856d535c632ea5a8f9104

#### Parameters

##### scriptType

`string`

The type of script being evaluated

#### Returns

`boolean`

True if evaluation succeeds, false if any error occurs

#### Throws

If an unknown error occurs during evaluation

***

### initialize()

> **initialize**(): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:52

Initializes the interpreter instance with default values.
Sets up empty stacks, resets program counter and execution flags,
and initializes state tracking variables for script execution.

#### Returns

`void`

***

### set()

> **set**(`obj`): `void`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:80

Updates the interpreter's state with provided values.

#### Parameters

##### obj

Object containing properties to update

###### altstack?

`any`[]

Alternate stack

###### errstr?

`string`

Error string

###### flags?

`number`

Interpreter flags

###### nin?

`boolean`

Non-input flag

###### nOpCount?

`number`

Operation count

###### pbegincodehash?

`number`

Begin code hash position

###### pc?

`number`

Program counter

###### satoshisBN?

[`BN`](../namespaces/crypto/classes/BN.md)

Satoshis as BN.js instance

###### script?

`Buffer`

Script buffer

###### stack?

`any`[]

Main stack

###### tx?

`any`

Transaction object

###### vfElse?

`any`[]

Else flags

###### vfExec?

`any`[]

Execution flags

#### Returns

`void`

***

### step()

> **step**(`scriptType`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:167

Executes a single step in the script interpreter.

This method processes the current opcode in the script, performs the corresponding operation,
and updates the stack or interpreter state accordingly. It handles various opcode types including
stack operations, arithmetic, bitwise logic, cryptographic operations, and control flow.

Based on the inner loop of bitcoind's EvalScript function
bitcoind commit: b5d1b1092998bc95313856d535c632ea5a8f9104

#### Parameters

##### scriptType

`string`

The type of script being executed (e.g., scriptPubkey, scriptSig).

#### Returns

`boolean`

Returns `true` if the step executed successfully, or `false` if an error occurred.
                  Errors are stored in `this.errstr`.

***

### subscript()

> **subscript**(): [`Script`](Script.md)

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:103

Returns a subset of the script starting from the most recent OP_CODESEPARATOR.

#### Returns

[`Script`](Script.md)

A new Script instance containing the sliced chunks.

***

### verify()

> **verify**(`scriptSig`, `scriptPubkey`, `tx`?, `nin`?, `flags`?, `satoshisBN`?): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/interpreter/interpreter.d.cts:45

Verifies a Script by executing it and returns true if it is valid.
This function needs to be provided with the scriptSig and the scriptPubkey
separately.

#### Parameters

##### scriptSig

[`Script`](Script.md)

the script's first part (corresponding to the tx input)

##### scriptPubkey

[`Script`](Script.md)

the script's last part (corresponding to the tx output)

##### tx?

[`Transaction`](Transaction.md)

the Transaction containing the scriptSig in one input (used
   to check signature validity for some opcodes like OP_CHECKSIG)

##### nin?

`number`

index of the transaction input containing the scriptSig verified.

##### flags?

`number`

evaluation flags. See Interpreter.SCRIPT_* constants

##### satoshisBN?

`number`

amount in satoshis of the input to be verified (when FORKID signhash is used)

Translated from bitcoind's VerifyScript

#### Returns

`boolean`
