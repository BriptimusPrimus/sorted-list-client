const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry:  {
    main: './client'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'client'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules/bootstrap'),
          path.resolve(__dirname, 'client'),
        ],
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: './img/[name].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: './fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
        template: './templates/index.html',
        filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ]
};