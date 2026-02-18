---
id: key-differences
title: Differences from Bitcoin Layer 1
---

# Differences from Bitcoin Layer 1

This document outlines the key differences between OP_CAT Layer and Bitcoin's Layer 1 implementation.

## Overview

OP_CAT Layer introduces several modifications to the standard Bitcoin protocol to enhance functionality and support advanced smart contract capabilities.

## Key Differences

| Component | OP_CAT Layer | Bitcoin |
|-----------|--------|---------|
| **Transaction Structure** | Extended with `data` field for each transaction output and witness is removed | Legacy/witness transaction format |
| **Transaction Hash** | Hash of TxHashPreimage | Hash of raw transaction |
| **SigHashPreimage** | Enhanced sighash preimage for smart contract support | Traditional sighash format |
| **BVM (Bitcoin Virtual Machine)** | Restore all opcodes and support bigint | Disable lots of opcodes |

## Detailed Explanations

### Transaction Structure Modifications
OP_CAT Layer implements significant changes to the transaction structure:

1. **Witness Removal**: The witness structure is completely removed, simplifying the transaction format and reducing complexity compared to Bitcoin's witness-based approach.

2. **Output Extension**: Each transaction output is extended with a `data` field, enabling:
   - Additional data storage capabilities
   - Enhanced smart contract functionality
   - More flexible transaction output handling

#### Transaction Structure Field Comparison

The following table shows which fields are present in OP_CAT Layer vs Bitcoin transaction structures:

| Field | OP_CAT Layer | Bitcoin | Description |
|-------|--------|---------|-------------|
| **Version** | ✓ | ✓ | Transaction version number |
| **SegWit Marker** | ✗ | ✓ | Segregated Witness marker |
| **SegWit Flag** | ✗ | ✓ | Segregated Witness flag |
| **Input Count** | ✓ | ✓ | Number of transaction inputs |
| **Input[0].prevout** | ✓ | ✓ | Previous output reference |
| **Input[0].scriptSig** | ✓ | ✓ | Input locking script (script signature) |
| **Input[1]...** | ✓ | ✓ | Additional inputs (if any) |
| **Output Count** | ✓ | ✓ | Number of transaction outputs |
| **Output[0].amount** | ✓ | ✓ | Output value in satoshis |
| **Output[0].scriptPubKey** | ✓ | ✓ | Output script (script public key) |
| **Output[0].data** | ✓ | ✗ | Additional data field (OP_CAT Layer only) |
| **Output[1]...** | ✓ | ✓ | Additional outputs (if any) |
| **Witness** | ✗ | ✓ | Witness data for SegWit |
| **LockTime** | ✓ | ✓ | Transaction lock time |

**Legend**: ✓ = Present, ✗ = Not present

These modifications streamline transaction processing while providing enhanced functionality for smart contract operations.

### Transaction Hashing
- **OP_CAT Layer**: Uses TxHashPreimage for transaction hashing, which provides more flexibility in hash computation and enables advanced smart contract features
- **Bitcoin**: Uses the raw transaction data directly for hash calculation, following the traditional Bitcoin protocol

#### TxHashPreimage Structure

The TxHashPreimage contains the following fields for transaction hashing. All hash values are computed using SHA256:

| Field | Description |
|-------|-------------|
| **version** | Transaction version number |
| **input count** | Number of transaction inputs |
| **input[0].prevout** | Previous output reference (hash + index) |
| **input[0].unlockScriptHash** | SHA256 hash of the unlocking script |
| **input[0].sequence** | Input sequence number |
| **input[1]...** | Additional inputs (if any) |
| **output count** | Number of transaction outputs |
| **output[0].satoshis** | Output value in satoshis |
| **output[0].scriptHash** | SHA256 hash of the output script |
| **output[0].dataHash** | SHA256 hash of the output data field |
| **output[1]...** | Additional outputs (if any) |
| **locktime** | Transaction lock time |

### SigHashPreimage Enhancement
OP_CAT Layer implements an improved sighash preimage structure specifically designed to support smart contract functionality. This enhancement provides better control over signature verification and enables more sophisticated contract interactions.

#### SigHashPreimage Structure (when sighash type is SIGHASH_ALL)

| Field | Description |
|-------|-------------|
| **nVersion** | Transaction version |
| **hashPrevouts** | Double SHA256 of the serialization of all input outpoints |
| **spentScriptHash** | SHA256 of scriptPubKey of the previous output spent by this input |
| **spentDataHash** | SHA256 of the data field of the previous output spent by this input |
| **value** | Value of the previous output spent by this input |
| **nSequence** | Sequence number of this input |
| **hashSpentAmounts** | Double SHA256 of the serialization of all spent output amounts |
| **hashSpentScriptHashes** | Double SHA256 of all spent outputs' script hashes |
| **hashSpentDataHashes** | Double SHA256 of all spent outputs' data hashes |
| **hashSequences** | Double SHA256 of the serialization of all input sequences |
| **hashOutputs** | Double SHA256 of the serialization of all outputs |
| **inputIndex** | Index of the current input being signed |
| **nLocktime** | Transaction lock time |
| **sighashType** | Signature hash type |

### Bitcoin Virtual Machine (BVM) Enhancements
OP_CAT Layer significantly enhances the Bitcoin Virtual Machine by restoring all opcodes that were previously disabled in Bitcoin:

- **OP_CAT Layer**: Restores all opcodes to enable full smart contract functionality
- **Bitcoin**: Disables many opcodes for security and stability reasons

This restoration enables:
- Advanced smart contract development
- Complex cryptographic operations
- Enhanced data manipulation capabilities
- More flexible scripting possibilities

## Technical Implications

These architectural differences provide OP_CAT Layer with several advantages:

1. **Simplified Transaction Structure**: The removal of witness data reduces transaction complexity and processing overhead
2. **Enhanced Flexibility**: TxHashPreimage allows for more sophisticated hash computation methods
3. **Extended Functionality**: The additional `data` field enables advanced smart contract features and data storage
4. **Improved Smart Contract Support**: Enhanced sighash preimage provides better contract interaction capabilities
5. **Reduced Transaction Size**: Elimination of SegWit components results in smaller transaction sizes
6. **Optimized Hashing**: TxHashPreimage structure enables more efficient transaction hash computation using SHA256
7. **Consistent Hash Algorithm**: All hash computations use SHA256, ensuring consistency and security
8. **Advanced Signature Verification**: Enhanced SigHashPreimage structure provides more sophisticated signature verification capabilities
9. **Full Opcode Support**: BVM restoration enables complete smart contract functionality

## Compatibility Considerations

While OP_CAT Layer maintains compatibility with Bitcoin's core principles, these modifications may affect:
- Transaction validation processes
- Block structure and size calculations
- Smart contract deployment and execution
- Signature verification mechanisms
- Legacy transaction format compatibility
- SegWit transaction handling
- Hash computation methods and validation
- Opcode availability and script execution