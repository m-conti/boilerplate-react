/* eslint-disable prefer-const */
/* eslint-disable curly */
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
  resolve: { extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json' ] },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: eslintFormatter
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [ 'react-hot-loader/webpack', 'babel-loader' ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      }
    ],
  }
};

if (DEV_ENV) {
  set(config, 'mode', 'development');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (PROD_ENV) {
  set(config, 'mode', 'production');
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
}

module.exports = config;
