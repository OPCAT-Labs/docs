---
sidebar_label: Node Configuration
sidebar_position: 2
---

# Node Configuration

This document lists all configurable startup parameters for the OpcatLayer node.

## Table of Contents

- [General Options](#general-options)
  - [Basic Options](#1-basic-options)
  - [Chain Selection Options](#2-chain-selection-options)
  - [Connection Options](#3-connection-options)
  - [Wallet Options](#4-wallet-options)
  - [ZeroMQ Notification Options](#5-zeromq-notification-options)
  - [Debugging/Testing Options](#6-debuggingtesting-options)
  - [Node Relay Options](#7-node-relay-options)
  - [Block Creation Options](#8-block-creation-options)
  - [RPC Server Options](#9-rpc-server-options)
- [Advanced Options](#advanced-options-requires--help-debug)
  - [Advanced Debugging/Testing Options](#10-advanced-debuggingtesting-options)
  - [Advanced Wallet Options](#11-advanced-wallet-options)
  - [Advanced RPC Options](#12-advanced-rpc-options)
  - [Advanced Database/Network Options](#13-advanced-databasenetwork-options)
- [Option Value Reference](#option-value-reference)
  - [-debug Log Categories](#-debug-log-categories)
  - [-onlynet Network Types](#-onlynet-network-types)

---

## General Options

### 1. Basic Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-?` | Print help message and exit | Boolean | - |
| `-version` | Print version and exit | Boolean | - |
| `-alertnotify=<cmd>` | Execute command when a relevant alert is received or a long fork is detected (`%s` is replaced by message), e.g., `-alertnotify="echo %s"` | String | None |
| `-blocknotify=<cmd>` | Execute command when best block changes (`%s` is replaced by block hash), e.g., `-blocknotify="curl http://api/block/%s"` | String | None |
| `-conf=<file>` | Specify configuration file, e.g., `-conf=/path/to/my.conf` | File path | `bitcoin.conf` |
| `-daemon` | Run in background as a daemon, e.g., `-daemon=1` | Boolean | `0` |
| `-datadir=<dir>` | Specify data directory, e.g., `-datadir=/data/opcatlayer` | Directory path | Platform default |
| `-dbcache=<n>` | Database cache size in megabytes, e.g., `-dbcache=1024` | Integer | `450` (Range: 4-16384) |
| `-loadblock=<file>` | Import blocks from external blk000??.dat file on startup, e.g., `-loadblock=/path/to/blk00000.dat` | File path | None |
| `-maxorphantx=<n>` | Maximum number of orphan transactions to keep in memory, e.g., `-maxorphantx=200` | Integer | `100` |
| `-maxmempool=<n>` | Maximum mempool size in megabytes, e.g., `-maxmempool=2000` | Integer | `1000` |
| `-mempoolexpiry=<n>` | Maximum hours to keep transactions in mempool, e.g., `-mempoolexpiry=72` | Integer | `336` |
| `-persistmempool` | Save mempool on shutdown and load on restart, e.g., `-persistmempool=0` | Boolean | `1` |
| `-blockreconstructionextratxn=<n>` | Extra transactions to keep for compact block reconstruction, e.g., `-blockreconstructionextratxn=200` | Integer | `100` |
| `-par=<n>` | Number of script verification threads (0=auto, <0=leave that many cores free), e.g., `-par=4` | Integer | `0` |
| `-pid=<file>` | Specify PID file, e.g., `-pid=/var/run/bitcoind.pid` | File path | `bitcoind.pid` |
| `-prune=<n>` | Pruning mode (0=disable, 1=manual RPC, >550=auto target size in MB), e.g., `-prune=10000` | Integer | `0` |
| `-reindex` | Rebuild chain state and block index from blk*.dat files | Boolean | `0` |
| `-reindex-chainstate` | Rebuild chain state from currently indexed blocks | Boolean | `0` |
| `-txindex` | Maintain full transaction index (used by getrawtransaction), e.g., `-txindex=1` | Boolean | `0` |
| `-assumevalid=<hex>` | Assume this block and its ancestors are valid, skip script verification (0=verify all), e.g., `-assumevalid=0` | Hex | Chain parameter default |

---

### 2. Chain Selection Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-testnet` | Use test network, e.g., `-testnet=1` | Boolean | `0` |
| `-regtest` | Enter regression test mode (blocks can be solved instantly), e.g., `-regtest=1` | Boolean | `0` |

---

### 3. Connection Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-addnode=<ip>` | Add a node to connect to and attempt to keep the connection open, e.g., `-addnode=192.168.1.100` | IP address | None |
| `-banscore=<n>` | Threshold for disconnecting misbehaving peers, e.g., `-banscore=50` | Integer | `100` |
| `-bantime=<n>` | Number of seconds to keep misbehaving peers from reconnecting, e.g., `-bantime=3600` | Integer | `86400` (24 hours) |
| `-bind=<addr>` | Bind to given address and always listen on it (use `[host]:port` for IPv6), e.g., `-bind=0.0.0.0:18444` | Address | All interfaces |
| `-broadcastdelay=<n>` | Inventory broadcast delay in milliseconds, e.g., `-broadcastdelay=100` | Integer | `150` (Range: 0-50000) |
| `-connect=<ip>` | Connect only to specified node(s) (`-connect=0` disables automatic connections), e.g., `-connect=192.168.1.100` | IP address | None |
| `-discover` | Discover own IP addresses, e.g., `-discover=0` | Boolean | `1` (when listening and no proxy) |
| `-dns` | Allow DNS lookups for -addnode/-seednode/-connect, e.g., `-dns=0` | Boolean | `1` |
| `-dnsseed` | Query for peer addresses via DNS lookup, e.g., `-dnsseed=0` | Boolean | `1` (unless using -connect) |
| `-externalip=<ip>` | Specify your own public address, e.g., `-externalip=1.2.3.4` | IP address | None |
| `-forcednsseed` | Always query for peer addresses via DNS lookup, e.g., `-forcednsseed=0` | Boolean | `1` |
| `-listen` | Accept connections from outside, e.g., `-listen=0` | Boolean | `1` (if no proxy or -connect) |
| `-maxconnections=<n>` | Maximum number of peer connections, e.g., `-maxconnections=50` | Integer | `125` |
| `-maxreceivebuffer=<n>` | Maximum per-connection receive buffer (n×1000 bytes), e.g., `-maxreceivebuffer=32000` | Integer | `16000` (16MB) |
| `-maxsendbuffer=<n>` | Maximum per-connection send buffer (n×1000 bytes), e.g., `-maxsendbuffer=64000` | Integer | `32000` (32MB) |
| `-maxprotocolrecvpayloadlength=<n>` | Maximum protocol receive payload length in bytes, e.g., `-maxprotocolrecvpayloadlength=8388608` | Integer | `4194304` (4MB, Range: 1MB-1GB) |
| `-recvinvqueuefactor=<n>` | Per-node inventory message queue factor, e.g., `-recvinvqueuefactor=5` | Integer | `3` (Range: 1-100) |
| `-maxtimeadjustment` | Maximum allowed median peer time offset adjustment in seconds, e.g., `-maxtimeadjustment=3600` | Integer | `4200` (70 minutes) |
| `-onlynet=<net>` | Only connect to nodes in network (ipv4 or ipv6), e.g., `-onlynet=ipv4` | String | None |
| `-peerbloomfilters` | Support bloom filters for filtering blocks and transactions, e.g., `-peerbloomfilters=0` | Boolean | `1` |
| `-rejectmempoolrequest` | Reject mempool requests from non-whitelisted peers, e.g., `-rejectmempoolrequest=1` | Boolean | `0` |
| `-port=<port>` | Listen for connections on port, e.g., `-port=18445` | Integer | Mainnet `18444` / Testnet `28444` |
| `-proxy=<ip:port>` | Connect through SOCKS5 proxy, e.g., `-proxy=127.0.0.1:9050` | Address | None |
| `-proxyrandomize` | Randomize credentials for every proxy connection, e.g., `-proxyrandomize=0` | Boolean | `1` |
| `-seednode=<ip>` | Connect to a node to retrieve peer addresses, then disconnect, e.g., `-seednode=seed.example.com` | IP address | None |
| `-timeout=<n>` | Connection timeout in milliseconds, e.g., `-timeout=10000` | Integer | `5000` |
| `-upnp` | Use UPnP to map the listening port, e.g., `-upnp=0` | Boolean | `1` (when listening and no proxy) |
| `-whitebind=<addr>` | Bind to given address and whitelist peers connecting to it, e.g., `-whitebind=0.0.0.0:18444` | Address | None |
| `-whitelist=<IP>` | Whitelist IP/network (won't be DoS banned, transactions always relayed), e.g., `-whitelist=192.168.1.0/24` | IP/CIDR | None |
| `-whitelistrelay` | Accept relayed transactions from whitelisted peers even when not relaying, e.g., `-whitelistrelay=0` | Boolean | `1` |
| `-whitelistforcerelay` | Force relay of transactions from whitelisted peers even if they violate local policy, e.g., `-whitelistforcerelay=0` | Boolean | `1` |
| `-maxuploadtarget=<n>` | Try to keep outbound traffic under the given target (MiB/24h, 0=no limit), e.g., `-maxuploadtarget=1000` | Integer | `0` |

---

### 4. Wallet Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-disablewallet` | Disable wallet functionality, e.g., `-disablewallet=1` | Boolean | `0` |
| `-keypool=<n>` | Key pool size, e.g., `-keypool=2000` | Integer | `1000` |
| `-paytxfee=<amt>` | Fee to add when sending transactions (COIN/kB), e.g., `-paytxfee=0.0001` | Amount | `0.00` |
| `-rescan` | Rescan the blockchain for missing wallet transactions on startup | Boolean | `0` |
| `-salvagewallet` | Attempt to recover private keys from a corrupt wallet on startup | Boolean | `0` |
| `-spendzeroconfchange` | Spend unconfirmed change when sending transactions, e.g., `-spendzeroconfchange=0` | Boolean | `1` |
| `-txconfirmtarget=<n>` | If paytxfee is not set, target confirmation within n blocks, e.g., `-txconfirmtarget=2` | Integer | `6` |
| `-usehd` | Use hierarchical deterministic key generation (BIP32), e.g., `-usehd=0` | Boolean | `1` |
| `-upgradewallet` | Upgrade wallet to latest format on startup | Boolean | `0` |
| `-wallet=<file>` | Specify wallet file, e.g., `-wallet=mywallet.dat` | Filename | `wallet.dat` |
| `-walletbroadcast` | Wallet broadcasts transactions, e.g., `-walletbroadcast=0` | Boolean | `1` |
| `-walletnotify=<cmd>` | Execute command when wallet transaction changes (`%s` replaced by TxID), e.g., `-walletnotify="echo %s"` | String | None |
| `-zapwallettxes=<mode>` | Delete all wallet transactions and recover via -rescan (1=keep metadata, 2=drop), e.g., `-zapwallettxes=1` | Integer | None |

---

### 5. ZeroMQ Notification Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-zmqpubhashblock=<address>` | Publish block hash, e.g., `-zmqpubhashblock=tcp://127.0.0.1:28332` | Address | None |
| `-zmqpubhashtx=<address>` | Publish transaction hash, e.g., `-zmqpubhashtx=tcp://127.0.0.1:28332` | Address | None |
| `-zmqpubrawblock=<address>` | Publish raw block, e.g., `-zmqpubrawblock=tcp://127.0.0.1:28332` | Address | None |
| `-zmqpubrawtx=<address>` | Publish raw transaction, e.g., `-zmqpubrawtx=tcp://127.0.0.1:28332` | Address | None |

---

### 6. Debugging/Testing Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-uacomment=<cmt>` | Append comment to user agent string, e.g., `-uacomment=mynode` | String | None |
| `-debug=<category>` | Output debugging information (see [-debug Log Categories](#-debug-log-categories)), e.g., `-debug=net` | String | `0` |
| `-nodebug` | Turn off debugging, same as `-debug=0` | Boolean | - |
| `-debugexclude=<category>` | Exclude debugging information for a category (use with `-debug=1`), e.g., `-debugexclude=libevent` | String | None |
| `-help-debug` | Show all debugging options | Boolean | `0` |
| `-logips` | Include IP addresses in debug output, e.g., `-logips=1` | Boolean | `0` |
| `-logtimestamps` | Prepend debug output with timestamp, e.g., `-logtimestamps=0` | Boolean | `1` |
| `-excessutxocharge=<amt>` | Extra fee charged per UTXO created (COIN/kB), e.g., `-excessutxocharge=0.001` | Amount | `0` |
| `-minrelaytxfee=<amt>` | Fees smaller than this are considered zero fee for relaying and mining, e.g., `-minrelaytxfee=0.00001` | Amount | `0.00000001` |
| `-maxtxfee=<amt>` | Maximum total fees for a single wallet or raw transaction, e.g., `-maxtxfee=1.0` | Amount | `0.10` |
| `-printtoconsole` | Send debug output to console instead of debug.log, e.g., `-printtoconsole=1` | Boolean | `0` |
| `-shrinkdebugfile` | Shrink debug.log file on client startup, e.g., `-shrinkdebugfile=0` | Boolean | `1` (when no -debug) |

---

### 7. Node Relay Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-excessiveblocksize=<n>` | Do not accept blocks larger than this limit in bytes, e.g., `-excessiveblocksize=64000000` | Integer | 128MB |
| `-bytespersigop` | Equivalent bytes per sigop in transactions for relay and mining, e.g., `-bytespersigop=50` | Integer | `20` |

---

### 8. Block Creation Options

| Option | Description | Type | Default | Consensus Limit |
|--------|-------------|------|---------|-----------------|
| `-blockmaxsize=<n>` | Maximum generated block size in bytes, e.g., `-blockmaxsize=16000000` | Integer | `32000000` (32MB) | - |
| `-blockmintxfee=<amt>` | Minimum fee rate for transactions included in block (COIN/kB), e.g., `-blockmintxfee=0.00001` | Amount | `0.00000001` | - |
| `-maxtxsizepolicy=<n>` | Maximum transaction size for policy validation in bytes, e.g., `-maxtxsizepolicy=20000000` | Integer | `10000000` (10MB) | `1000000000` (1GB) |
| `-maxtxsigopscountpolicy=<n>` | Maximum transaction sigops count for policy validation, e.g., `-maxtxsigopscountpolicy=100000` | Integer | `UINT32_MAX` | `UINT32_MAX` |
| `-maxscriptnumlengthpolicy=<n>` | Maximum script number length for policy validation in bytes, e.g., `-maxscriptnumlengthpolicy=20000` | Integer | `10000` (10KB) | `750000` (750KB) |
| `-maxscriptsizepolicy=<n>` | Maximum script size for policy validation in bytes, e.g., `-maxscriptsizepolicy=1000000` | Integer | `500000` (500KB) | `UINT32_MAX` |
| `-maxopsperscriptpolicy=<n>` | Maximum operations per script for policy validation, e.g., `-maxopsperscriptpolicy=1000000` | Integer | `UINT32_MAX` | `UINT32_MAX` |
| `-maxpubkeyspermultisigpolicy=<n>` | Maximum public keys per multisig for policy validation, e.g., `-maxpubkeyspermultisigpolicy=100` | Integer | `UINT32_MAX` | `UINT32_MAX` |
| `-maxstackmemoryusagepolicy=<n>` | Maximum stack memory usage for policy validation in bytes, e.g., `-maxstackmemoryusagepolicy=200000000` | Integer | `100000000` (100MB) | `INT64_MAX` |

---

### 9. RPC Server Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-server` | Accept command line and JSON-RPC commands, e.g., `-server=1` | Boolean | `1` |
| `-rest` | Accept public REST requests, e.g., `-rest=1` | Boolean | `0` |
| `-rpcbind=<addr>` | Bind to given address to listen for JSON-RPC connections (use `[host]:port` for IPv6), e.g., `-rpcbind=127.0.0.1` | Address | All interfaces |
| `-rpccookiefile=<loc>` | Location of the auth cookie, e.g., `-rpccookiefile=/path/to/.cookie` | File path | Data directory |
| `-rpcuser=<user>` | Username for JSON-RPC connections, e.g., `-rpcuser=admin` | String | None |
| `-rpcpassword=<pw>` | Password for JSON-RPC connections, e.g., `-rpcpassword=secret` | String | None |
| `-rpcauth=<userpw>` | Username and hashed password for JSON-RPC (format: `USER:SALT$HASH`), e.g., `-rpcauth=user:salt$hash` | String | None |
| `-rpcport=<port>` | Listen for JSON-RPC connections on port, e.g., `-rpcport=18443` | Integer | Mainnet `18443` / Testnet `28443` |
| `-rpcallowip=<ip>` | Allow JSON-RPC connections from specified source IP/network, e.g., `-rpcallowip=192.168.1.0/24` | IP/CIDR | None |
| `-rpcthreads=<n>` | Number of threads for RPC calls, e.g., `-rpcthreads=8` | Integer | `4` |
| `-rpccorsdomain=<value>` | Domain to accept cross-origin requests from, e.g., `-rpccorsdomain=*` | String | None |

---

## Advanced Options (requires -help-debug)

The following options are mainly for debugging, testing, and performance tuning. They are not shown in `bitcoind -help` and require `bitcoind -help -help-debug` to display.

### 10. Advanced Debugging/Testing Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-blocksonly` | Run in blocks only mode (do not relay transactions), e.g., `-blocksonly=1` | Boolean | `0` |
| `-checkblocks=<n>` | How many blocks to check at startup (0=all), e.g., `-checkblocks=100` | Integer | `6` |
| `-checklevel=<n>` | How thorough the block verification is (0-4), e.g., `-checklevel=4` | Integer | `3` |
| `-checkblockindex` | Do a full consistency check for mapBlockIndex and related structures, e.g., `-checkblockindex=1` | Boolean | Chain parameter default |
| `-checkmempool=<n>` | Run checks every n transactions, e.g., `-checkmempool=1` | Integer | Chain parameter default |
| `-checkpoints` | Only accept block chain matching built-in checkpoints, e.g., `-checkpoints=0` | Boolean | `1` |
| `-disablesafemode` | Disable safemode, override a real safe mode event, e.g., `-disablesafemode=1` | Boolean | `0` |
| `-testsafemode` | Force safe mode, e.g., `-testsafemode=1` | Boolean | `0` |
| `-dropmessagestest=<n>` | Randomly drop 1 of every n network messages, e.g., `-dropmessagestest=10` | Integer | None |
| `-fuzzmessagestest=<n>` | Randomly fuzz 1 of every n network messages, e.g., `-fuzzmessagestest=10` | Integer | None |
| `-stopafterblockimport` | Stop running after importing blocks from disk, e.g., `-stopafterblockimport=1` | Boolean | `0` |
| `-stopatheight=<n>` | Stop running after reaching the given height, e.g., `-stopatheight=100000` | Integer | `0` |
| `-logtimemicros` | Add microsecond precision to debug timestamps, e.g., `-logtimemicros=1` | Boolean | `0` |
| `-mocktime=<n>` | Replace actual time with specified epoch seconds, e.g., `-mocktime=1234567890` | Integer | `0` |
| `-maxsigcachesize=<n>` | Limit size of signature cache in MiB, e.g., `-maxsigcachesize=64` | Integer | `32` |
| `-maxscriptcachesize=<n>` | Limit size of script cache in MiB, e.g., `-maxscriptcachesize=128` | Integer | `64` |
| `-maxtipage=<n>` | Maximum tip age in seconds to consider node in initial block download, e.g., `-maxtipage=3600` | Integer | `86400` (24 hours) |
| `-dbbatchsize=<n>` | Maximum database write batch size in bytes, e.g., `-dbbatchsize=33554432` | Integer | `16777216` (16MB) |
| `-feefilter` | Tell other nodes to filter invs by our mempool min fee, e.g., `-feefilter=0` | Boolean | `1` |
| `-minimumchainwork=<hex>` | Minimum work assumed to exist on a valid chain (hex), e.g., `-minimumchainwork=0x00` | Hex | Chain parameter default |
| `-blockversion=<n>` | Override block version to test forking scenarios, e.g., `-blockversion=4` | Integer | None |
| `-maxtxvalidationduration=<n>` | Maximum transaction validation duration in milliseconds, e.g., `-maxtxvalidationduration=1000` | Integer | `500` |

---

### 11. Advanced Wallet Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-dblogsize=<n>` | Flush wallet database activity from memory to disk log every n MB, e.g., `-dblogsize=200` | Integer | `100` |
| `-flushwallet` | Run a thread to flush wallet periodically, e.g., `-flushwallet=0` | Boolean | `1` |
| `-privdb` | Set DB_PRIVATE flag in wallet database environment, e.g., `-privdb=0` | Boolean | `1` |
| `-walletrejectlongchains` | Wallet will not create transactions that violate mempool chain limits, e.g., `-walletrejectlongchains=1` | Boolean | `0` |

---

### 12. Advanced RPC Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-rpcworkqueue=<n>` | Set the depth of the work queue for RPC calls, e.g., `-rpcworkqueue=32` | Integer | `16` |
| `-rpcservertimeout=<n>` | Timeout during HTTP requests in seconds, e.g., `-rpcservertimeout=60` | Integer | `30` |

---

### 13. Advanced Database/Network Options

| Option | Description | Type | Default |
|--------|-------------|------|---------|
| `-forcecompactdb` | Force database compaction on startup, e.g., `-forcecompactdb=1` | Boolean | `0` |
| `-dbcrashratio=<n>` | Simulate database crash (debug only, 1/n probability), e.g., `-dbcrashratio=100` | Integer | `0` |
| `-txnpropagationfreq=<n>` | Transaction propagation frequency in milliseconds, e.g., `-txnpropagationfreq=500` | Integer | `250` |
| `-sysperms` | Create new files with system default permissions (only with wallet disabled), e.g., `-sysperms=1` | Boolean | `0` |

---

## Option Value Reference

### -debug Log Categories

The `-debug=<category>` option accepts the following categories:

| Category | Description |
|----------|-------------|
| `net` | Network related logs |
| `mempool` | Mempool operation logs |
| `http` | HTTP service logs |
| `bench` | Benchmark/performance logs |
| `zmq` | ZeroMQ notification logs |
| `db` | Database operation logs |
| `rpc` | RPC call logs |
| `addrman` | Address manager logs |
| `selectcoins` | Coin selection algorithm logs |
| `reindex` | Reindex logs |
| `cmpctblock` | Compact block logs |
| `rand` | Random number generation logs |
| `prune` | Block pruning logs |
| `proxy` | Proxy connection logs |
| `mempoolrej` | Mempool rejection reason logs |
| `libevent` | libevent library logs |
| `coindb` | UTXO database logs |
| `leveldb` | LevelDB logs |
| `layer` | Layer related logs |
| `1` / `all` | Enable all logs |

Multiple categories can be specified: `-debug=net -debug=rpc`

Use `-debugexclude` to exclude specific categories: `-debug=1 -debugexclude=libevent`

---

### -onlynet Network Types

The `-onlynet=<net>` option accepts the following network types:

| Type | Description |
|------|-------------|
| `ipv4` | Use IPv4 network only |
| `ipv6` | Use IPv6 network only |

Multiple networks can be specified: `-onlynet=ipv4 -onlynet=ipv6`
