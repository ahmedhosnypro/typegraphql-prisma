const baseConfig = require("./jest.config.cjs");

/** @type {import('jest').Config} */
const config = {
  ...baseConfig,
  testMatch: ["<rootDir>/tests/**/*integration.ts"],
  testPathIgnorePatterns: baseConfig.testPathIgnorePatterns?.filter(
    (it) => it !== "<rootDir>/tests/.*integration.*"
  ),
};

module.exports = config;