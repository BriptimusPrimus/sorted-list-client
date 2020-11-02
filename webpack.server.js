const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/client/ssr.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'server'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  // in order to ignore built-in modules like path, fs, etc.
  target: 'node',
  // in order to ignore all modules in node_modules folder
  externals: [nodeExternals({
    allowlist: [/\.css/]
  })],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, 'src/client'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/, loader: 'ignore-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
