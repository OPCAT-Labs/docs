---
sidebar_label: REST API
sidebar_position: 5
---

# REST API

This document describes the REST API endpoints available when running `bitcoind` with the `-rest` option enabled.

## Overview

The REST interface provides a simple, stateless way to query blockchain data over HTTP without requiring authentication. It is designed for lightweight integrations and public data access.

To enable REST, add `-rest` to the command line or `rest=1` to your configuration file.

The REST API shares the same port as the JSON-RPC interface:

| Network | Default Port |
|---------|--------------|
| Mainnet | 18443 |
| Testnet | 28443 |
| Regtest | 38443 |

Base URL format: `http://<host>:<port>/rest/...`

All endpoints support multiple output formats:

| Format | Extension | Content-Type |
|--------|-----------|--------------|
| JSON | `.json` | `application/json` |
| Binary | `.bin` | `application/octet-stream` |
| Hex | `.hex` | `text/plain` |

**Security notes:**
- The REST API does not require authentication
- By default, it only listens on localhost (127.0.0.1)
- To allow remote access, configure `-rpcbind` and `-rpcallowip`

## Endpoints

### Block Headers

#### GET `/rest/headers/<count>/<block-hash>.<format>`

Returns consecutive block headers starting from the specified block.

**Parameters:**
- `count`: Number of headers to return (1-2000)
- `block-hash`: Block hash (64 hex characters)
- `format`: Output format (`json`, `bin`, `hex`)

**Example:**
```bash
curl http://localhost:28443/rest/headers/2/b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0.json
```

**Response (JSON):**
```json
[
  {
    "hash": "b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0",
    "version": 539296001,
    "versionHex": "20250101",
    "merkleroot": "23d809245250e7b433f7d2ab5e8c35647e817023c9a1958a4f7b03b0f0a3fc0d",
    "time": 1766459478,
    "nonce": 0,
    "bits": "1d00ffff",
    "difficulty": 1,
    "previousblockhash": "65e40be5be107bdca7538a11a2c4f6dc16502552be7bd29100f1d247f3781beb",
    "confirmations": 6,
    "height": 9826,
    "mediantime": 1766459110,
    "chainwork": "000000000000000000000000000000000000000000000000000026fb53d18269",
    "nTx": 1,
    "nextblockhash": "fca629e2231f8683efac215be88dfdacb85d6c90ecafc81b3a94596be83ef425"
  },
  {
    "hash": "fca629e2231f8683efac215be88dfdacb85d6c90ecafc81b3a94596be83ef425",
    "version": 539296001,
    "versionHex": "20250101",
    "merkleroot": "c35300a51033b726ad38f5c2817f9f6c933a4b7f93a97413116ac5c38c65fad6",
    "time": 1766459619,
    "nonce": 0,
    "bits": "1d00ffff",
    "difficulty": 1,
    "previousblockhash": "b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0",
    "confirmations": 5,
    "height": 9827,
    "mediantime": 1766459145,
    "chainwork": "000000000000000000000000000000000000000000000000000026fc53d2826a",
    "nTx": 1,
    "nextblockhash": "afc5a2b017d50c4b3363f324e6d30329db81c733717012bcf9cf973651f5907d"
  }
]
```

---

### Block Data

#### GET `/rest/block/<block-hash>.<format>`

Returns full block data including complete transaction details.

**Parameters:**
- `block-hash`: Block hash (64 hex characters)
- `format`: Output format (`json`, `bin`, `hex`)

**Example (JSON):**
```bash
curl http://localhost:28443/rest/block/b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0.json
```

**Response (JSON):**
```json
{
  "hash": "b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0",
  "confirmations": 5,
  "size": 441,
  "height": 9826,
  "version": 539296001,
  "versionHex": "20250101",
  "merkleroot": "23d809245250e7b433f7d2ab5e8c35647e817023c9a1958a4f7b03b0f0a3fc0d",
  "nTx": 1,
  "tx": [
    {
      "txid": "23d809245250e7b433f7d2ab5e8c35647e817023c9a1958a4f7b03b0f0a3fc0d",
      "hash": "23d809245250e7b433f7d2ab5e8c35647e817023c9a1958a4f7b03b0f0a3fc0d",
      "size": 93,
      "version": 1,
      "locktime": 0,
      "vin": [...],
      "vout": [...]
    }
  ],
  "time": 1766459478,
  "mediantime": 1766459110,
  "nonce": 0,
  "bits": "1d00ffff",
  "difficulty": 1,
  "chainwork": "000000000000000000000000000000000000000000000000000026fb53d18269",
  "previousblockhash": "65e40be5be107bdca7538a11a2c4f6dc16502552be7bd29100f1d247f3781beb",
  "nextblockhash": "fca629e2231f8683efac215be88dfdacb85d6c90ecafc81b3a94596be83ef425"
}
```

**Example (Hex):**
```bash
curl http://localhost:28443/rest/block/b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0.hex
```

**Response (Hex):**
```
01012520eb1b78f347d2f10091d27bbe52255016dcf6c4a2118a53a7dc7b10bee50be465...
```

---

#### GET `/rest/block/notxdetails/<block-hash>.<format>`

Returns block data with only transaction IDs (not full transaction details).

**Parameters:**
- `block-hash`: Block hash (64 hex characters)
- `format`: Output format (`json`, `bin`, `hex`)

**Example (JSON):**
```bash
curl http://localhost:28443/rest/block/notxdetails/b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0.json
```

**Response (JSON):**
```json
{
  "hash": "b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0",
  "confirmations": 1,
  "size": 441,
  "height": 9826,
  "version": 539296001,
  "versionHex": "20250101",
  "merkleroot": "23d809245250e7b433f7d2ab5e8c35647e817023c9a1958a4f7b03b0f0a3fc0d",
  "nTx": 1,
  "tx": [
    "23d809245250e7b433f7d2ab5e8c35647e817023c9a1958a4f7b03b0f0a3fc0d"
  ],
  "time": 1766459478,
  "mediantime": 1766459110,
  "nonce": 0,
  "bits": "1d00ffff",
  "difficulty": 1,
  "chainwork": "000000000000000000000000000000000000000000000000000026fb53d18269",
  "previousblockhash": "65e40be5be107bdca7538a11a2c4f6dc16502552be7bd29100f1d247f3781beb"
}
```

**Example (Hex):**
```bash
curl http://localhost:28443/rest/block/notxdetails/b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0.hex
```

**Response (Hex):**
```
01012520eb1b78f347d2f10091d27bbe52255016dcf6c4a2118a53a7dc7b10bee50be465...
```

---

### Transaction

#### GET `/rest/tx/<txid>.<format>`

Returns transaction data. Requires `-txindex` to be enabled for non-mempool transactions.

**Parameters:**
- `txid`: Transaction ID (64 hex characters)
- `format`: Output format (`json`, `bin`, `hex`)

**Example (JSON):**
```bash
curl http://localhost:28443/rest/tx/23d809245250e7b433f7d2ab5e8c35647e817023c9a1958a4f7b03b0f0a3fc0d.json
```

**Response (JSON):**
```json
{
  "txid": "23d809245250e7b433f7d2ab5e8c35647e817023c9a1958a4f7b03b0f0a3fc0d",
  "hash": "23d809245250e7b433f7d2ab5e8c35647e817023c9a1958a4f7b03b0f0a3fc0d",
  "size": 93,
  "version": 1,
  "locktime": 0,
  "vin": [...],
  "vout": [...],
  "blockhash": "b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0",
  "confirmations": 2,
  "time": 1766459478,
  "blocktime": 1766459478
}
```

**Example (Hex):**
```bash
curl http://localhost:28443/rest/tx/23d809245250e7b433f7d2ab5e8c35647e817023c9a1958a4f7b03b0f0a3fc0d.hex
```

**Response (Hex):**
```
01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0402622600ffffffff0100000000000000001c006a1976a914bf78370ae91cf73a2c1af9df0400ed12544dc00e88ac0000000000
```

---

### Chain Info

#### GET `/rest/chaininfo.json`

Returns information about the blockchain.

**Example:**
```bash
curl http://localhost:28443/rest/chaininfo.json
```

**Response:**
```json
{
  "chain": "test",
  "blocks": 9826,
  "headers": 9826,
  "bestblockhash": "b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0",
  "difficulty": 1,
  "mediantime": 1766459110,
  "verificationprogress": 1,
  "chainwork": "000000000000000000000000000000000000000000000000000026fb53d18269",
  "pruned": false
}
```

---

### Mempool

#### GET `/rest/mempool/info.json`

Returns mempool statistics.

**Example:**
```bash
curl http://localhost:28443/rest/mempool/info.json
```

**Response:**
```json
{
  "loaded": true,
  "size": 2,
  "bytes": 3110,
  "usage": 7952,
  "maxmempool": 1000000000,
  "mempoolminfee": 0.00000010
}
```

---

#### GET `/rest/mempool/contents.json`

Returns detailed information about all transactions in the mempool.

**Example:**
```bash
curl http://localhost:28443/rest/mempool/contents.json
```

**Response:**
```json
{
  "6fd774751a11bdf38617e2df36fe54eccdbdcb3cd6efbcacdaa6ad56f049a4ec": {
    "size": 228,
    "fee": 0.00000003,
    "modifiedfee": 0.00000003,
    "time": 1766460375,
    "height": 9835,
    "descendantcount": 2,
    "descendantsize": 3110,
    "descendantfees": 32,
    "ancestorcount": 1,
    "ancestorsize": 228,
    "ancestorfees": 3,
    "depends": []
  },
  "20907c2bdd965c957a9b14d1af0857f0276f578bbec413e75b52a201390d7773": {
    "size": 2882,
    "fee": 0.00000029,
    "modifiedfee": 0.00000029,
    "time": 1766460377,
    "height": 9835,
    "descendantcount": 1,
    "descendantsize": 2882,
    "descendantfees": 29,
    "ancestorcount": 2,
    "ancestorsize": 3110,
    "ancestorfees": 32,
    "depends": [
      "6fd774751a11bdf38617e2df36fe54eccdbdcb3cd6efbcacdaa6ad56f049a4ec"
    ]
  }
}
```

---

### UTXO Query

#### GET `/rest/getutxos/<checkmempool>/<txid>-<n>/....<format>`

Check whether specific UTXOs (Unspent Transaction Outputs) exist and retrieve their details.

This endpoint is useful for:
- Verifying if a UTXO is still unspent before building a transaction
- Retrieving UTXO details (value, scriptPubKey) needed for transaction construction

**Parameters:**
- `checkmempool` (optional): If specified, also check mempool transactions (not just confirmed UTXOs)
- `txid-n`: One or more outpoints to query, where `txid` is the transaction ID and `n` is the output index (vout). Maximum 15 outpoints per request.
- `format`: Output format (`json`, `bin`, `hex`)

**Example:**
```bash
# Query if output 0 of transaction abc123... is unspent (including mempool check)
curl http://localhost:28443/rest/getutxos/checkmempool/abc123...-0.json

# Query multiple outpoints at once
curl http://localhost:28443/rest/getutxos/txid1-0/txid2-1/txid3-0.json
```

**Response:**
```json
{
  "chainHeight": 9826,
  "chaintipHash": "b7daced983fa602ffad4618fbc121bde0627d8bde8efef9d9fbf65b2256899d0",
  "bitmap": "10",
  "utxos": [
    {
      "height": 50,
      "value": 50.00000000,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 ... OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914...",
        "type": "pubkeyhash",
        "address": "1..."
      }
    }
  ]
}
```

---

### Transaction Broadcast

#### POST `/rest/broadcast/tx`

Broadcast a single transaction to the network.

**Request Body:**
- JSON format: `{"rawTx": "<hex_string>"}`
- Binary format: Raw transaction bytes

Both formats optionally support gzip compression.

**Supported Formats:**

| Content-Type | Content-Encoding | Body | Processing |
|:-------------|:-----------------|:-----|:-----------|
| `application/json` | - | `{"rawTx": "0100..."}` | JSON parse |
| `application/json` | `gzip` | gzip compressed JSON | Decompress → JSON parse |
| `application/octet-stream` | - | raw binary tx | Binary parse |
| `application/octet-stream` | `gzip` | gzip compressed binary | Decompress → Binary parse |
| `application/gzip` | - | gzip compressed binary | Decompress → Binary parse |
| - | - | `{"rawTx": "0100..."}` | Auto-detect → JSON |
| - | - | raw binary tx | Auto-detect → Binary |
| - | - | gzip compressed binary | Magic detect → Decompress → Binary |

**Example (JSON):**
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"rawTx": "0100000001..."}' \
  http://localhost:28443/rest/broadcast/tx
```

**Example (Binary):**
```bash
curl -X POST \
  -H "Content-Type: application/octet-stream" \
  --data-binary @transaction.bin \
  http://localhost:28443/rest/broadcast/tx
```

**Response:**
```json
{"txid": "<txid>", "success": true}
```

**Error Response:**
```json
{"txid": "<txid>", "success": false, "error": {"code": -25, "message": "Missing inputs"}}
```

> Note: Even if transaction validation fails, HTTP 200 is returned. Failure is indicated via `success: false` and the `error` field.

---

#### POST `/rest/broadcast/txs`

Broadcast multiple transactions in a single request.

**Request Body:**

Concatenated serialized transactions in binary stream format. Optionally supports gzip compression.

**Supported Formats:**

| Content-Type | Content-Encoding | Body | Processing |
|:-------------|:-----------------|:-----|:-----------|
| `application/octet-stream` | - | raw binary txs | Binary parse |
| `application/octet-stream` | `gzip` | gzip compressed binary txs | Decompress → Binary parse |
| `application/gzip` | - | gzip compressed binary txs | Decompress → Binary parse |
| - | - | raw binary txs | Binary parse |
| - | - | gzip compressed binary txs | Magic detect → Decompress → Binary parse |

**Limits:**
- Maximum 1000 transactions per batch
- Maximum 32 MB after decompression
- Maximum 10 retry rounds for orphan transactions

**Features:**
- Supports out-of-order submission (automatically handles dependencies)
- For better performance, it is recommended to arrange transactions in topological order

**Example (Binary):**
```bash
curl -X POST \
  -H "Content-Type: application/octet-stream" \
  --data-binary @transactions.bin \
  http://localhost:28443/rest/broadcast/txs
```

**Example (Gzip):**
```bash
curl -X POST \
  -H "Content-Type: application/gzip" \
  --data-binary @transactions.bin.gz \
  http://localhost:28443/rest/broadcast/txs
```

**Response:**
```json
{
  "<txid1>": {"success": true},
  "<txid2>": {"success": true},
  "<txid3>": {"success": false, "error": {"code": -25, "message": "Missing inputs"}}
}
```

> Note: Even if some transactions fail validation, HTTP 200 is returned. Each transaction's result is indicated individually.

---

## Error Codes

### HTTP Status Codes

| HTTP Status | Description |
|-------------|-------------|
| 200 | Success |
| 400 | Bad Request (invalid parameters, parse error) |
| 404 | Not Found (block/tx not found) |
| 405 | Method Not Allowed (wrong HTTP method) |
| 503 | Service Unavailable (node warming up) |

### Transaction Error Codes

| Code | Description |
|------|-------------|
| -22 | Deserialization error (invalid transaction format) |
| -25 | Transaction verification failed (missing inputs, invalid script, etc.) |
| -26 | Transaction rejected (insufficient fee, etc.) |
| -27 | Transaction already in blockchain |
| -28 | Node is warming up |

