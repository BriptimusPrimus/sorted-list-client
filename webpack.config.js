var path = require('path');
var webpack = require('webpack');

var loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'react-hot!babel'
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file"
  },
  {
    test: /\.(woff|woff2)$/,
    loader:"url?prefix=font/&limit=5000"
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url?limit=10000&mimetype=application/octet-stream"
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url?limit=10000&mimetype=image/svg+xml"
  }
];

module.exports = {
  entry:  [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './client'
  ],
  output: {
    path:     path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:         ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: loaders
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
    },
    host: '127.0.0.1'
  }
};