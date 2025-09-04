# Wallet Integration

Currently, we've built a wallet called the `Opcat Wallet`, which is forked from the Unisat Wallet v1.7.0, for developers and early adopters to interact with the OP_CAT Layer with ease. We're looking forward to have more web wallets to support the OP_CAT Layer in the near feature.

## Opcat Wallet

### Install the extension

You can download the beta version of `Opcat Wallet` from the [github release link here](https://github.com/OPCAT-Labs/wallet-extension/releases/download/beta/opcat-chrome-mv3.zip). Since it's not published to the chrome store yet, you need to do the followings after the download.

1. Unzip the `opcat-chrome-mv3.zip` in your assigned directory;
2. Open the extensions management page with the link `chrome://extensions/` in chrome;
3. Click the `Load unpacked` button and select the extension directory you just unzipped in Step 1;
4. Now you can use the `Opcat Wallet` just installed;

**NOTE**: This wallet is still under development and will be open-sourced in the near feature. And it only support the OP_CAT Layer networks now.

### Integrate with dApps

To request access to the `Opcat Wallet`, you can use its APIs to create a built-in `WalletSigner`:

```ts
import { WalletSigner, OpcatAPI } from '@opcat-labs/scrypt-ts-opcat';

declare global {
	interface Window {
		opcat: OpcatAPI
	}
}

const signer = new WalletSigner(window.opcat);
```

create a provider:

```ts
const provider = new MempoolProvider('opcat-testnet')
```

create a psbt and use signer and provider to sign and broadcast it:

```ts
const psbt = new ExtPsbt({network: network})
  .spendUTXO(utxos)

for (const recipient of recipients) {
  psbt.addOutput({
    address: recipient.address,
    value: BigInt(Math.round(recipient.amount * 10 ** decimals)),
    data: Buffer.alloc(0)
  });
}

psbt
  .change(await signer.getAddress(), await provider.getFeeRate())
  .seal()

const signedPsbt = await signer.signPsbt(psbt.toHex(), psbt.psbtOptions())
psbt.combine(ExtPsbt.fromHex(signedPsbt)).finalizeAllInputs()
const tx = psbt.extractTransaction();
await provider.broadcast(tx.toHex());
```

the scrypt SDK `@opcat-labs/scrypt-ts-opcat` provide `deploy` and `call` features, just use them in `App.tsx`:

```ts
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { call, Covenant, deploy, MempoolProvider, sha256, toByteString, UnisatAPI, UnisatSigner } from '@opcat-labs/scrypt-ts-opcat';
import { AtomicSwap } from './atomic-swap.js';

async function deployAndCall() {
  const deployPsbt = await deploy(aliceSigner, provider, contract)

  const callPsbt = await call(aliceSigner, provider, contract, (contract: AtomicSwap, psbt: IExtPsbt) => {
    const sig = psbt.getSig(0, { publicKey: alicePubKey });
    contract.unlock(x, sig)
  })

  console.log('AtomicSwap contract `unlock` called: ', callTx.getId());
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={deployAndCall}>Deploy and Call</button>
      </header>
    </div>
  );
}

export default App;
```

Afterwards, you can interact with the contract from the front-end.

You can find more wallet APIs [here](../api/opcat-wallet.md).