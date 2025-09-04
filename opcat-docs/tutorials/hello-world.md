---
sidebar_position: 1
---

# Tutorial 1: Hello World


## Overview
In this tutorial, we will cover how to create a "Hello World" smart contract, deploy it, and call it.

Before starting, ensure all [prerequisite tools](../developer-guides/install-cli-and-sdk) are installed.

## Create a new project

Run the following commands to create a new project:

```sh
npx @opcat-labs/cli-opcat project helloworld
cd helloworld
npm install
```

The resulting project will contain a sample smart contract `/src/contracts/helloworld.ts`, along with all the scaffolding.

For this example, let's modify it to the following code:


```ts
import {
    assert,
    ByteString,
    method,
    prop,
    sha256,
    Sha256,
    SmartContract,
} from '@opcat-labs/scrypt-ts-opcat'

export class Helloworld extends SmartContract {
    @prop()
    hash: Sha256

    constructor(hash: Sha256) {
        super(...arguments)
        this.hash = hash
    }

    @method()
    public unlock(message: ByteString) {
        assert(sha256(message) == this.hash, 'Hash does not match')
    }
}
```

This `Helloworld` contract stores the sha256 hash of a message in the contract property `hash`. Only a message which hashes to the value set in `this.hash` will unlock the contract.

Now let’s look at what is in the smart contract.

- `SmartContract`: all smart contracts must extend the `SmartContract` base class.
- `@prop`:  the [`@prop` decorator](../smart-contract-development/how-to-write-a-contract/basics#properties) marks a contract property.
- `@method`: the [`@method` decorator](../smart-contract-development/how-to-write-a-contract/basics#method-decorator) marks a contract method. A [public method](../smart-contract-development/how-to-write-a-contract/basics#public-methods) is an entry point to a contract.
- `assert`: throws an error and makes the method call fail if its first argument is `false`. Here it ensures the passed message hashed to the expected digest.

## Compile Contract

1. Run following command to compile the `Helloworld` contract:

```sh
npm run compile
```

This command will generate a contract artifact file at `/artifacts/helloworld.json`.

2. Then call the `loadArtifact()` function in the code:


```ts
import artifact from '../artifacts/contracts/helloworld.json'
Helloworld.loadArtifact(artifact)
```

## Compile using the `watch` option

Monitoring for Real-time Error Detection

```sh
npx @opcat-labs/cli-opcat compile --watch
```

The `watch` option in the provided command continuously monitors errors during the sCrypt compilation process.
Watch mode enables users to observe real-time updates and notifications regarding any errors specific to sCrypt, which are distinct from TypeScript errors.

![](../../static/img/watch.gif)

## Contract Deployment & Call

Before we deploy the contract, you need to generate a Bitcoin key.

```bash
npm run genprivkey
```

then use the [faucet](../developer-guides/connect-to-testnet.md#testnet-faucet) to fund the key.

Next, start deploying and calling the contract:

1. To [deploy a smart contract](../smart-contract-development/how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-deployment), simply call its `deploy` method.
1. To [call a smart contract](../smart-contract-development/how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md#contract-call), call one of its public methods.

For this example, overwrite `deploy.ts` in the root of the project with the following code to deploy and call the `Helloworld` contract:

```ts
import * as dotenv from 'dotenv'
import { getDefaultProvider, getDefaultSigner } from './tests/utils/txHelper'
import {
    deploy,
    sha256,
    toByteString,
    call,
} from '@opcat-labs/scrypt-ts-opcat'
import { Helloworld } from 'helloworld'

// Load the .env file
dotenv.config()

if (!process.env.PRIVATE_KEY) {
    throw new Error(
        'No "PRIVATE_KEY" found in .env, Please run "npm run genprivkey" to generate a private key'
    )
}

async function main() {
    const contract = new Helloworld(sha256(toByteString('hello world', true)))

    const provider = getDefaultProvider()
    const signer = getDefaultSigner()

    const deployPsbt = await deploy(signer, provider, contract)

    const deployTx = deployPsbt.extractTransaction()

    console.log(`Helloworld contract deployed: ${deployTx.id}`)

    const callPsbt = await call(signer, provider, contract, (contract: Helloworld) => {
        contract.unlock(toByteString('hello world', true))
    })

    const callTx = callPsbt.extractTransaction()

    console.log(`Helloworld contract called: ${callTx.id}`)
}

main()

```

Run the following command to deploy AND call our example contract.

```
npx tsx deploy.ts
```

You will see some output like:

```
Helloworld contract deployed: 2a303e2510dec383b3fd68e7ab6b3466fcfb1b5ae7e4844c5b0427ec63c3d715
Helloworld contract called: a6691a8ce8228c7965aca6e59d72368341d42e091a670ab4bd4f8892d14eed46
```

You can view [the deployment transaction](https://testnet.opcatlabs.io/tx/2a303e2510dec383b3fd68e7ab6b3466fcfb1b5ae7e4844c5b0427ec63c3d715) using the blockchain explorer:


You can also view [the calling transaction](https://testnet.opcatlabs.io/tx/a6691a8ce8228c7965aca6e59d72368341d42e091a670ab4bd4f8892d14eed46):


Congrats! You have deployed and called your first Bitcoin smart contract.
