/** @type {import('jest').Config} */
const config = {
  verbose: false,
  testEnvironment: "node",
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        // ts-jest configuration goes here
        tsconfig: "<rootDir>/tests/tsconfig.json",
      },
    ],
  },
  testMatch: ["<rootDir>/tests/**/*.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/tests/helpers",
    "<rootDir>/tests/artifacts",
    "<rootDir>/tests/.*integration.*",
  ],
  rootDir: "./",
  collectCoverage: false,
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!<rootDir>/src/**/*.d.ts"],
  modulePathIgnorePatterns: [
    "<rootDir>/experiments",
    "<rootDir>/lib",
    "<rootDir>/package",
    "<rootDir>/tests/artifacts",
  ],
  testTimeout: 10000,
  snapshotFormat: {
    escapeString: true,
    printBasicPrototype: true,
  },
  prettierPath: require.resolve("prettier-2"),
};

module.exports = config;
