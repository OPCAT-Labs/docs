---
sidebar_position: 3
---

# Deploy Using CLI

The `deploy` command allows you to deploy an instance of a smart contract to the blockchain. You can simply run the following command in the root of an `sCrypt` project:

```sh
npx @opcat-labs/cli deploy
```

or

```sh
npx @opcat-labs/cli d
```

By default, the CLI tool will run a script named `deploy.ts` located in the root of the project. You can also specify a different deployment script using the `--file` or `-f` option.

```sh
npx @opcat-labs/cli d -f myCustomDeploy.ts
```

If the project was created using sCrypt CLI, it will already have a `deploy.ts` file present (except for library projects). If not, the `deploy` command will generate a sample `deploy.ts` file.

Here's an example of such a deployment file:
```ts
import { Demo } from './src/contracts/demo'
import * as dotenv from 'dotenv'
import { getDefaultProvider, getDefaultSigner } from './tests/utils/txHelper';
import { deploy, sha256, toByteString } from '@opcat-labs/scrypt-ts-opcat';

import * as dotenv from 'dotenv'

// Load the .env file
dotenv.config()

async function main() {

    const contract = new Demo(sha256(toByteString("hello world", true)))
    const provider = getDefaultProvider();
    const signer = getDefaultSigner();

    const deployTx = await deploy(signer, provider, contract);

    console.log(`Demo contract deployed: ${deployTx.getId()}`)
}

main()
```

Upon a successful execution you should see an output like the following:

```
Demo contract deployed: 4080c16237b8d8e25af54a1d8b151fb5aa804410d70c0d1ba1fa6f7bb8d1ab25
```

You can take a look at the deployed smart contract using the [blockchain explorer](https://testnet.opcatlabs.io/tx/4080c16237b8d8e25af54a1d8b151fb5aa804410d70c0d1ba1fa6f7bb8d1ab25).
In our example, the first output contains the compiled smart contract code.
