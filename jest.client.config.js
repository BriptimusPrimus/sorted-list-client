module.exports = {
  displayName: 'client',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  testMatch: ['**/test/client/**/*.test.js'],
  setupFiles: ['<rootDir>test/setup-tests.js']
};
