---
sidebar_position: 2
---

# Install CLI & SDK

## Prerequisites

1. Install `Node.js` (require version `>=16`) and `NPM` on your machine by following the instructions [here](https://nodejs.org/en/download).


2. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


:::note
On Mac computers with Apple silicon like M1/M2, make sure [Rosetta](https://support.apple.com/en-us/102527) is installed. If not, it can be installed with the following command.
:::

```bash
softwareupdate --install-rosetta --agree-to-license
```


## CLI Tool

The [OP_CAT Layer CLI](https://github.com/OPCAT-Labs/ts-tools/tree/main/packages/scrypt-ts-cli-opcat) tool is used to easily create, compile and publish `sCrypt` projects.
The CLI provides best practice project scaffolding including dependencies such as sCrypt, a test framework ([Mocha](https://mochajs.org)), code auto-formatting ([Prettier](https://prettier.io)), linting ([ES Lint](https://eslint.org)), and more.


Install it globally on your machine.

```sh
npm install -g @opcat-labs/cli-opcat
```


Run the CLI tool directly with `npx` and try it out by creating a demo project:

```sh
npx @opcat-labs/cli-opcat project demo
```


## Typescript SDK

There is a package that is useful for developing with Typescript:

* `@opcat-labs/scrypt-ts-opcat`

### Installation

For npm users:
```sh
npm install @opcat-labs/scrypt-ts-opcat
```

For yarn users:
```sh
yarn add @opcat-labs/scrypt-ts-opcat
```

### Usage

```sh
import { ... } from '@opcat-labs/scrypt-ts-opcat';
```

You can refer to more detailed usage examples and SDK references in this site for further information.