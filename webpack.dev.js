const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const developmentConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    pathinfo: false
  },
  devServer: {
    contentBase: './dist',
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
    },
    host: '127.0.0.1',
    open: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};

module.exports = developmentConfig;
