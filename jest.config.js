// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('@plugnet/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@plugnet/keyring(.*)$': '<rootDir>/packages/keyring/src/$1',
    '@plugnet/util-crypto(.*)$': '<rootDir>/packages/util-crypto/src/$1',
    '@plugnet/util(.*)$': '<rootDir>/packages/util/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/keyring/build',
    '<rootDir>/packages/util/build',
    '<rootDir>/packages/util-crypto/build'
  ]
});
