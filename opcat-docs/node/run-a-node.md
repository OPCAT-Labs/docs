---
sidebar_label: Run a Node
sidebar_position: 3
---

# Run a Node

This guide explains how to set up and run an OP_CAT Layer node. You can either run a node using pre-built binaries or Docker.

## Option 1: Using Pre-built Binaries

### Prerequisites

#### Ubuntu 22.04

```bash
sudo apt update
sudo apt install -y libssl3 libevent-2.1-7 libboost-filesystem1.74.0 libboost-thread1.74.0 libboost-program-options1.74.0 libboost-chrono1.74.0 libdb5.3++ libzmq5 libsodium23 libminiupnpc17 libevent-pthreads-2.1-7 zlib1g
```

#### Ubuntu 24.04

```bash
sudo apt update
sudo apt install -y libssl3 libevent-2.1-7t64 libboost-filesystem1.83.0 libboost-thread1.83.0 libboost-program-options1.83.0 libboost-chrono1.83.0 libdb5.3++ libzmq5 libsodium23 libminiupnpc17 libevent-pthreads-2.1-7t64 zlib1g
```

### Download

Download the latest release from: https://github.com/OPCAT-Labs/layer/releases/latest

Extract the archive:

```bash
tar -xzf opcatlayer-<version>-<platform>.tar.gz
```

### Configuration

Create the configuration file at `~/.bitcoin/bitcoin.conf`:

```ini
testnet=1
daemon=1

rest=1
txindex=1

rpcuser=opcatlayer
rpcpassword=Awes0meLayer!
rpcbind=0.0.0.0
rpcallowip=0.0.0.0/0
```

### Run the Node

Start the node:

```bash
./bitcoind
```

Check node status:

```bash
./bitcoin-cli getblockchaininfo
```

### Stop the Node

```bash
./bitcoin-cli stop
```

---

## Option 2: Using Docker

### Prerequisites

- Docker and Docker Compose installed

### Quick Start

Clone the release repository:

```bash
git clone https://github.com/OPCAT-Labs/layer-release.git
cd layer-release
```

Modify `data/bitcoin.conf` as needed, then start the node:

```bash
docker compose up -d
```

Check node status:

```bash
./cli.sh getblockchaininfo
```

Stop the node:

```bash
docker compose down
```
