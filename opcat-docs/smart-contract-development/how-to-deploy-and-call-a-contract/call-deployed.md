---
sidebar_position: 5
---

# Interact with a Deployed Contract

## Overview
In this tutorial, we will interact with a deployed smart contract by calling its public method, in a separate process or by a different party.

To do this, we need to create a smart contract instance that corresponds to the deployed contract on chain.

## The Smart Contract

We will reuse the stateful `Counter` contract [from a previous step](../how-to-write-a-contract/stateful-contract#create-a-stateful-contract).

```ts

export interface CounterState extends OpcatState {
    count: Int32;
}

export class Counter extends SmartContract<CounterState> {
    @method()
    public increase() {
        this.state.count++;

        const nextOutput = TxUtils.buildDataOutput(this.ctx.spentScriptHash, this.ctx.value, Counter.stateHash(this.state))
        const outputs = nextOutput + this.buildChangeOutput();

        assert(this.checkOutputs(outputs), 'Outputs mismatch with the transaction context');
    }
}
```

## Deploy

To deploy the smart contract by calling the `deplly()` function:

```ts
const counter = new Counter();
counter.state = {
    count: 0n
}
const provider = getDefaultProvider()
const signer = getDefaultSigner()
const deployTx = await deploy(signer, provider, counter)
console.log(`Counter deployed: ${deployTx.id}, the count is: ${counter.state.count}`)
```

The function deploys the contract with a initial state `0n` and returns the transaction of the deployed contract.

## Interact with call feature

Next, we update our deployed smart contract by calling the `call()` function:

```ts
const newCounter = counter.next({ count: counter.state.count + 1n });

const callTx = await call(
    signer,
    provider,
    counter,
    (contract: Counter) => {
        contract,increase()
    },
    {
        contract: newCountract,
        satoshis: 1
    }
)

console.log(`Counter contract called: ${callTx.getId()}`);
```

This function will help you construct transactions to call the contract. It takes *5* parameters:


1. a [signer](../how-to-deploy-and-call-a-contract#signer) - *required*
2. a [provider](../how-to-deploy-and-call-a-contract#provider) - *required*
3. a contract to be called - *required*
4. a subContractCall - used to specify which contract to use for unlocking - *required*
5. a call options

### CallOptions

Here is the definition of CallOptions:


```ts
/**
 * Options for calling a smart contract method.
 * @property contract - The smart contract instance to call.
 * @property satoshis - Amount of satoshis to send with the call.
 * @property lockTime - Lock time for the transaction.
 * @property sequence - Sequence number for the transaction.
 * @property changeAddress - Address to receive change.
 * @property feeRate - Fee rate in satoshis per byte.
 * @property withBackTraceInfo - Whether to include backtrace info.
 * @property unfinalize - Whether to keep transaction unfinalized.
 * @property prevPrevTxFinder - Function to find previous transaction for an input.
 */
export type CallOptions = {
  contract?: SmartContract<OpcatState>; 
  satoshis?: number, 
  lockTime?: number,
  sequence?: number, 
  changeAddress?: string, 
  feeRate?: number,
  withBackTraceInfo?: boolean,
  unfinalize?: boolean,
  prevPrevTxFinder?: (prevTx: Transaction, provider: UtxoProvider & ChainProvider, inputIndex: InputIndex) => Promise<string>
}
```

For stateful contracts, use `contract.next(new state)` to obtain a new instance of the contract:

```ts
const newCounter = counter.next({ count: counter.state.count + 1n });
```


Let's encapsulate the entire process within a main function, designed to deploy the contract and increment its value five times:

```ts
async function main() {

    let counter = new Counter();
    counter.state = {
        count: 0n
    }

    const provider = getDefaultProvider()
    const signer = getDefaultSigner()

    const deployTx = await deploy(signer, provider, counter)

    console.log(`Counter contract deployed: ${deployTx.getId()}`)


    for (let i = 0; i < 10; i++) {
        const newCounter = counter.next({ count: counter.state.count + 1n });

        await sleep(5)

        const callTx = await call(
            signer, 
            provider, 
            counter, 
            (contract: Counter) => {
                contract.increase()
            },
            {
                contract: newCounter,
                satoshis: 330
            }
        )


        console.log(`Counter contract called: ${callTx.getId()}`)
        counter = newCounter;
    }
}

(async () => {
    await main()
})()
```

If we execute the code, we should get an output similar to the following:

```ts
Counter deployed: 1b1c09383f6a483dabf138111cf80e6921cc2050ffdbb6c7493f47a2c3759180, the count is: 0
Counter contract called: ec07e45c9114ce2b4f439414f0c79e13e90e3157f6dae6c1e66510d7f2cecc6c, the count now is: 1
Counter contract called: f65967b0cfe84e7e8c7b54bda2ce6f216177f87bbc95561044470321f435c07c, the count now is: 2
Counter contract called: e4f0862c62a6c42e10097c0e1b975710f3a4ef0f768a694e5edc7c4bd20997eb, the count now is: 3
Counter contract called: 68da33af2c64657de41dfcd9c525f3f8c37cffd28be8a4a5374bc8ea31e8f7b5, the count now is: 4
Counter contract called: 24033524f0bceb18172f9bbb4c3baecdcf8f04e233bd13ed27c9061e0f224d4d, the count now is: 5
```

## Interact with customize transaction

For more complex contracts, you may need to build your own transaction to complete the call to contract. The following code shows how to construct a transaction to call the `Counter` contract:

```ts
const contract = new Counter()
contract.state = { count: 0n };
const provider = getDefaultProvider()
const signer = getDefaultSigner()
const deployTx = await deploy(signer, provider, contract)
console.log(`Counter deployed: ${deployTx.id}, the count is: ${contract.state.count}`)


// create a new contract containing new states
const newContract = contract.next({ count: contract.state.count + 1n });

const address = await signer.getAddress();

const feeRate = await provider.getFeeRate();

// fetch utxos to pay fee
const utxos = await provider.getUtxos(address);

// build transaction
const psbt = new ExtPsbt()
    .addContractInput(contract, (contract: Counter) => {
        contract.increase()
    })
    .spendUTXO(utxos);

// add Counter contract output
psbt.addContractOutput(newContract, 330);

// add change output
psbt.change(address, feeRate).seal();

// get sign options
const options = psbt.psbtOptions() || {
    autoFinalized: false,
    toSignInputs: [],
};

utxos.forEach((_, index) => {
    options.toSignInputs.push({
        index: index + 1,
        address: address,
    });
});

// request sign
const signedPsbtHex = await signer.signPsbt(psbt.toHex(), options);
// combine signature
const signedPsbt = psbt.combine(ExtPsbt.fromHex(signedPsbtHex)).finalizeAllInputs();
// extract psbt to Transaction
const callTx = signedPsbt.extractTransaction();
// broadcast transaction to finish the call
await provider.broadcast(callTx.toHex());

console.log(`Counter contract called: ${callTx.getId()}`)
```

The above code uses `ExtPsbt` to build transactions. `ExtPsbt` is an extension class of Psbt.

`Psbt` class can parse and generate a PSBT binary based off of the BIP174. 

## Conclusion

Congratulations! You've now deployed AND interacted with a Bitcoin smart contract.