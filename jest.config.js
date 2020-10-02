module.exports = {
  rootDir: '.',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/client/index.js',
    '!src/client/routes.js',
    '!src/client/components/index.js',
    '!src/client/services/**',
    '!src/server/services/**',
    '!src/server/middleware/**'
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['cobertura', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 70,
      functions: 85,
      lines: 90
    }
  },
  projects: ['jest.server.config.js', 'jest.client.config.js']
};