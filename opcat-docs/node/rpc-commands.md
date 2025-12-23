---
sidebar_label: RPC Commands
sidebar_position: 4
---

# RPC Commands

---

## Blockchain

### getbestblockhash

#### Description
Returns the hash of the best (tip) block in the longest blockchain.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Block hash (hex-encoded) |

#### Example
```bash
$ bitcoin-cli getbestblockhash
48b8df92729431ee0e5b261f836f4c1c1aa28c6f579e50862e6fb64dc7431b60
```

---

### getblock

#### Description
Get information about a specified block.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| blockhash | string | Yes | - | Block hash |
| verbosity | numeric/boolean | No | 1 | 0/false=hex data, 1/true=json with txid list, 2=json without tx list, 3=json with full tx details |
| auxpow | boolean | No | false | If true and verbosity=0, include auxpow data |

#### Return Value (verbosity=1/2/3)
| Field | Type | Description |
|-------|------|-------------|
| hash | string | Block hash |
| confirmations | numeric | Number of confirmations, -1 if not on main chain |
| size | numeric | Block size |
| height | numeric | Block height |
| version | numeric | Block version |
| versionHex | string | Block version (hex) |
| merkleroot | string | Merkle root |
| nTx | numeric | Number of transactions |
| tx | array | Transaction list (returned when verbosity=1 or 3) |
| time | numeric | Block time (Unix timestamp) |
| mediantime | numeric | Block median time |
| nonce | numeric | Nonce |
| bits | string | Difficulty target |
| difficulty | numeric | Difficulty value |
| chainwork | string | Cumulative work (hex) |
| previousblockhash | string | Previous block hash |
| nextblockhash | string | Next block hash |

#### Example
```bash
$ bitcoin-cli getblock "48b8df92729431ee0e5b261f836f4c1c1aa28c6f579e50862e6fb64dc7431b60"
{
  "hash": "48b8df92729431ee0e5b261f836f4c1c1aa28c6f579e50862e6fb64dc7431b60",
  "confirmations": 1,
  "size": 183,
  "height": 10,
  "version": 1,
  "versionHex": "00000001",
  "merkleroot": "e1bdf6a3ad092a07813428f27750d0baf4c14bcb581de76e6d97da5bffd03892",
  "nTx": 1,
  "tx": [
    "e1bdf6a3ad092a07813428f27750d0baf4c14bcb581de76e6d97da5bffd03892"
  ],
  "time": 1765964622,
  "mediantime": 1765964621,
  "nonce": 3,
  "bits": "207fffff",
  "difficulty": 4.656542373906925e-10,
  "chainwork": "0000000000000000000000000000000000000000000000000000000000000016",
  "previousblockhash": "04d99cdbf71516ae149ade1fccc4cb6905cb81d8673b756081e2f4ce9422350d"
}
```

---

### getblockchaininfo

#### Description
Returns various state information about blockchain processing.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| chain | string | Current network name (main, test, regtest) |
| blocks | numeric | Number of currently processed blocks |
| headers | numeric | Number of currently validated headers |
| bestblockhash | string | Hash of the current best block |
| difficulty | numeric | Current mining difficulty |
| mediantime | numeric | Median time of the current best block |
| verificationprogress | numeric | Verification progress estimate [0..1] |
| chainwork | string | Total work in the active chain (hex) |
| pruned | boolean | Whether block pruning is enabled |
| pruneheight | numeric | Lowest complete block height stored (pruning mode only) |
| softforks | array | Soft fork status |

#### Example
```bash
$ bitcoin-cli getblockchaininfo
{
  "chain": "regtest",
  "blocks": 10,
  "headers": 10,
  "bestblockhash": "48b8df92729431ee0e5b261f836f4c1c1aa28c6f579e50862e6fb64dc7431b60",
  "difficulty": 4.656542373906925e-10,
  "mediantime": 1765964621,
  "verificationprogress": 1,
  "chainwork": "0000000000000000000000000000000000000000000000000000000000000016",
  "pruned": false
}
```

---

### getblockcount

#### Description
Returns the number of blocks in the longest blockchain.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | numeric | Current block count |

#### Example
```bash
$ bitcoin-cli getblockcount
10
```

---

### getblockhash

#### Description
Returns the block hash at a specified height.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| height | numeric | Yes | - | Block height |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Block hash |

#### Example
```bash
$ bitcoin-cli getblockhash 5
5bf2cebc8eddc499b700210ec0c891e9fbec6390eec45870fbc977fba85c225d
```

---

### getblockheader

#### Description
Get header information for a specified block.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| hash | string | Yes | - | Block hash |
| verbose | boolean | No | true | true returns json object, false returns hex data |
| auxpow | boolean | No | false | true includes auxpow data in hex data |

#### Return Value (verbose=true)
| Field | Type | Description |
|-------|------|-------------|
| hash | string | Block hash |
| confirmations | numeric | Number of confirmations |
| height | numeric | Block height |
| version | numeric | Block version |
| versionHex | string | Block version (hex) |
| merkleroot | string | Merkle root |
| time | numeric | Block time |
| mediantime | numeric | Median time |
| nonce | numeric | Nonce |
| bits | string | Difficulty target |
| difficulty | numeric | Difficulty value |
| chainwork | string | Cumulative work |
| nTx | numeric | Number of transactions |
| previousblockhash | string | Previous block hash |
| nextblockhash | string | Next block hash |

#### Example
```bash
$ bitcoin-cli getblockheader "48b8df92729431ee0e5b261f836f4c1c1aa28c6f579e50862e6fb64dc7431b60"
{
  "hash": "48b8df92729431ee0e5b261f836f4c1c1aa28c6f579e50862e6fb64dc7431b60",
  "version": 1,
  "versionHex": "00000001",
  "merkleroot": "e1bdf6a3ad092a07813428f27750d0baf4c14bcb581de76e6d97da5bffd03892",
  "time": 1765964622,
  "nonce": 3,
  "bits": "207fffff",
  "difficulty": 4.656542373906925e-10,
  "previousblockhash": "04d99cdbf71516ae149ade1fccc4cb6905cb81d8673b756081e2f4ce9422350d",
  "confirmations": 1,
  "height": 10,
  "mediantime": 1765964621,
  "chainwork": "0000000000000000000000000000000000000000000000000000000000000016",
  "nTx": 1
}
```

---

### getchaintips

#### Description
Returns information about all known branches in the block tree, including the main chain and orphan branches.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| height | numeric | Height of the chain tip |
| hash | string | Tip block hash |
| branchlen | numeric | Length of branch connecting to main chain (0 for main chain) |
| status | string | Chain status: active, valid-fork, valid-headers, headers-only, invalid |

#### Example
```bash
$ bitcoin-cli getchaintips
[
  {
    "height": 10,
    "hash": "48b8df92729431ee0e5b261f836f4c1c1aa28c6f579e50862e6fb64dc7431b60",
    "branchlen": 0,
    "status": "active"
  }
]
```

---

### getchaintxstats

#### Description
Computes statistics about the total number and rate of transactions in the chain.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| nblocks | numeric | No | One month of blocks | Window size (number of blocks) |
| blockhash | string | No | Best block | Block hash at which the window ends |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| time | numeric | Timestamp of the last block in the window |
| txcount | numeric | Total number of transactions up to that point |
| window_block_count | numeric | Number of blocks in the window |
| window_tx_count | numeric | Number of transactions in the window |
| window_interval | numeric | Time span of the window (seconds) |
| txrate | numeric | Average transaction rate in the window (per second) |

#### Example
```bash
$ bitcoin-cli getchaintxstats 5
{
  "time": 1765964622,
  "txcount": 11,
  "window_block_count": 5,
  "window_tx_count": 5,
  "window_interval": 1,
  "txrate": 5
}
```

---

### getdifficulty

#### Description
Returns the current proof-of-work difficulty.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | numeric | Difficulty value (multiple of minimum difficulty) |

#### Example
```bash
$ bitcoin-cli getdifficulty
4.656542373906925e-10
```

---

### getmempoolancestors

#### Description
Returns all ancestor transactions of a specified transaction in the mempool.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| txid | string | Yes | - | Transaction ID |
| verbose | boolean | No | false | true returns detailed json, false returns txid array |

#### Return Value (verbose=false)
Array of transaction IDs

#### Return Value (verbose=true)
Detailed information object for each ancestor transaction

#### Example
```bash
$ bitcoin-cli getmempoolancestors "txid"
```

---

### getmempooldescendants

#### Description
Returns all descendant transactions of a specified transaction in the mempool.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| txid | string | Yes | - | Transaction ID |
| verbose | boolean | No | false | true returns detailed json, false returns txid array |

#### Return Value (verbose=false)
Array of transaction IDs

#### Return Value (verbose=true)
Detailed information object for each descendant transaction

#### Example
```bash
$ bitcoin-cli getmempooldescendants "txid"
```

---

### getmempoolentry

#### Description
Returns data about a specified transaction in the mempool.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| txid | string | Yes | - | Transaction ID |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| size | numeric | Transaction size |
| fee | numeric | Transaction fee |
| modifiedfee | numeric | Modified fee |
| time | numeric | Time entered mempool |
| height | numeric | Block height when entered mempool |
| descendantcount | numeric | Number of descendant transactions |
| descendantsize | numeric | Total size of descendant transactions |
| descendantfees | numeric | Total fees of descendant transactions |
| ancestorcount | numeric | Number of ancestor transactions |
| ancestorsize | numeric | Total size of ancestor transactions |
| ancestorfees | numeric | Total fees of ancestor transactions |
| depends | array | Dependent unconfirmed transactions |

#### Example
```bash
$ bitcoin-cli getmempoolentry "txid"
```

---

### getmempoolinfo

#### Description
Returns status information about the transaction mempool.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| loaded | boolean | Whether the mempool is loaded |
| size | numeric | Current number of transactions |
| bytes | numeric | Total size of transactions |
| usage | numeric | Mempool memory usage |
| maxmempool | numeric | Maximum mempool memory limit |
| mempoolminfee | numeric | Minimum fee rate to enter mempool |

#### Example
```bash
$ bitcoin-cli getmempoolinfo
{
  "loaded": true,
  "size": 0,
  "bytes": 0,
  "usage": 0,
  "maxmempool": 1000000000,
  "mempoolminfee": 0.00000010
}
```

---

### getrawmempool

#### Description
Returns IDs of all transactions in the mempool.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| verbose | boolean | No | false | true returns detailed json, false returns txid array |

#### Return Value (verbose=false)
Array of transaction IDs

#### Return Value (verbose=true)
Detailed information object for each transaction (same as getmempoolentry)

#### Example
```bash
$ bitcoin-cli getrawmempool
[]
```

---

### gettxout

#### Description
Returns details about a specified unspent transaction output (UTXO).

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| txid | string | Yes | - | Transaction ID |
| n | numeric | Yes | - | Output index |
| include_mempool | boolean | No | true | Whether to include transactions in the mempool |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| bestblock | string | Best block hash |
| confirmations | numeric | Number of confirmations |
| value | numeric | Amount |
| scriptPubKey | object | Locking script information |
| coinbase | boolean | Whether it's a coinbase transaction |

#### Example
```bash
$ bitcoin-cli gettxout "txid" 0
```

---

### gettxoutproof

#### Description
Returns a hex-encoded proof that the specified transaction exists in a block.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| txids | array | Yes | - | Array of transaction IDs |
| blockhash | string | No | - | Specified block hash |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Hex-encoded proof data |

#### Example
```bash
$ bitcoin-cli gettxoutproof '["txid"]'
```

---

### gettxoutsetinfo

#### Description
Returns statistics about the unspent transaction output set.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| height | numeric | Current block height |
| bestblock | string | Best block hash |
| transactions | numeric | Number of transactions |
| txouts | numeric | Number of outputs |
| bogosize | numeric | UTXO set size metric |
| hash_serialized | string | Serialized hash |
| disk_size | numeric | Estimated disk size |
| total_amount | numeric | Total amount |

#### Example
```bash
$ bitcoin-cli gettxoutsetinfo
{
  "height": 10,
  "bestblock": "48b8df92729431ee0e5b261f836f4c1c1aa28c6f579e50862e6fb64dc7431b60",
  "transactions": 1,
  "txouts": 1,
  "bogosize": 85,
  "hash_serialized": "680741b50ecf2646e4d9892bb9e64923ea4d17f8a9d83738bd649a6c52eb2dd8",
  "disk_size": 0,
  "total_amount": 20999950.00000000
}
```

---

### preciousblock

#### Description
Treats the specified block as if it were received earlier, which may affect chain selection.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| blockhash | string | Yes | - | Block hash |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli preciousblock "blockhash"
```

---

### pruneblockchain

#### Description
Prunes the blockchain to a specified height.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| height | numeric | Yes | - | Target height |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | numeric | Actual height pruned to |

#### Example
```bash
$ bitcoin-cli pruneblockchain 1000
```

---

### verifychain

#### Description
Verifies the blockchain database.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| checklevel | numeric | No | 3 | Verification level (0-4) |
| nblocks | numeric | No | 6 | Number of blocks to check |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | boolean | Whether verification passed |

#### Example
```bash
$ bitcoin-cli verifychain
true
```

---

### verifytxoutproof

#### Description
Verifies the proof generated by gettxoutproof.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| proof | string | Yes | - | Hex-encoded proof |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | array | Array of transaction IDs associated with the proof |

#### Example
```bash
$ bitcoin-cli verifytxoutproof "proof"
```

---

## Control

### getinfo

#### Description
Returns basic information about the node (deprecated, use getblockchaininfo, getnetworkinfo, getwalletinfo instead).

#### Parameters
None

#### Example
```bash
$ bitcoin-cli getinfo
```

---

### getmemoryinfo

#### Description
Returns memory usage information.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| locked | object | Locked memory information |

#### Example
```bash
$ bitcoin-cli getmemoryinfo
```

---

### help

#### Description
Lists all commands or gets help information for a specified command.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| command | string | No | - | Command name to view help for |

#### Example
```bash
$ bitcoin-cli help
$ bitcoin-cli help getblockchaininfo
```

---

### stop

#### Description
Stops the node.

#### Parameters
None

#### Example
```bash
$ bitcoin-cli stop
```

---

### uptime

#### Description
Returns the node uptime (in seconds).

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | numeric | Uptime (seconds) |

#### Example
```bash
$ bitcoin-cli uptime
123456
```

---

## Generating

### generate

#### Description
Immediately mines a specified number of blocks to a wallet address.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| nblocks | numeric | Yes | - | Number of blocks to generate |
| maxtries | numeric | No | 1000000 | Maximum number of attempts |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | array | Array of generated block hashes |

#### Example
```bash
$ bitcoin-cli generate 11
```

---

### generatetoaddress

#### Description
Immediately mines a specified number of blocks to a specified address.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| nblocks | numeric | Yes | - | Number of blocks to generate |
| address | string | Yes | - | Address to receive newly generated coins |
| maxtries | numeric | No | 1000000 | Maximum number of attempts |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | array | Array of generated block hashes |

#### Example
```bash
$ bitcoin-cli generatetoaddress 11 "myaddress"
```

---

## Mining

### getblocktemplate

#### Description
Gets data needed to construct a block. See BIP 22, 23, 9, and 145 for full specification.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| template_request | object | No | - | Template request object containing mode, capabilities, rules, etc. |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| version | numeric | Preferred block version |
| rules | array | Specific block rules to execute |
| previousblockhash | string | Hash of the current highest block |
| transactions | array | Non-coinbase transactions to include in the next block |
| coinbaseaux | object | Data to include in coinbase scriptSig |
| coinbasevalue | numeric | Maximum allowed input value for coinbase transaction (including block reward and fees) |
| target | string | Hash target |
| mintime | numeric | Minimum timestamp for next block |
| mutable | array | List of ways the block template can be modified |
| noncerange | string | Valid nonce range |
| sigoplimit | numeric | Block sigops limit |
| sizelimit | numeric | Block size limit |
| curtime | numeric | Current timestamp |
| bits | string | Compressed target for next block |
| height | numeric | Height of next block |

#### Example
```bash
$ bitcoin-cli getblocktemplate
```

---

### getmininginfo

#### Description
Returns mining-related information.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| blocks | numeric | Current block height |
| currentblocksize | numeric | Size of the last block |
| currentblocktx | numeric | Number of transactions in the last block |
| difficulty | numeric | Current difficulty |
| errors | string | Current error messages |
| networkhashps | numeric | Network hashes per second |
| pooledtx | numeric | Mempool size |
| chain | string | Current network name |

#### Example
```bash
$ bitcoin-cli getmininginfo
```

---

### getnetworkhashps

#### Description
Estimates network hashes per second based on the last n blocks.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| nblocks | numeric | No | 120 | Number of blocks, -1 means since last difficulty adjustment |
| height | numeric | No | -1 | Estimate network speed at specified height |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | numeric | Estimated hashes per second |

#### Example
```bash
$ bitcoin-cli getnetworkhashps
```

---

### submitblock

#### Description
Attempts to submit a new block to the network.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| hexdata | string | Yes | - | Hex-encoded block data |
| parameters | object | No | - | Optional parameter object containing workid field |

#### Return Value
None (returns null on success)

#### Example
```bash
$ bitcoin-cli submitblock "mydata"
```

---

### createauxblock

#### Description
Creates a new block and returns information needed for merge mining.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | Payout address for the coinbase transaction |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| hash | string | Hash of the created block |
| chainid | numeric | Chain ID for this block |
| previousblockhash | string | Hash of the previous block |
| coinbasevalue | numeric | Value of the block coinbase |
| bits | string | Compressed target for the block |
| height | numeric | Block height |
| _target | string | Reversed byte order target (deprecated) |

#### Example
```bash
$ bitcoin-cli createauxblock "myaddress"
{
  "hash": "267a45996ffc0a7b7eab7aaca88dd1ee8e2ef291f09b4f5561774423c26cd5fc",
  "chainid": 8229,
  "previousblockhash": "4d9e21cedb6784a8304f448fb285f36bd9cd8c7ae14f5880d9fdbc5257f10d9d",
  "coinbasevalue": 0,
  "bits": "207fffff",
  "height": 113,
  "_target": "7fffff0000000000000000000000000000000000000000000000000000000000"
}
```

---

### submitauxblock

#### Description
Submits a solved auxpow for a block that was previously created by 'createauxblock'.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| hash | string | Yes | - | Hash of the block to submit |
| auxpow | string | Yes | - | Serialized auxpow data |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | boolean | Whether the submitted block is correct |

#### Example
```bash
$ bitcoin-cli submitauxblock "blockhash" "serialised auxpow"
true
```

---

## Network

### addnode

#### Description
Attempts to add or remove a node from the addnode list, or tries to connect once.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| node | string | Yes | - | Node address |
| command | string | Yes | - | 'add', 'remove', or 'onetry' |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli addnode "192.168.0.6:8333" "onetry"
```

---

### clearbanned

#### Description
Clears all banned IPs.

#### Parameters
None

#### Return Value
None

#### Example
```bash
$ bitcoin-cli clearbanned
```

---

### disconnectnode

#### Description
Immediately disconnects from the specified node.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | No | - | Node IP address/port |
| nodeid | numeric | No | - | Node ID (see getpeerinfo) |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli disconnectnode "192.168.0.6:8333"
$ bitcoin-cli disconnectnode "" 1
```

---

### getaddednodeinfo

#### Description
Returns information about added nodes.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| node | string | No | - | Specific node, otherwise returns all nodes |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| addednode | string | Node IP address or name |
| connected | boolean | Whether connected |
| addresses | array | List of connection addresses (only when connected=true) |

#### Example
```bash
$ bitcoin-cli getaddednodeinfo
```

---

### getconnectioncount

#### Description
Returns the number of connections to other nodes.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | numeric | Number of connections |

#### Example
```bash
$ bitcoin-cli getconnectioncount
```

---

### getexcessiveblock

#### Description
Returns the size limit for excessive blocks.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| excessiveBlockSize | numeric | Block size (bytes) |

#### Example
```bash
$ bitcoin-cli getexcessiveblock
```

---

### getnettotals

#### Description
Returns network traffic information.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| totalbytesrecv | numeric | Total bytes received |
| totalbytessent | numeric | Total bytes sent |
| timemillis | numeric | Current Unix time (milliseconds) |
| uploadtarget | object | Upload target information |

#### Example
```bash
$ bitcoin-cli getnettotals
```

---

### getnetworkinfo

#### Description
Returns various state information about P2P networking.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| version | numeric | Server version |
| subversion | string | Server subversion string |
| protocolversion | numeric | Protocol version |
| localservices | string | Services offered to the network |
| localrelay | boolean | Whether to request peers to relay transactions |
| timeoffset | numeric | Time offset |
| connections | numeric | Number of connections |
| networkactive | boolean | Whether P2P networking is enabled |
| networks | array | Information for each network |
| relayfee | numeric | Minimum relay fee for non-free transactions |
| localaddresses | array | List of local addresses |
| warnings | string | Network warnings |

#### Example
```bash
$ bitcoin-cli getnetworkinfo
```

---

### getpeerinfo

#### Description
Returns data about each connected network node.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| id | numeric | Peer index |
| addr | string | Peer IP address and port |
| services | string | Services offered |
| lastsend | numeric | Last send time |
| lastrecv | numeric | Last receive time |
| bytessent | numeric | Total bytes sent |
| bytesrecv | numeric | Total bytes received |
| conntime | numeric | Connection time |
| timeoffset | numeric | Time offset |
| pingtime | numeric | Ping time |
| version | numeric | Peer version |
| subver | string | Version string |
| inbound | boolean | Whether inbound connection |
| startingheight | numeric | Peer starting height |
| banscore | numeric | Ban score |
| synced_headers | numeric | Last common block header |
| synced_blocks | numeric | Last common block |

#### Example
```bash
$ bitcoin-cli getpeerinfo
```

---

### listbanned

#### Description
Lists all banned IPs/subnets.

#### Parameters
None

#### Return Value
Array of banned IPs

#### Example
```bash
$ bitcoin-cli listbanned
```

---

### ping

#### Description
Requests that a ping be sent to all other nodes, to measure ping time.

#### Parameters
None

#### Return Value
None

#### Example
```bash
$ bitcoin-cli ping
```

---

### setban

#### Description
Attempts to add or remove an IP/subnet from the ban list.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| subnet | string | Yes | - | IP/subnet |
| command | string | Yes | - | 'add' or 'remove' |
| bantime | numeric | No | 24 hours | Ban time (seconds) |
| absolute | boolean | No | false | Whether to use absolute timestamp |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli setban "192.168.0.6" "add" 86400
$ bitcoin-cli setban "192.168.0.0/24" "add"
```

---

### setexcessiveblock

#### Description
Sets the size limit for excessive blocks. Excessive blocks are not used in the active chain or relayed.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| blockSize | numeric | Yes | - | Excessive block size (bytes) |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli setexcessiveblock 32000000
```

---

### setnetworkactive

#### Description
Enables/disables all P2P network activity.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| state | boolean | Yes | - | true enables networking, false disables |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli setnetworkactive true
```

---

## Rawtransactions

### createrawtransaction

#### Description
Creates a transaction spending the given inputs and creating new outputs. Returns the hex-encoded raw transaction. The transaction's inputs are not signed, and it is not stored in the wallet or transmitted to the network.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| inputs | array | Yes | - | Array of inputs, each element containing txid, vout, sequence |
| outputs | object | Yes | - | Output object, keys are addresses or "data", values are amounts or hex data |
| locktime | numeric | No | 0 | Raw locktime, non-0 value also activates locktime on inputs |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Hex string of the transaction |

#### Example
```bash
$ bitcoin-cli createrawtransaction '[{"txid":"myid","vout":0}]' '{"address":0.01}'
$ bitcoin-cli createrawtransaction '[{"txid":"myid","vout":0}]' '{"data":"00010203"}'
```

---

### decoderawtransaction

#### Description
Returns a JSON object representing a serialized, hex-encoded transaction.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| hexstring | string | Yes | - | Transaction hex string |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| txid | string | Transaction ID |
| hash | string | Transaction hash |
| size | numeric | Transaction size |
| version | numeric | Version |
| locktime | numeric | Locktime |
| vin | array | Input array |
| vout | array | Output array |

#### Example
```bash
$ bitcoin-cli decoderawtransaction "hexstring"
```

---

### decodescript

#### Description
Decodes a hex-encoded script.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| hexstring | string | Yes | - | Hex-encoded script |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| asm | string | Script public key |
| hex | string | Hex-encoded public key |
| type | string | Output type |
| reqSigs | numeric | Required signatures |
| addresses | array | Array of addresses |

#### Example
```bash
$ bitcoin-cli decodescript "hexstring"
```

---

### fundrawtransaction

#### Description
Adds inputs to a transaction until its input value is sufficient to cover its output value.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| hexstring | string | Yes | - | Hex string of the raw transaction |
| options | object | No | - | Options object containing changeAddress, changePosition, includeWatching, lockUnspents, feeRate, etc. |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| hex | string | Resulting raw transaction (hex-encoded) |
| fee | numeric | Fee paid by the transaction (cBTC) |
| changepos | numeric | Position of the added change output, -1 if no change |

#### Example
```bash
$ bitcoin-cli createrawtransaction "[]" '{"myaddress":0.01}'
$ bitcoin-cli fundrawtransaction "rawtransactionhex"
```

---

### getrawtransaction

#### Description
Returns raw transaction data. By default only works for mempool transactions, also works for blockchain transactions when -txindex option is enabled.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| txid | string | Yes | - | Transaction ID |
| verbose | boolean | No | false | false returns string, true returns json object |

#### Return Value (verbose=false)
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Serialized, hex-encoded data |

#### Return Value (verbose=true)
| Field | Type | Description |
|-------|------|-------------|
| hex | string | Serialized, hex-encoded data |
| txid | string | Transaction ID |
| hash | string | Transaction hash |
| size | numeric | Serialized transaction size |
| version | numeric | Version |
| locktime | numeric | Locktime |
| vin | array | Input array |
| vout | array | Output array |
| blockhash | string | Block hash |
| confirmations | numeric | Number of confirmations |
| time | numeric | Transaction time |
| blocktime | numeric | Block time |

#### Example
```bash
$ bitcoin-cli getrawtransaction "mytxid"
$ bitcoin-cli getrawtransaction "mytxid" true
```

---

### sendrawtransaction

#### Description
Submits raw transaction (serialized, hex-encoded) to local node and network.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| hexstring | string | Yes | - | Hex string of the raw transaction |
| allowhighfees | boolean | No | false | Allow high fees |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Transaction hash in hex |

#### Example
```bash
$ bitcoin-cli sendrawtransaction "signedhex"
```

---

### signrawtransaction

#### Description
Signs inputs for raw transaction.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| hexstring | string | Yes | - | Transaction hex string |
| prevtxs | array | No | - | Previous transaction outputs array |
| privkeys | array | No | - | Private keys for signing array |
| sighashtype | string | No | ALL | Signature hash type |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| hex | string | Hex-encoded raw transaction with signatures |
| complete | boolean | Whether the transaction has a complete set of signatures |
| errors | array | Script verification errors (if any) |

#### Example
```bash
$ bitcoin-cli signrawtransaction "myhex"
```

---

## Util

### createmultisig

#### Description
Creates a multisig script requiring n of m key signatures.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| nrequired | numeric | Yes | - | Number of required signatures |
| keys | array | Yes | - | Array of keys (addresses or hex-encoded public keys) |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| script | string | Hex-encoded multisig script |

#### Example
```bash
$ bitcoin-cli createmultisig 2 '["key1","key2"]'
```

---

### getblockminfee

#### Description
Returns the minimum fee per kilobyte required for a transaction to be accepted into a block.

The return value is the maximum of:
- Dynamic mempool minimum fee (increases when mempool is full)
- Block minimum transaction fee (-blockmintxfee configuration)
- Relay minimum fee (-minrelaytxfee configuration)

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | numeric | Minimum fee per kilobyte (cBTC) |

#### Example
```bash
$ bitcoin-cli getblockminfee
```

---

### signmessagewithprivkey

#### Description
Signs a message with a private key.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| privkey | string | Yes | - | Private key for signing |
| message | string | Yes | - | Message to sign |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Base64-encoded signature |

#### Example
```bash
$ bitcoin-cli signmessagewithprivkey "privkey" "my message"
```

---

### validateaddress

#### Description
Returns information about a given bitcoin address.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | Bitcoin address to validate |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| isvalid | boolean | Whether the address is valid |
| address | string | Validated bitcoin address |
| scriptPubKey | string | Hex-encoded scriptPubKey |
| ismine | boolean | Whether the address belongs to you |
| iswatchonly | boolean | Whether it's a watch-only address |
| isscript | boolean | Whether the key is a script |
| pubkey | string | Hex value of raw public key |
| iscompressed | boolean | Whether the address is compressed |

#### Example
```bash
$ bitcoin-cli validateaddress "1PSSGeFHDnKNxiEyFrD1wcEaHr9hrQDDWc"
```

---

### verifymessage

#### Description
Verifies a signed message.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | Bitcoin address used to sign |
| signature | string | Yes | - | Base64-encoded signature |
| message | string | Yes | - | Signed message |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | boolean | Whether signature verified |

#### Example
```bash
$ bitcoin-cli verifymessage "address" "signature" "my message"
```

---

## Wallet

### abandontransaction

#### Description
Marks an in-wallet transaction as abandoned. This will mark the transaction and all its in-wallet descendants as abandoned, allowing their inputs to be respent. Only works for transactions not included in a block and not currently in the mempool.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| txid | string | Yes | - | Transaction ID |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli abandontransaction "txid"
```

---

### backupwallet

#### Description
Safely copies the current wallet file to the destination.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| destination | string | Yes | - | Destination directory or file path |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli backupwallet "backup.dat"
```

---

### dumpprivkey

#### Description
Reveals the private key corresponding to an address.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | Bitcoin address |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Private key |

#### Example
```bash
$ bitcoin-cli dumpprivkey "myaddress"
```

---

### dumpwallet

#### Description
Dumps all wallet keys in a human-readable format to a server-side file.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| filename | string | Yes | - | Filename with path |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| filename | string | Filename with full absolute path |

#### Example
```bash
$ bitcoin-cli dumpwallet "test"
```

---

### encryptwallet

#### Description
Encrypts the wallet with a passphrase. This is for first-time encryption. After encryption, any calls that involve private keys (such as sending or signing) require setting the passphrase first. Note that this command will shut down the server.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| passphrase | string | Yes | - | Passphrase to encrypt the wallet |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli encryptwallet "my pass phrase"
```

---

### getbalance

#### Description
Returns the server's total available balance.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| minconf | numeric | No | 1 | Minimum confirmations |
| include_watchonly | boolean | No | false | Whether to include watch-only addresses |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | numeric | Total amount (cBTC) |

#### Example
```bash
$ bitcoin-cli getbalance
$ bitcoin-cli getbalance 6
```

---

### getnewaddress

#### Description
Returns a new bitcoin address for receiving payments. If `label` is specified, it is added to the address book, and payments received with this address will be associated with that label.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| label | string | No | "" | Label name to associate with the address |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | New bitcoin address |

#### Example
```bash
$ bitcoin-cli getnewaddress
$ bitcoin-cli getnewaddress "mylabel"
```

---

### getrawchangeaddress

#### Description
Returns a new bitcoin address for receiving change. For use with raw transactions, not normal use.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Address |

#### Example
```bash
$ bitcoin-cli getrawchangeaddress
```

---

### getreceivedbyaddress

#### Description
Returns the total amount received by the given address in transactions with at least minconf confirmations.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | Bitcoin address |
| minconf | numeric | No | 1 | Minimum confirmations |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | numeric | Total amount received (cBTC) |

#### Example
```bash
$ bitcoin-cli getreceivedbyaddress "address"
$ bitcoin-cli getreceivedbyaddress "address" 6
```

---

### gettransaction

#### Description
Gets detailed information about an in-wallet transaction.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| txid | string | Yes | - | Transaction ID |
| include_watchonly | boolean | No | false | Whether to include watch-only addresses |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| amount | numeric | Transaction amount (cBTC) |
| fee | numeric | Fee amount (send category only) |
| confirmations | numeric | Number of confirmations |
| blockhash | string | Block hash |
| blockindex | numeric | Transaction index in block |
| blocktime | numeric | Block time |
| txid | string | Transaction ID |
| time | numeric | Transaction time |
| timereceived | numeric | Time received |
| details | array | Transaction details array |
| hex | string | Raw transaction data |

#### Example
```bash
$ bitcoin-cli gettransaction "txid"
```

---

### getunconfirmedbalance

#### Description
Returns the server's total unconfirmed balance.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | numeric | Unconfirmed balance |

#### Example
```bash
$ bitcoin-cli getunconfirmedbalance
```

---

### getwalletinfo

#### Description
Returns various wallet state information.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| walletname | string | Wallet name |
| walletversion | numeric | Wallet version |
| balance | numeric | Confirmed total balance (cBTC) |
| unconfirmed_balance | numeric | Unconfirmed total balance (cBTC) |
| immature_balance | numeric | Immature total balance (cBTC) |
| txcount | numeric | Total number of transactions in the wallet |
| keypoololdest | numeric | Timestamp of the oldest pre-generated key in the keypool |
| keypoolsize | numeric | Number of pre-generated new keys |
| unlocked_until | numeric | Timestamp until which the wallet is unlocked |
| paytxfee | numeric | Transaction fee configuration (cBTC/kB) |
| hdmasterkeyid | string | Hash160 of the HD master public key |

#### Example
```bash
$ bitcoin-cli getwalletinfo
```

---

### importaddress

#### Description
Adds a script (hex) or address that can be watched as if it were in your wallet but cannot be used to spend.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| script | string | Yes | - | Hex-encoded script or address |
| label | string | No | "" | Optional label |
| rescan | boolean | No | true | Rescan wallet transactions |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli importaddress "myscript"
$ bitcoin-cli importaddress "myscript" "testing" false
```

---

### importmulti

#### Description
Imports addresses/scripts (with private or public keys), rescan all addresses at once.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| requests | array | Yes | - | Array of data to import |
| options | object | No | - | Options object containing rescan field |

#### Return Value
Array of execution results for each request

#### Example
```bash
$ bitcoin-cli importmulti '[{"scriptPubKey":{"address":"<address>"},"timestamp":1455191478}]'
```

---

### importprivkey

#### Description
Adds a private key to the wallet.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| bitcoinprivkey | string | Yes | - | Private key |
| label | string | No | "" | Optional label |
| rescan | boolean | No | true | Rescan wallet transactions |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli importprivkey "mykey"
$ bitcoin-cli importprivkey "mykey" "testing" false
```

---

### importprunedfunds

#### Description
Imports funds without rescanning. The corresponding address or script must already be included in the wallet. Designed for pruned wallets.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| rawtransaction | string | Yes | - | Raw transaction (hex) funding an address already in the wallet |
| txoutproof | string | Yes | - | Hex output from gettxoutproof |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli importprunedfunds "rawtransaction" "txoutproof"
```

---

### importpubkey

#### Description
Adds a public key (hex) that can be watched as if it were in your wallet but cannot be used to spend.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| pubkey | string | Yes | - | Hex-encoded public key |
| label | string | No | "" | Optional label |
| rescan | boolean | No | true | Rescan wallet transactions |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli importpubkey "mypubkey"
```

---

### importwallet

#### Description
Imports keys from a wallet dump file.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| filename | string | Yes | - | Wallet file |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli importwallet "test"
```

---

### keypoolrefill

#### Description
Fills the keypool.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| newsize | numeric | No | 100 | New keypool size |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli keypoolrefill
```

---

### listaddressgroupings

#### Description
Lists groups of addresses that have had their common ownership publicly exposed by being used as inputs together in past transactions or as change.

#### Parameters
None

#### Return Value
Array of address groups, each address entry containing:
| Field | Type | Description |
|-------|------|-------------|
| address | string | Bitcoin address |
| amount | numeric | Balance (cBTC) |
| label | string | (Optional) Label for the address |

#### Example
```bash
$ bitcoin-cli listaddressgroupings
```

---

### listlockunspent

#### Description
Returns a list of temporarily unspendable outputs.

#### Parameters
None

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| txid | string | Locked transaction ID |
| vout | numeric | vout value |

#### Example
```bash
$ bitcoin-cli listlockunspent
```

---

### listreceivedbyaddress

#### Description
Lists balances by receiving address.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| minconf | numeric | No | 1 | Minimum confirmations |
| include_empty | boolean | No | false | Whether to include addresses that haven't received payments |
| include_watchonly | boolean | No | false | Whether to include watch-only addresses |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| involvesWatchonly | boolean | Only returned if an imported address is involved |
| address | string | Receiving address |
| amount | numeric | Total amount received by this address (cBTC) |
| confirmations | numeric | Number of confirmations of the most recent transaction |
| label | string | Label for the receiving address, default is "" |
| txids | array | Array of received transaction IDs |

#### Example
```bash
$ bitcoin-cli listreceivedbyaddress
$ bitcoin-cli listreceivedbyaddress 6 true
```

---

### listsinceblock

#### Description
Gets all transactions since a specified block, or all transactions if omitted.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| blockhash | string | No | - | Starting block hash |
| target_confirmations | numeric | No | 1 | Required confirmations |
| include_watchonly | boolean | No | false | Whether to include watch-only addresses |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| transactions | array | Array of transactions |
| lastblock | string | Hash of the last block |

#### Example
```bash
$ bitcoin-cli listsinceblock
$ bitcoin-cli listsinceblock "blockhash" 6
```

---

### listtransactions

#### Description
Returns the wallet's most recent transactions.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| count | numeric | No | 10 | Number of transactions to return |
| skip | numeric | No | 0 | Number of transactions to skip |
| include_watchonly | boolean | No | false | Whether to include watch-only addresses |

#### Return Value
Array of transactions

#### Example
```bash
$ bitcoin-cli listtransactions
$ bitcoin-cli listtransactions 20 100
```

---

### listunspent

#### Description
Returns an array of unspent transaction outputs with between minconf and maxconf (inclusive) confirmations.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| minconf | numeric | No | 1 | Minimum confirmations |
| maxconf | numeric | No | 9999999 | Maximum confirmations |
| addresses | array | No | - | Address filter array |
| include_unsafe | boolean | No | true | Whether to include unsafe outputs |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| txid | string | Transaction ID |
| vout | numeric | vout value |
| address | string | Bitcoin address |
| scriptPubKey | string | Script key |
| data | string | Additional data field for output |
| amount | numeric | Transaction output amount (cBTC) |
| confirmations | numeric | Number of confirmations |
| spendable | boolean | Whether we have the private key to spend |
| solvable | boolean | Whether we know how to spend |
| safe | boolean | Whether it's safe to spend |

#### Example
```bash
$ bitcoin-cli listunspent
[
  {
    "txid": "b64510583b748ccd17c8fb4f585f1f8547b90bbe2d29e43cbd57d10e8f9902ae",
    "vout": 0,
    "address": "mh4MVpMRiH5jrTGnutcxM5RCky8zfoNDfE",
    "scriptPubKey": "76a91410e863ab536d4fc8c39395ed4351fcf1a12d027c88ac",
    "data": "",
    "amount": 20999950.00000000,
    "confirmations": 101,
    "spendable": true,
    "solvable": true,
    "safe": true
  }
]
```

---

### listwallets

#### Description
Returns a list of currently loaded wallets.

#### Parameters
None

#### Return Value
Array of wallet names

#### Example
```bash
$ bitcoin-cli listwallets
```

---

### lockunspent

#### Description
Updates the list of temporarily unspendable outputs. Locks or unlocks specified transaction outputs.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| unlock | boolean | Yes | - | true unlocks, false locks |
| transactions | array | No | - | Array of transaction outputs containing txid and vout |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | boolean | Whether the command succeeded |

#### Example
```bash
$ bitcoin-cli lockunspent false '[{"txid":"txid","vout":1}]'
$ bitcoin-cli lockunspent true '[{"txid":"txid","vout":1}]'
```

---

### removeprunedfunds

#### Description
Deletes the specified transaction from the wallet. Used for pruned wallets as a companion to importprunedfunds.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| txid | string | Yes | - | Transaction ID (hex) |

#### Return Value
None

#### Example
```bash
$ bitcoin-cli removeprunedfunds "txid"
```

---

### sendmany

#### Description
Sends multiple amounts to multiple addresses.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| amounts | object | Yes | - | Address and amount object |
| minconf | numeric | No | 1 | Minimum confirmations |
| comment | string | No | - | Comment |
| subtractfeefrom | array | No | - | Array of addresses to subtract fee from |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Transaction ID |

#### Example
```bash
$ bitcoin-cli sendmany '{"address1":0.01,"address2":0.02}'
```

---

### sendtoaddress

#### Description
Sends an amount to a given address.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | Bitcoin address |
| amount | numeric | Yes | - | Amount (cBTC) |
| comment | string | No | - | Comment |
| comment_to | string | No | - | Comment for recipient |
| subtractfeefromamount | boolean | No | false | Whether to subtract fee from amount |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Transaction ID |

#### Example
```bash
$ bitcoin-cli sendtoaddress "address" 0.1
$ bitcoin-cli sendtoaddress "address" 0.1 "donation" "seans outpost"
```

---

### settxfee

#### Description
Sets the transaction fee per kB. Overrides the paytxfee parameter.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| amount | numeric | Yes | - | Transaction fee (cBTC/kB) |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | boolean | Whether successful |

#### Example
```bash
$ bitcoin-cli settxfee 0.00001
```

---

### signmessage

#### Description
Signs a message with the private key of an address.

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| address | string | Yes | - | Bitcoin address for the private key |
| message | string | Yes | - | Message to sign |

#### Return Value
| Field | Type | Description |
|-------|------|-------------|
| (return value) | string | Base64-encoded signature |

#### Example
```bash
$ bitcoin-cli signmessage "address" "my message"
```

---

## Command Statistics

| Category | Count |
|----------|-------|
| Blockchain | 21 |
| Control | 5 |
| Generating | 2 |
| Mining | 6 |
| Network | 14 |
| Rawtransactions | 7 |
| Util | 5 |
| Wallet | 32 |
| **Total** | **92** |
