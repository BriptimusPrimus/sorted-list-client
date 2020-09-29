module.exports = {
    rootDir: '.',
    collectCoverage: true,
    collectCoverageFrom: [
        'client/**/*.js',
        'server/**/*.js',
        '!client/index.js',
        '!client/routes.js',
        '!client/services/**'
    ],
    coverageDirectory: './coverage',
    coverageReporters: ['cobertura', 'text', 'lcov'],
    coverageThreshold: {
      global: {
        statements: 30,
        branches: 20,
        functions: 50,
        lines: 30
      }
    },
    projects: ['jest.server.config.js', 'jest.client.config.js']
  };