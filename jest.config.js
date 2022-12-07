const { resolve } = require('path');
const root = resolve(__dirname);

module.exports = {
    preset: 'jest-preset-typescript',
    rootDir: root,
    displayName: 'root-tests',
    testEnvironment: 'node',
    clearMocks: true,
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1',
    }
}