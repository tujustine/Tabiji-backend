/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src", "<rootDir>"],
  testPathIgnorePatterns: ["/node_modules/", "__tests__/integration", "dist"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
