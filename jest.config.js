/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  roots: ["<rootDir>/app"],
  testRegex: "(/__tests__/.*\\.test)\\.(ts|tsx|js)$",
  preset: "ts-jest", // or other ESM presets
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setupTests.ts"],
  extensionsToTreatAsEsm: [".ts"],
  reporters: ["default", "jest-junit"],

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "node_modules/@web3-storage/.+\\.(j|t)sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!@web3-storage/.*)"],
};
