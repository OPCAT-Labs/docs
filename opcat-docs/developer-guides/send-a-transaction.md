# Sending a Transaction

This guide will walk you through the complete process of sending a transaction on the OP_CAT layer, from generating a private key to broadcasting the transaction.

## Prerequisites

Before you begin, make sure you have the necessary packages installed:

```bash
npm install @opcat-labs/scrypt-ts-opcat
```

## Step 1: Generate a Private Key

First, let's create a private key and corresponding address for the testnet:

```ts
import { DefaultSigner, PrivateKey, Networks } from "@opcat-labs/scrypt-ts-opcat";

const generatePrivateKey = async () => {
    const privateKeyWif = PrivateKey.fromRandom(Networks.testnet).toWIF()
    const signer = new DefaultSigner(PrivateKey.fromWIF(privateKeyWif));
    const address = await signer.getAddress();
    return {
        privateKeyWif,
        address,
    }
}

generatePrivateKey().then(console.log)
```

This code generates a new private key and address on the testnet. Save both the private key WIF and address for the next steps.

## Step 2: Get Testnet Coins

After generating your address, you'll need some testnet coins to send transactions. Visit the OP_CAT Layer [testnet faucet](https://faucet.opcatlabs.io/) to receive testnet coins.

## Step 3: Fetch UTXOs from the Network

To get unspent transaction outputs (UTXOs) from the OP_CAT layer node, we'll use the MempoolProvider API:

```ts
import { MempoolProvider } from "@opcat-labs/scrypt-ts-opcat";

new MempoolProvider('opcat-testnet').getUtxos('yourAddress').then(console.log)
```

Replace `'yourAddress'` with the address you generated in Step 1.

## Step 4: Construct the Transaction

Now let's build a simple transaction with 1 input and 2 outputs using PSBT (Partially Signed Transaction) for better transaction management:

```ts
import { ExtPsbt, MempoolProvider } from "@opcat-labs/scrypt-ts-opcat";

const main = async () => {
    const provider = new MempoolProvider('opcat-testnet')
    const utxos = await provider.getUtxos('yourAddress')
    
    if (utxos.length === 0) {
        console.log('No UTXOs found. Please send some testnet coins to your address first from the faucet.')
        return
    }

    const psbt = new ExtPsbt({network: 'opcat-testnet'})
        .spendUTXO(utxos[0])
        .addOutput({
            address: 'yourAddress',
            value: BigInt(1e3), // 1000 satoshis
            data: new Uint8Array(),
        })
        .change('yourAddress', 2) // 2 sat/byte fee rate
        .seal()
}

main()
```

This creates a transaction that spends 1000 satoshis back to your own address with a 2 sat/vB fee rate.

## Step 5: Sign the Transaction

After constructing the transaction, we need to sign it with our private key. This involves three steps:

1. Sign the PSBT
2. Combine the signed PSBT
3. Finalize all inputs

```ts
const signer = new DefaultSigner(PrivateKey.fromWIF('your private key wif'))

// Step 1: Sign the PSBT
const signedPsbtHex = await signer.signPsbt(psbt.toHex(), psbt.psbtOptions())

// Step 2: Combine the signed PSBT
psbt.combine(ExtPsbt.fromHex(signedPsbtHex))

// Step 3: Finalize all inputs
psbt.finalizeAllInputs()
```

## Step 6: Broadcast the Transaction

Finally, broadcast the signed transaction to the OP_CAT network:

```ts
const rawtx = psbt.extractTransaction().toHex()
const txid = await provider.broadcast(rawtx)
console.log('Transaction broadcasted successfully! TXID:', txid)
```

## Complete Example

Here's the complete code combining all steps:

### Key Generation Script

```ts
// generatePrivateKey.ts
import { DefaultSigner, PrivateKey, Networks } from "@opcat-labs/scrypt-ts-opcat";

const generatePrivateKey = async () => {
    const privateKeyWif = PrivateKey.fromRandom(Networks.testnet).toWIF()
    const signer = new DefaultSigner(PrivateKey.fromWIF(privateKeyWif));
    const address = await signer.getAddress();
    return {
        privateKeyWif,
        address,
    }
}

generatePrivateKey().then(console.log)
```

### Transaction Sending Script

```ts
// sendTx.ts
import { DefaultSigner, ExtPsbt, MempoolProvider, PrivateKey } from "@opcat-labs/scrypt-ts-opcat"

const main = async () => {
    const provider = new MempoolProvider('opcat-testnet')
    const signer = new DefaultSigner(PrivateKey.fromWIF('your private key wif'))
    const yourAddress = await signer.getAddress()

    // Fetch UTXOs
    const utxos = await provider.getUtxos(yourAddress)
    if (utxos.length === 0) {
        console.log('No UTXOs found. Please send some testnet coins to your address first from the faucet.')
        return
    }

    // Construct transaction
    const psbt = new ExtPsbt({network: 'opcat-testnet'})
        .spendUTXO(utxos[0])
        .addOutput({
            address: yourAddress,
            value: BigInt(1e3),
            data: new Uint8Array(),
        })
        .change(yourAddress, 2)
        .seal()
    
    // Sign transaction
    const signedPsbtHex = await signer.signPsbt(psbt.toHex(), psbt.psbtOptions())
    psbt.combine(ExtPsbt.fromHex(signedPsbtHex))
    psbt.finalizeAllInputs()

    // Broadcast transaction
    const rawtx = psbt.extractTransaction().toHex()
    const txid = await provider.broadcast(rawtx)
    console.log('Transaction broadcasted successfully! TXID:', txid)  
}

main();
```

## Important Notes

- Always use testnet for development and testing
- Keep your private keys secure and never share them
- Make sure you have sufficient UTXOs before attempting to send transactions
- The fee rate (2 sat/byte in this example) can be adjusted based on network conditions
- Monitor your transaction on the OP_CAT testnet explorer after broadcasting
