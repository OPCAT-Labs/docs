---
id: token-standards
title: Token Standards
---
# Covenant Attested Token (CAT) Protocol

On OP_CAT Layer, we use a novel UTXO-based token protocol on Bitcoin, called **Covenant Attested Token (CAT)** Protocol. It is **miner validated** and uses smart contracts, specifically covenants, to manage token mints and transfers. Compared with all existing token protocols on Bitcoin, it is solely enforced by Bitcoin Script at Layer 1 and has the following features.
- **No indexer needed**: The ruleset of the token is guaranteed by the Bitcoin consensus. Both the token data and logic reside on chain. It does not rely on any off-chain third party, such as an indexer, to operate. There is no risk of indexer centralization or inconsistency and CAT tokens inherit native bitcoin’s Proof of Work security.
- **Modular**: Since CAT tokens can be verified in Script and owned by smart contracts, they can be used in other smart contracts and be combined into more complex and interconnected decentralized applications, such as Automated Market Makers (AMM), lending, and staking. The modularity and composability of CAT tokens offer a powerful and versatile new building block for expanding Bitcoin’s range of applications.
- **Programmable minting**: Token minting rule is not enforced by indexers, but by minting smart contracts. These customizable and flexible contracts allow token issuers to specify arbitrary minting rules without asking centralized indexers for permission, including open mint. Over-minting transactions would be rejected directly by the network, not at an indexer, and not mined.
- **Cross-chain interoperable**: CAT protocol allows trustless bridging of assets between different blockchains, enabling applications to operate across multiple blockchains. The bridge does not require the users to trust anything but the blockchains themselves.
- **SPV-compatible**: CAT tokens support Simplified Payment Verification (SPV). Light clients (like mobile phones) can independently verify the authenticity of tokens, without trusting any central server. Similar to Bitcoin, a token transaction that is sufficiently deep in the blockchain can be considered valid by light clients.

CAT protocol supports both fungible tokens (called **CAT20** standard) and non-fungible tokens (**CAT721**) standard. The techniques developed here are general purpose and can be applied in use cases beyond tokens.
