module.exports = {
  rootDir: '.',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/client/index.js',
    '!src/client/routes.js',
    '!src/client/containers/App.js',
    '!src/client/services/**',
    '!src/server/services/**',
    '!src/server/middleware/**'
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['cobertura', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      functions: 85,
      lines: 95
    }
  },
  projects: ['jest.server.config.js', 'jest.client.config.js']
};
