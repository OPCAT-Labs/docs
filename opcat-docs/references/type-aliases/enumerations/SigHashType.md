[**scrypt-ts-opcat v1.0.4**](../README.md)

***

[scrypt-ts-opcat](../README.md) / SigHashType

# Enumeration: SigHashType

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:222](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L222)

Enum representing the different signature hash types used in Bitcoin script.
These flags determine which parts of the transaction are signed.

## Remarks

The values correspond to standard Bitcoin signature hash flags:
- ALL: Signs all inputs/outputs (default)
- NONE: Signs only inputs (outputs can be changed)
- SINGLE: Signs inputs and corresponding output
- ANYONECANPAY variants allow additional inputs to be added later

## Enumeration Members

### ALL

> **ALL**: `1`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:223](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L223)

***

### ANYONECANPAY

> **ANYONECANPAY**: `128`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:226](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L226)

***

### ANYONECANPAY\_ALL

> **ANYONECANPAY\_ALL**: `129`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:227](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L227)

***

### ANYONECANPAY\_NONE

> **ANYONECANPAY\_NONE**: `130`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:228](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L228)

***

### ANYONECANPAY\_SINGLE

> **ANYONECANPAY\_SINGLE**: `131`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:229](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L229)

***

### NONE

> **NONE**: `2`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:224](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L224)

***

### SINGLE

> **SINGLE**: `3`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:225](https://github.com/OPCAT-Labs/ts-tools/blob/528986f3e4ac436a160988491680cf191c0bf231/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L225)
