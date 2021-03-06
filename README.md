![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)
[![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard)

# @plugnet/common

_This repo is a fork of [@polkadot/common](https://github.com/polkadot-js/common), up to the version which works with current plug-node_

Various useful utility functions that are used across all projects in the [@plugnet](https://www.poweredbyplug.com/) namespace. It provides utility functions with additional safety checks, allowing not only for consistent coding, but also reducing the general boilerplate.

## overview

This repository is split up into a number of internal packages, namely utilities -

- [keyring](packages/keyring/) Keyring management
- [util](packages/util/) General utilities
- [util-crypto](packages/util-crypto/) Crypto and hashing utilities

## development

Contributions are welcome!

To start off, this repo (along with others in the [@plugnet](https://github.com/plugblockchain/) family) uses yarn workspaces to organise the code. As such, after cloning, its dependencies _should_ be installed via `yarn`, not via npm; the latter will result in broken dependencies.

To get started -

1. Clone the repo locally, via `git clone https://github.com/plugblockchain/common.js <optional local path>`
2. Ensure that you have a recent version of Node.js, for development purposes [Node 10](https://nodejs.org/en/) is recommended.
3. Ensure that you have a recent version of Yarn, for development purposes [Yarn >=1.10.1](https://yarnpkg.com/docs/install) is required.
4. Install the dependencies by running `yarn`
5. Build the everything via `yarn run build`
6. You can also launch the API Docs, via `yarn vuepress dev docs`
7. Access the docs via [http://localhost:8080](http://localhost:8080)

## tutorials

Looking for tutorials to get started? Look at [examples](https://www.poweredbyplug.com/) for guides on how to use the base utilities.
