[**@opcat-labs/scrypt-ts-opcat v1.0.4**](../README.md)

***

[@opcat-labs/scrypt-ts-opcat](../README.md) / SigHashType

# Enumeration: SigHashType

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:230](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L230)

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

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:231](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L231)

***

### ANYONECANPAY

> **ANYONECANPAY**: `128`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:234](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L234)

***

### ANYONECANPAY\_ALL

> **ANYONECANPAY\_ALL**: `129`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:235](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L235)

***

### ANYONECANPAY\_NONE

> **ANYONECANPAY\_NONE**: `130`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:236](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L236)

***

### ANYONECANPAY\_SINGLE

> **ANYONECANPAY\_SINGLE**: `131`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:237](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L237)

***

### NONE

> **NONE**: `2`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:232](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L232)

***

### SINGLE

> **SINGLE**: `3`

Defined in: [packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts:233](https://github.com/OPCAT-Labs/ts-tools/blob/c228c7fe95bfef4336ddbadcd78e6f936189a844/packages/scrypt-ts-opcat/src/smart-contract/types/primitives.ts#L233)
