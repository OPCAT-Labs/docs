---
sidebar_position: 4
---

# Tutorial 4: Tic Tac Toe

## Overview
In this tutorial, we will go over how to use sCrypt to build a Tic-Tac-Toe Contract on Bitcoin.

It is initialized with the Bitcoin public key of two players (Alice and Bob respectively). They each bet the same amount and lock it into the contract. The winner takes all bitcoins locked in the contract. If no one wins and there is a draw, the two players can each withdraw half of the money.

## Contract Properties

Use `@prop` decorator to mark any property that intends to be stored on chain. This decorator accepts a boolean parameter. By default, it is set to `false`, meaning the property cannot be changed after the contract is deployed. 

The tic-tac-toe contract supports two players and their public keys need to be saved. It contains the following contract properties:

- Two stateless properties `alice` and `bob`, both of which are `PubKey` type.
- Three constants:
    * `EMPTY`, type `bigint`, value `0n`. It means that a square in the board is empty
    * `ALICE`, type `bigint`, value `1n`. Alice places symbol `X` in a square.
    * `BOB`, type `bigint`, value `2n`. Bob places symbol `O` in a square.

```ts
@prop()
alice: PubKey; // alice's public Key
@prop()
bob: PubKey; // bob's public Key

@prop()
static readonly EMPTY: bigint = 0n; // static property, it means that the a square in the board is empty
@prop()
static readonly ALICE: bigint = 1n; // static property, it means that alice places symbol `X` in a square.
@prop()
static readonly BOB: bigint = 2n; // static property, it means that bob places symbol `O` in a square.
```

## Constructor

Initialize all non-static properties in the constructor. Specifically, the entire board is empty at first.

```ts
constructor(alice: PubKey, bob: PubKey) {
    super(...arguments);
    this.alice = alice;
    this.bob = bob;
    this.is_alice_turn = true;
    this.board = fill(TicTacToe.EMPTY, 9);
}
```

## Contract State and stateful properties
Stateful properties can be updated in subsequent contract calls. State ful properties are declared in contract state.
- Two stateful properties:
    * `is_alice_turn`: a `boolean`. It represents whether it is `alice`'s turn to play.
    * `board`: a fixed-size array `FixedArray<bigint, 9>` with a size of `9`. It represents the state of every square in the board.

```ts
export type TictactoeState = {
   is_alice_turn: boolean,
   board: FixedArray<bigint, 9>
};
```

## Public Methods

A public `@method` can be called from an external transaction. The call succeeds if it runs to completion without violating any conditions in `assert()`.

The `TicTacToe` contract have a public `@method` called `move()` with `2` parameters:

```ts
/**
 * play the game by calling move()
 * @param n which square to place the symbol
 * @param sig a player's signature
 */
@method()
public move(n: bigint, sig: Sig) {
    assert(n >= 0n && n < 9n);
}
```

Alice and Bob each locks X bitcoins in a UTXO containing contract `TicTacToe`. Next, they alternately play the game by calling `move()`.

### Signature Verification

Once the game contract is deployed, anyone can view and potentially interact with it. We need a authentication mechanism to ensure only the desired player can update the contract if it's their turn. This is achieved using ditigal signatures.

`this.checkSig()` is used to verify a signature against a public key. Use it to verify the `sig` parameter against the desired player in `move()`, identified by their public key stored in the contract's properties.

```ts
// check signature `sig`
let player: PubKey = this.state.is_alice_turn ? this.alice : this.bob;
assert(this.checkSig(sig, player), `checkSig failed, pubkey: ${player}`);
```

## Non-Public Methods

Without a `public` modifier, a `@method` is internal and cannot be directly called from an external transaction.

The `TicTacToe` contract have two **Non-Public** methods:

- `won()` : iterate over the `lines` array to check if a player has won the game. returns `boolean` type.
- `full()` : traverse all the squares of the board to check if all squares of the board have symbols. returns `boolean` type.


```ts
@method()
won(play: bigint) : boolean {
    let lines: FixedArray<FixedArray<bigint, 3>, 8> = [
        [0n, 1n, 2n],
        [3n, 4n, 5n],
        [6n, 7n, 8n],
        [0n, 3n, 6n],
        [1n, 4n, 7n],
        [2n, 5n, 8n],
        [0n, 4n, 8n],
        [2n, 4n, 6n]
    ];

    let anyLine = false;

    for (let i = 0; i < 8; i++) {
        let line = true;
        for (let j = 0; j < 3; j++) {
            line = line && this.state.board[Number(lines[i][j])] === play;
        }

        anyLine = anyLine || line;
    }

    return anyLine;
}

@method()
full() : boolean {
    let full = true;
    for (let i = 0; i < 9; i++) {
        full = full && this.state.board[i] !== TicTacToe.EMPTY;
    }
    return full;
}
```

## Maintain Game State

We can directly access the state through `this.state` in the public `@method` `move()` to maintain game state. It can be considered additional information a public method gets when called, besides its function parameters.

Contract maintenance state consists of the following three steps:

### Step 1

Update the stateful properties in public `@method`.

A player call `move()` to places the symbol in the board. We should update the stateful properties `board` and `is_alice_turn` in the `move()` `@method`:

```ts
assert(this.state.board[Number(n)] === TicTacToe.EMPTY, `board at position ${n} is not empty: ${this.state.board[Number(n)]}`);
let play = this.state.is_alice_turn ? TicTacToe.ALICE : TicTacToe.BOB;
// update stateful properties to make the move
this.state.board[Number(n)] = play;   // Number() converts a bigint to a number
this.state.is_alice_turn = !this.is_alice_turn;
```

### Step 2

When you are ready to pass the new state onto the output[s] in the current spending transaction, simply call a built-in function `this.buildDataOutput()` to create an output containing the new state. It takes three input: spent script hash, the number of satoshis in the output, and the state hash. We keep the satoshis unchanged in the example.

```ts
outputs = TxUtils.buildDataOutput(this.ctx.spentScriptHash, this.ctx.value, Tictactoe.stateHash(this.state));
```



#### Build outputs in public `@method`

`TicTacToe` can contain the following three types of output during execution:

1. The game is not over: a output containing the new state and a change output
2. A player wins the game: a `P2PKH` output that pays the winner, and a change output.
3. A draw: two `P2PKH` outputs that split the contract-locked bets equally between the players and a change output.

The `P2PKH` output can be built using `TxUtils.buildP2PKHOutput(amount: bigint, pkh: PubKeyHash)`. The change output can be built using `this.buildChangeOutput()`.


```ts
// build the transation outputs
        let outputs = toByteString('');
        if (this.won(play)) {
            outputs = TxUtils.buildP2PKHOutput(this.ctx.value, pubKey2Addr(player));
        }
        else if (this.full()) {
            const halfAmount = this.ctx.value / 2n;
            const aliceOutput = TxUtils.buildP2PKHOutput(halfAmount, pubKey2Addr(this.alice));
            const bobOutput = TxUtils.buildP2PKHOutput(halfAmount, pubKey2Addr(this.bob));
            outputs = aliceOutput + bobOutput;
        }
        else {
            // build a output that contains latest contract state.
            outputs = TxUtils.buildDataOutput(this.ctx.spentScriptHash, this.ctx.value, Tictactoe.stateHash(this.state));
        }

        outputs += this.buildChangeOutput();

```

### Step 3

Make sure that the output of the current transaction must contain this incremented new state. If all outputs (only a single output here) we create in the contract hashes to `hashOutputs` in `ScriptContext`, we can be sure they are the outputs of the current transaction. Therefore, the updated state is propagated.

```ts
// verify current tx has this single output
assert(
    this.checkOutputs(outputs),
    'hashOutputs check failed'
)
```

# Conclusion

Congratulations, you have completed the `TicTacToe` contract!

The final complete code is as follows:

```ts
export type TictactoeState = {
   is_alice_turn: boolean,
   board: FixedArray<bigint, 9>
};

export class Tictactoe extends SmartContract<TictactoeState> {
    @prop()
    alice: PubKey;
    @prop()
    bob: PubKey;

    @prop()
    static readonly EMPTY: bigint = 0n;
    @prop()
    static readonly ALICE: bigint = 1n;
    @prop()
    static readonly BOB: bigint = 2n;

    constructor(alice: PubKey, bob: PubKey) {
        super(...arguments)
        this.alice = alice;
        this.bob = bob;
    }

    @method()
    public move(n: bigint, sig: Sig) {
        assert(n >= 0n && n < 9n);
        // check signature `sig`
        let player: PubKey = this.state.is_alice_turn ? this.alice : this.bob;
        assert(this.checkSig(sig, player), `checkSig failed, pubkey: ${player}`);
        // update stateful properties to make the move
        assert(this.state.board[Number(n)] === Tictactoe.EMPTY, `board at position ${n} is not empty: ${this.state.board[Number(n)]}`);
        let play = this.state.is_alice_turn ? Tictactoe.ALICE : Tictactoe.BOB;
        this.state.board[Number(n)] = play;
        this.state.is_alice_turn = !this.state.is_alice_turn;

        // build the transation outputs
        let outputs = toByteString('');
        if (this.won(play)) {
            outputs = TxUtils.buildP2PKHOutput(this.ctx.value, pubKey2Addr(player));
        }
        else if (this.full()) {
            const halfAmount = this.ctx.value / 2n;
            const aliceOutput = TxUtils.buildP2PKHOutput(halfAmount, pubKey2Addr(this.alice));
            const bobOutput = TxUtils.buildP2PKHOutput(halfAmount, pubKey2Addr(this.bob));
            outputs = aliceOutput + bobOutput;
        }
        else {
            // build a output that contains latest contract state.
            outputs = TxUtils.buildDataOutput(this.ctx.spentScriptHash, this.ctx.value, Tictactoe.stateHash(this.state));
        }

        outputs += this.buildChangeOutput();

        // make sure the transaction contains the expected outputs built above
        assert(
            this.checkOutputs(outputs),
            'hashOutputs check failed'
        )
    }

    @method()
    won(play: bigint) : boolean {
        let lines: FixedArray<FixedArray<bigint, 3>, 8> = [
            [0n, 1n, 2n],
            [3n, 4n, 5n],
            [6n, 7n, 8n],
            [0n, 3n, 6n],
            [1n, 4n, 7n],
            [2n, 5n, 8n],
            [0n, 4n, 8n],
            [2n, 4n, 6n]
        ];

        let anyLine = false;

        for (let i = 0; i < 8; i++) {
            let line = true;
            for (let j = 0; j < 3; j++) {
                line = line && this.state.board[Number(lines[i][j])] === play;
            }

            anyLine = anyLine || line;
        }

        return anyLine;
    }

    @method()
    full() : boolean {
        let full = true;
        for (let i = 0; i < 9; i++) {
            full = full && this.state.board[i] !== Tictactoe.EMPTY;
        }
        return full;
    }
}

```

But no dApp is complete if users cannot interact with it. Go [here](../how-to-integrate-a-frontend/how-to-integrate-a-frontend.md) to see how to add a front-end to it.