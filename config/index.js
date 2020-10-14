/*
 * Defines configuration according to environment
 */

const environment = process.env.NODE_ENV || 'development';

const envConfigModule = environment === 'test' ? 'test' : 'development';

const defaultConfig = require('./files/default');

const envConfig = require('./files/' + envConfigModule);

// merge default config and selected config
const configuration = Object.assign({}, defaultConfig, envConfig);

console.log('configuration loaded:', JSON.stringify(configuration));

module.exports = configuration;
