---
sidebar_position: 5

# HashedMap

We use a Merkle tree to implement a HashedMap. This HashedMap stores all data off-chain, while only the Merkle tree root is stored on-chain. When a contract needs to access HashedMap data, it can use the `get` and `set` methods to interact with the off-chain data. The entire process is verifiable and trustless.

## Class: HashedMap<KeyType, ValueType, MaxAccessKeys>

Type Arguments

| Name | Type | Description |
| --- | --- | --- |
| KeyType | extends PrimitiveTypes | The key type for the HashedMap |
| ValueType | extends SupportedParamType | The value type for the HashedMap |
| MaxAccessKeys | extends number | The maximum number of keys that can be accessed during a single contract call |

::: Why is there a `MaxAccessKeys` parameter, and why do we need to limit the number of keys accessed in a single contract call?
HashedMap is implemented using a Merkle tree. Each key access corresponds to accessing a leaf node in the Merkle tree, and each leaf access requires verifying its Merkle proof. The more keys you access, the more code the contract needs to execute, which increases the contract size. Therefore, we introduce the `MaxAccessKeys` parameter, allowing developers to set it according to their needs and control the contract size.
:::

## Methods

### get
```ts
get(key: KeyType): ValueType
```

Retrieves the value associated with the specified key.

If the value has been set previously, it returns the latest value.
If the value has not been set, it returns an empty value. All fields in the empty value are blank: integer types are 0, bytes types are '', and boolean types are false.

### set
```ts
set(key: KeyType, value: ValueType)
```
Sets the value for the specified key.

::: note
You cannot call the `set` function after you have called the `stateHash` function. Once `stateHash` is called, the new Merkle root of the HashedMap field in the state is saved in `stateHash`, and you cannot update the root inside `stateHash` while calling `set`.
:::

```ts
// good
this.state.map1.set(toByteString('01'), 2n)
const stateHash = MyContract.stateHash(this.state)


// bad
this.state.map1.set(toByteString('01'), 2n)
const stateHash = MyContract.stateHash(this.state)
this.state.map1.set(toByteString('01'), 3n)
```

## Usage in Contracts

::: note
Currently, HashedMap is only supported as a field in the contract state.
:::

```ts

// airdropBTC.ts

import { HashedMap, ByteString, SmartContract, method, assert, TxUtils, hash160, PubKey, Sig, StateLib, sha256 } from '@opcat-labs/scrypt-ts-opcat';

export type ClaimInfo = {
    amount: bigint;
    claimed: boolean;
}
export type AirdropBTCState = {
    // address (p2pkh script) -> claimInfo
    // Define a HashedMap field. The KeyType is ByteString.
    claimInfos: HashedMap<ByteString, ClaimInfo, 1>
}
export class AirdropBTC extends SmartContract<AirdropBTCState> {

    @method()
    public claim(
        // The p2pkh script
        address: ByteString,
    ) {
       const claimInfo = this.state.claimInfos.get(address);
       assert(!claimInfo.claimed, 'Already claimed');

       const amount = claimInfo.amount;
       assert(amount > 0n, 'Amount is 0');

       claimInfo.claimed = true;
       this.state.claimInfos.set(address, claimInfo);

       const nextOutput = TxUtils.buildDataOutput(this.ctx.spentScriptHash, this.ctx.value - amount, AirdropBTC.stateHash(this.state));
       const claimOutput = TxUtils.buildOutput(sha256(address), amount);

       const outputs = nextOutput + claimOutput + this.buildChangeOutput();
       assert(this.checkOutputs(outputs), 'Outputs are not valid');
    }
}
```

When using HashedMap, the SDK needs to attach the corresponding Merkle proof. Therefore, HashedMap cannot be used in the following scenarios:

```ts

export type MyStruct = {
    map1: HashedMap<ByteString, ByteString, 1>
}

export class MyContract extends SmartContract<MyStruct> {

    // Cannot declare a prop with HashedMap type
    @prop()
    prop1: HashedMap<ByteString, ByteString, 1>

    // Cannot declare a prop with a HashedMap inside its type
    @prop()
    prop2: MyStruct

    // Cannot declare a constructor argument with a HashedMap inside its type
    constructor(arg: MyStruct) {
        super(arg)
    }

    @method()
    public unlock(
        // Cannot declare a HashedMap argument
        map1: HashedMap<ByteString, ByteString, 1>
        // Cannot declare a HashedMap Array argument 
        map2s: FixedArray<HashedMap<ByteString, ByteString, 1>, 5>
    ) {

        // Cannot create a HashedMap instance in contract code
        // Creating HashedMap instances can only be done in offchain code
        const map3 = new HashedMap<ByteString, ByteString, 2>([]) 
    }

    private f1() {
        // Cannot call HashedMap methods inside private functions
        this.state.map1.get(toByteString('00'))
    }
}
```

## Usage offchain

Since only the Merkle root of the HashedMap is stored on-chain, and the original KeyValues data is not stored, the original KeyValues data needs to be manually indexed off-chain. To facilitate indexing, we have developed a HashedMap Tracker that developers can deploy to complete the indexing of KeyValues.

### Deploy HashedMapTracker


#### Generate HashedMapTracker Config

Before deploying the HashedMapTracker, developers need to generate a JSON configuration that tells the HashedMapTracker how to index the HashedMap.

This JSON configuration is typically divided into two parts: one part declares which HashedMap to index, and the other part specifies how this HashedMap will be updated through which contract methods.

Suppose we have a contract called Main, which has two HashedMaps in its state, and the Main contract has 4 public methods.

- changeMap1: change the `map1` HashedMap in state
- changeMap2: change the `map2` HashedMap in state
- changeBoth: change the `map1` and `map2` HashedMap in state
- justUnlock: do not change anything in state

```ts
import { ByteString, HashedMap, Int32, StateLib, UInt64 } from "@opcat-labs/scrypt-ts-opcat"

export type DummyStruct = {
    num: bigint
    str: ByteString
}

// the state type of Main contract
export type TestHashedMapMainState = {
    // map1: HashedMap<bigint, ByteString, 2>
    map1: HashedMap<Int32, ByteString, 2>
    map2: HashedMap<ByteString, DummyStruct, 1>
}

// the Main contract
export class TestHashedMapMain extends SmartContract<TestHashedMapMainState> {
    @method()
    public changeMap1(
        key1: bigint,
        value1: ByteString,
        key2: bigint,
        value2: ByteString
    ) {
        this.state.map1.set(key1, value1);
        this.state.map1.set(key2, value2);
        const nextOutput = TxUtils.buildDataOutput(this.ctx.spentScriptHash, this.ctx.value, TestHashedMapMain.stateHash(this.state));
        const outputs = nextOutput + this.buildChangeOutput();
        assert(this.checkOutputs(outputs), 'Outputs is not valid');
    }

    @method()
    public changeMap2(
        key: ByteString,
        value: DummyStruct
    ) {
        this.state.map2.set(key, value);
        const nextOutput = TxUtils.buildDataOutput(this.ctx.spentScriptHash, this.ctx.value, TestHashedMapMain.stateHash(this.state));
        const outputs = nextOutput + this.buildChangeOutput();
        assert(this.checkOutputs(outputs), 'Outputs is not valid');
    }

    @method()
    public changeBoth(
        key1: bigint,
        value1: ByteString,
        key2: bigint,
        value2: ByteString,

        key3: ByteString,
        value3: DummyStruct
    ) {
        this.state.map1.set(key1, value1);
        this.state.map1.set(key2, value2);
        this.state.map2.set(key3, value3);
        const nextOutput = TxUtils.buildDataOutput(this.ctx.spentScriptHash, this.ctx.value, TestHashedMapMain.stateHash(this.state));
        const outputs = nextOutput + this.buildChangeOutput();
        assert(this.checkOutputs(outputs), 'Outputs is not valid');
    }

    @method()
    public justUnlock() {
        assert(true, 'Just unlock');
    }
}
```

From the Main contract above, we can see that we need to index map1 and map2 in the main contract's state. map1 is updated by the changeMap1 and changeBoth public methods, and map2 is updated by the changeMap2 and changeBoth public methods.

Based on this, we can generate the config using `HashedMapAbiUtil.exportHashedMapTrackerConfig`

```ts
const initMap1KeyValues = []
const map1TrackerConfig = HashedMapAbiUtil.exportHashedMapTrackerConfig(
    new TestHashedMapMain(),
    'map1',
    [],
    [
        {
            contract: mainContract,
            methodName: 'changeMap1',

            // Update current state using `this.state`
            methodParamName: 'this.state',
        },
        {
            contract: mainContract,
            methodName: 'changeBoth',
            methodParamName: 'this.state',
        }
    ]
)


const initMap2KeyValues = []
const map2TrackerConfig = HashedMapAbiUtil.exportHashedMapTrackerConfig(
    new TestHashedMapMain(),
    'map2',
    [initMap2KeyValues],
    [
        {
            contract: mainContract,
            methodName: 'changeMap2',
            methodParamName: 'this.state',
        },
        {
            contract: mainContract,
            methodName: 'changeBoth',
            methodParamName: 'this.state',
        }
    ]
)

// This JSON string is the config required by the tracker
const myTrackerConfig = JSON.stringify(
    [
        map1TrackerConfig,
        map2TrackerConfig
    ]
)

```

#### Deploy HashedMapTracker

The code for HashedMapTracker can be found at [OPCAT-labs/hashedmap-tracker](https://github.com/OPCAT-Labs/hashedmap-tracker)

The deployment consists of several steps:
1. Clone the [OPCAT-labs/hashedmap-tracker](https://github.com/OPCAT-Labs/hashedmap-tracker) repository
2. Create a json file like `myTrackerConfig.json` under src/hashedMapConfig with the content of myTrackerConfig
3. Copy `.env.example` to `.env` and modify the environment variables in `.env` to your own configuration
4. Run `npm install`
5. Run `npm run migration:run`
6. Run `npm start:api`
7. Run `npm start:worker`

### Integration into Transaction Building Process

During the transaction construction process, for the convenience of using HashedMapTracker, developers can directly use HashedMapTrackerProvider to utilize the APIs in HashedMapTracker.

```ts
const mainContract = new TestHashedMapMain()

// Create a trackerProvider, the parameter is the Tracker API address you are running
const trackerProvider = new HashedMapTrackerProvider('http://localhost:3000')

const latestMainContractUtxo = await hashedMapTrackerProvider.getLatestUtxo(

    // the mainContract scripthash
    mainContract.lockingScriptHash, 

    // the stateFieldPath
    'map1',

    // the genesis outpoint of mainContract, its the outpoint of mainContract deploying transaction
    {
        txId: 'f97167f1d56ceaae6bfd3b9efde0c894ab35a203790f665eaba5c19d77876e79',
        outputIndex: 0,
});

// In this step, trackerProvider parses the HashedMap fields in the mainContract state, then retrieves the keyValues of these HashedMap fields from the HashedMapTracker
await mainContract.asyncBindToUtxo(
    utxo,
    HashedMapTrackerProvider.bindUtxoCallback(hashedMapTrackerProvider)
)

// At this point, you can directly add the contract to the input of the psbt
const psbt = new ExtPsbt()
    .addContractInput(mainContract, (contract) => {
        const [k1, v1, k2, v2] = ['01', '010101', '02', '020202']
        contract.changeMap1(
            k1, v1, k2, v2
        )
    })

```