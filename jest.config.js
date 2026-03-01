/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "__tests__/integration"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
