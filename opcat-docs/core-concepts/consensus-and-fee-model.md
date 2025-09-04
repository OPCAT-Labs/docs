---
id: consensus-and-fee-model
title: Consensus and Fee Model
---

## Consensus

On the OP_CAT Layer, we use **Proof of Work (POW)**, the most proven consensus model used by Bitcoin itself, but with a few key differences:

* **Merged mining**: Allows Bitcoin miners to simultaneously mine the OP_CAT Layer
* **FIFO mempool**: First-in, first-out transaction ordering with no Replace-by-Fee (RBF)

## Fee Model

The OP_CAT Layer, as a Bitcoin execution layer, has a unique fee model with the following characteristics:

* **Utility token**: Uses `opBTC`, which mirrors Bitcoin's 21 million supply cap and 8 decimal places. The minimum unit is also called a satoshi (or `sat` for short). It functions as a wrapped token for BTC.
* **Genesis allocation**: All `opBTC` tokens are minted at genesis and locked in a bridge smart contract.
* **Bridge-based release**: Tokens can only be released from the contract by bridging an equivalent amount of BTC from the Bitcoin network to the OP_CAT Layer. For more details, see the [bridge mechanism](./bridge-mechanism.md).
* **Transaction fees**: Every transaction on the OP_CAT Layer requires sats as transaction fees.
* **Miner rewards**: When miners produce a valid block, they receive only the transaction fees from that block with **zero block reward**.
