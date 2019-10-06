module.exports = {
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: [
    "<rootDir>/cypress",
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "jest-transform-svelte",
  },
}

