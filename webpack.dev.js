/* eslint-disable import/no-extraneous-dependencies */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const developmentConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    pathinfo: false
  },
  devServer: {
    publicPath: '/static/',
    proxy: {
      '*': `http://127.0.0.1:${process.env.PORT || 3000}`
    },
    host: '127.0.0.1',
    openPage: 'customers',
    open: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};

module.exports = developmentConfig;
