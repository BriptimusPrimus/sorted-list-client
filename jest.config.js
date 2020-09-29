module.exports = {
    rootDir: '.',
    collectCoverage: true,
    collectCoverageFrom: [
        'client/**/*.js',
        'server/**/*.js',
        '!client/index.js',
        '!client/routes.js',
        '!client/services/**',
        '!server/services/**',
        '!server/middleware/**'
    ],
    coverageDirectory: './coverage',
    coverageReporters: ['cobertura', 'text', 'lcov'],
    coverageThreshold: {
      global: {
        statements: 90,
        branches: 65,
        functions: 90,
        lines: 90
      }
    },
    projects: ['jest.server.config.js', 'jest.client.config.js']
  };