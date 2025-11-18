---
id: guard-variants
title: Guard Variants
sidebar_position: 2
---

# Guard Variants

## Overview

CAT Protocol provides multiple guard contract variants to balance transaction size and functionality. Each variant is optimized for different use cases, allowing you to choose the right configuration for your application.

:::info Who Needs to Know About Guard Variants?
**For Application Contract Developers**: If you're developing custom application contracts that interact with CAT tokens, understanding guard variants is essential for proper contract design and optimization.

**For SDK Users**: If you're using the CAT SDK's feature functions (such as `send`), guard variants are automatically handled for you. The SDK will select and use the appropriate guard variant based on your transaction requirements.
:::

## Understanding Guard Parameters

Each guard variant is defined by three key parameters:

- **TI_COUNT** (Transaction Inputs): Maximum number of inputs the guard can handle
- **TO_COUNT** (Transaction Outputs): Maximum number of outputs the guard can handle
- **GTT_COUNT** (Guard Token Type): Maximum number of different token/NFT types that can be transferred in a single transaction

## Available Variants

### 6_6_2: Basic Transfers

**Configuration:** 6 inputs, 6 outputs, 2 token types

**Best for:**
- Simple token transfers
- Minimizing transaction fees
- Reducing blockchain footprint
- Basic peer-to-peer transfers

**Example use cases:**
- Standard wallet-to-wallet transfers
- Simple swap between two token types

---

### 6_6_4: Multi-Token Transfers

**Configuration:** 6 inputs, 6 outputs, 4 token types

**Best for:**
- Complex token swaps
- Multi-token transactions
- Maintaining relatively small transaction size

**Example use cases:**
- Swapping between multiple token types
- Batch transfers involving up to 4 different tokens
- Simple DEX operations

---

### 12_12_2: Batch Operations

**Configuration:** 12 inputs, 12 outputs, 2 token types

**Best for:**
- Batch operations
- Multi-party transactions
- Scenarios requiring more inputs/outputs

**Example use cases:**
- Airdrops to multiple recipients
- Collecting tokens from multiple UTXOs
- Payment splitters

---

### 12_12_4: Complex Contract Interactions

**Configuration:** 12 inputs, 12 outputs, 4 token types

**Best for:**
- Maximum flexibility
- Complex multi-contract scenarios
- Advanced DeFi operations

**Example use cases:**
- Complex DEX operations with multiple token pools
- Advanced DeFi protocols
- Multi-contract interactions in a single transaction

## Choosing the Right Variant

**Decision Guide:**

1. **Start with 6_6_2** if you need:
   - Simple transfers
   - Lower transaction fees
   - Minimal complexity

2. **Upgrade to 6_6_4** if you need:
   - Multi-token swaps (3-4 different tokens)
   - Keeping transaction size manageable

3. **Use 12_12_2** if you need:
   - Batch operations with many UTXOs
   - Multi-party transactions
   - Only 1-2 token types involved

4. **Choose 12_12_4** if you need:
   - Maximum flexibility
   - Complex DeFi operations
   - Multiple token types AND many inputs/outputs

:::tip
Always choose the smallest variant that meets your needs to minimize transaction fees and blockchain footprint.
:::

## Implementation

Both CAT20 and CAT721 tokens support all four guard variants:

```typescript
// CAT20 Guard Variants
CAT20Guard_6_6_2
CAT20Guard_6_6_4
CAT20Guard_12_12_2
CAT20Guard_12_12_4

// CAT721 Guard Variants
CAT721Guard_6_6_2
CAT721Guard_6_6_4
CAT721Guard_12_12_2
CAT721Guard_12_12_4
```

Select the appropriate guard contract class when deploying your token contract based on your application's requirements.
