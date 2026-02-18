# Opcat Wallet API

You can refer to [this](../dapp-development/wallet-integration) for the instructions of integrating `Opcat Wallet` with dApps. This doc covers more specific APIs provided by the `Opcat Wallet`.

## Browser Detection

To verify if the browser is running Opcat Wallet, copy and paste the code snippet below in the developer console of your web browser:

```javascript
if (typeof window.opcat !== "undefined") {
  console.log("Opcat Wallet is installed!");
}
```

You can review the full API for the `window.opcat` object

Additionally, since many wallets have forked Opcat's code, multiple window.opcat objects may conflict with each other. To avoid such conflicts, we have introduced a new opcat_wallet object.

```javascript
if (typeof window.opcat_wallet !== "undefined") {
  console.log("Opcat Wallet is installed!");
}
```

## Connect to the Opcat Wallet

"Connecting" or "logging in" to Opcat Wallet effectively means "to access the user's OP_CAT Layer account(s)".

You should only initiate a connection request in response to direct user action, such as clicking a button. You should always disable the "connect" button while the connection request is pending. You should never initiate a connection request on page load.

We recommend that you provide a button to allow the user to connect Opcat Wallet to your dapp. Clicking this button should call the following method:

### requestAccounts

```
opcat.requestAccounts()
```

Connect the current account.

**Parameters**

none

**Returns**

- `Promise` returns `string[]` : Address of current account.

```javascript
try {
  let accounts = await window.opcat.requestAccounts();
  console.log('connect success', accounts);
} catch (e) {
  console.log('connect failed');
}
> connect success ['tb1qrn7tvhdf6wnh790384ahj56u0xaa0kqgautnnz']
```

---

### disconnect

```
opcat.disconnect()
```

Disconnect the current account.

**Parameters**

none

**Returns**

- `Promise` returns `void`

```javascript
window.opcat.disconnect();
```

## Access accounts

Once the dApp successfully connects to the wallet, you can use the following method to obtain the wallet's address and public key.

### getAccounts

```
opcat.getAccounts()
```

Get address of current account

**Parameters**

none

**Returns**

- `Promise` - `string`: address of current account

**Example**

```javascript
try {
    let res = await window.opcat.getAccounts();
    console.log(res)
} catch (e) {
    console.log(e);
}

> ["tb1qrn7tvhdf6wnh790384ahj56u0xaa0kqgautnnz"]
```

**Additional Note**

- Although this API returns an array, it currently returns at most one record, which represents the wallet's currently active address.

- When the wallet is not connected, it returns an empty array.

---

### getPublicKey

```
 opcat.getPublicKey()
```

Get publicKey of current account.

**Parameters**

none

**Returns**

- `Promise` - `string`: publicKey

**Example**

```javascript
try {
    let res = await window.opcat.getPublicKey();
    console.log(res)
} catch (e) {
    console.log(e);
}

> 03cbaedc26f03fd3ba02fc936f338e980c9e2172c5e23128877ed46827e935296f

```


---

### accountsChanged

```javascript
opcat.on('accountsChanged', handler: (accounts: Array<string>) => void);
opcat.removeListener('accountsChanged', handler: (accounts: Array<string>) => void);
```

The `accountsChanged` will be emitted whenever the user's exposed account address changes.

## Manage Assets

The following provides several methods to list the wallet's assets and construct corresponding send transactions.

### getBalance

```
opcat.getBalance()
```

Get BTC balance

**Parameters**

none

**Returns**

- `Promise` - `Object`:
  - `confirmed` - `number` : the confirmed satoshis
  - `unconfirmed` - `number` : the unconfirmed satoshis
  - `total` - `number` : the total satoshis

**Example**

```javascript
try {
    let res = await window.opcat.getBalance();
    console.log(res)
} catch (e) {
    console.log(e);
}

> {
    "confirmed":0,
    "unconfirmed":100000,
    "total":100000
}

```

### getPaymentUtxos

```
opcat.getPaymentUtxos(cursor,size)
```

getPaymentUtxos

**Parameters**

**Returns**

- `Promise` - `object`:
  - `txid` - `string`: The txid
  - `vout` - `integer`: The output index
  - `satoshis` - `integer`: The output value
  - `scriptPk` - `string`: The output script, hex format
  - `data` - `string`: The output data, hex format

### sendTransfer

```
opcat.sendTransfer(toAddress, satoshis, options)
```

Send Transfer

**Parameters**

- `toAddress` - `string`: the address to send
- `satoshis` - `number`: the satoshis to send
- `options` - `object`: (optional)
  - `feeRate` - `number`: the network fee rate
  - `memo` - `string`: (optional) The data content of OP_RETURN, which needs to be in UTF-8 or HEX encoded format.
  - `memos` - `string[]`: (optional) The data content of OP_RETURN, which needs to be in UTF-8 or HEX encoded format, provided in the form of an array.

**Returns**

- `Promise` - `string`: txid

**Example**

```javascript
try {
  let txid = await window.opcat.sendTransfer(
    "tb1qrn7tvhdf6wnh790384ahj56u0xaa0kqgautnnz",
    1000
  );
  console.log(txid);
} catch (e) {
  console.log(e);
}
```


## Manage Networks

Opcat Wallet currently supports the following network types, which can be obtained through opcat.getNetwork, and switched through the `opcat.switchNetwork` method.

| name                    | unit  | network |
| ----------------------- | ----------------------- | ---- |
| Opcat Layer Mainnet | BTC   | livenet |
| Opcat Layer Testnet | tBTC  | testnet |

### getNetwork

```
opcat.getNetwork()
```

get network

**Parameters**

none

**Returns**

- `Promise` - `Object`:
  - `name` - `string`: The network name
  - `network` - `string` : `livenet` or `testnet`

**Example**

```javascript
try {
  let res = await window.opcat.getNetwork();
  console.log(res)
} catch (e) {
  console.log(e);
}

>  {name: 'Opcat Layer Mainnet', network: 'livenet'}
```

---

### switchNetwork

```
opcat.switchNetwork(network)
```

switch network

**Parameters**

- `network` - `string`: the network. `livenet` or `testnet`

**Returns**

- `Promise` - `Object`:
  - `name` - `string` : the name of network
  - `network` - `string` : livenet or testnet

**Example**

```javascript
try {
    let res = await window.opcat.switchnetwork("OPCAT_MAINNET");
    console.log(res)
} catch (e) {
    console.log(e);
}

> {enum: 'OPCAT_MAINNET', name: 'OP_CAT Layer Mainnet', network: 'livenet'}
```

---

### networkChanged

```javascript
opcat.on('networkChanged', handler: ({name: string, network: string}) => void);

opcat.removeListener('networkChanged', handler: (name: string, network: string) => void);
```

The `networkChanged` will be emitted whenever the user's network changes.


## Signing

### signPsbt
```
opcat.signPsbt(psbtHex[, options])
```

Sign PSBT

This method will traverse all inputs that match the current address to sign.

**Parameters**

- `psbtHex` - `string`: the hex string of psbt to sign
- options
  - `autoFinalized` - `boolean`: whether finalize psbt after signing, default is true
  - `toSignInputs` - `array`:
    - `index` - `number`: which input to sign
    - `address` - `string`: (at least specify either an address or a publicKey) Which corresponding private key to use for signing
    - `publicKey` - `string`: (at least specify either an address or a publicKey) Which corresponding private key to use for signing
    - `sighashTypes` - `number[]`: (optionals) sighashTypes

**Returns**

`Promise` - `string`: the hex string of signed psbt

**Example**

```javascript
try {
  let res = await window.opcat.signPsbt("70736274ff01007d....", {
    autoFinalized: false,
    toSignInputs: [
      {
        index: 0,
        address: "tb1q8h8....mjxzny",
      },
      {
        index: 1,
        publicKey: "tb1q8h8....mjxzny",
        sighashTypes: [1],
      },
      {
        index: 2,
        publicKey: "02062...8779693f",
      },
    ],
  });
  console.log(res);
} catch (e) {
  console.log(e);
}

opcat.signPsbt("xxxxxxxx", {
  toSignInputs: [{ index: 0, publicKey: "xxxxxx", disableTweakSigner: true }],
  autoFinalized: false,
});
```


### signPsbts


```
opcat.signPsbts(psbtHexs[, options])
```

Sign Multiple PSBTs at once

This method will traverse all inputs that match the current address to sign.

**Parameters**

- `psbtHexs` - `string[]`: the hex strings of psbt to sign
- `options` - `object[]`: the options of signing psbt
  - `autoFinalized` - `boolean`: whether finalize psbt after signing, default is true
  - `toSignInputs` - `array`:
    - `index` - `number`: which input to sign
    - `address` - `string`: (at least specify either an address or a publicKey) Which corresponding private key to use for signing
    - `publicKey` - `string`: (at least specify either an address or a publicKey) Which corresponding private key to use for signing

**Returns**

`Promise` - `string[]`: the hex strings of signed psbt

**Example**

```javascript
try {
  let res = await window.opcat.signPsbts([
    "70736274ff01007d...",
    "70736274ff01007d...",
  ]);
  console.log(res);
} catch (e) {
  console.log(e);
}
```

**Additional Note**

- Batch signing can improve user experience, but it also introduces security risks. Therefore, we require users to review the transaction details one by one before signing.
  We do provide a convenient "Sign All" button, but it's currently only available for trusted applications. If you need this feature, please open an issue to apply for access.
### signMessage

```
opcat.signMessage(msg[, type])
```

sign message

**Parameters**

- `msg` - `string`: a string to sign
- `type` - `string`: (Optional) "ecdsa" | "bip322-simple". default is "ecdsa"

**Returns**

- `Promise` - `string`: the signature.

**Example**

```javascript
// sign by ecdsa
try {
    let res = await window.opcat.signMessage("abcdefghijk123456789");
    console.log(res)
} catch (e) {
    console.log(e);
}

> G+LrYa7T5dUMDgQduAErw+i6ebK4GqTXYVWIDM+snYk7Yc6LdPitmaqM6j+iJOeID1CsMXOJFpVopvPiHBdulkE=

```
