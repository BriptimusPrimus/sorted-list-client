const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry:  {
    main: './src/client'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
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
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules/bootstrap'),
          path.resolve(__dirname, 'src/client'),
        ],
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: [
          path.resolve(__dirname, 'node_modules/bootstrap'),
          path.resolve(__dirname, 'src/client'),
        ],
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
        include: [
          path.resolve(__dirname, 'node_modules/bootstrap'),
          path.resolve(__dirname, 'src/client'),
        ],
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
        template: './templates/index.html',
        filename: './index.html'
    })
  ]
};