module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    "services/(.*)": "<rootDir>/src/services/$1",
    "modules/(.*)": "<rootDir>/src/modules/$1",
  },
  moduleDirectories: ['src', 'node_modules']
};
