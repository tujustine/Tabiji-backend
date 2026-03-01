/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/integration/**/*.test.ts"],
  roots: ["<rootDir>/src"],
  globalSetup: "<rootDir>/src/__tests__/setup/integration.globalSetup.ts",
  setupFiles: ["<rootDir>/src/__tests__/setup/integration.mocks.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup/integration.setup.ts"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "__tests__/setup", // garder pour éviter que setup soit pris pour des tests
  ],
  maxWorkers: 1, // pour éviter les conflits de base de données
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
};
