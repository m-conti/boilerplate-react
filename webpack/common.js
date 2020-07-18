const constants = require('./constants');
const { set } = require('lodash');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const webpack = require('webpack');

const DEV_ENV = process.env.NODE_ENV === 'development';
const PROD_ENV = process.env.NODE_ENV === 'production';

let config = {
  output: {
    path: constants.path,
    publicPath: constants.publicPath,
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }}),
  ],
  resolve: { extensions: [ '.js', '.json', '.jsx' ] },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: eslintFormatter
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  }
};

if (DEV_ENV) {
  set(config, 'mode', 'development');
}

if (PROD_ENV) {
  set(config, 'mode', 'production');
}

module.exports = config;
