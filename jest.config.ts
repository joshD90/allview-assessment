export default {
  testEnvironment: "jsdom",
  transform: {
    // Process TypeScript and JSX files
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  moduleNameMapper: {
    // Handle module aliases and static file imports
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts", // Setup file for React Testing Library
  ],
};
