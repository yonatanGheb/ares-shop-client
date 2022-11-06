/* /* /* eslint-disable no-undef */
/* const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  devServer: {
    port: '3000',
    static: ['./public'],
    open: true,
    hot: true,
    liveReload: true
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
 */

/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: false,
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      inject: 'body'
    })
  ],
  devServer: {
    port: '3000',
    static: ['./public'],
    open: true,
    hot: true,
    liveReload: true
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
