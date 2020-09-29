module.exports = {
    rootDir: '.',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    },
    testMatch: ['**/test/client/**/*.test.js'],
    setupFiles: ['<rootDir>test/setup-tests.js'],
    collectCoverage: true,
    collectCoverageFrom: [
        'client/**/*.js',
        '!client/index.js',
        '!client/routes.js',
        '!client/services/**'
    ],
    coverageDirectory: './coverage',
    coverageReporters: ['cobertura', 'text', 'lcov'],
    coverageThreshold: {
      global: {
        statements: 1,
        branches: 1,
        functions: 1,
        lines: 1
      }
    }
  };