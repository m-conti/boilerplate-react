const webpack = require('webpack');
const constants = require('./constants');
const { set } = require('lodash');

const DEV_ENV = process.env.NODE_ENV === 'dev';
const PROD_ENV = process.env.NODE_ENV === 'prod';

let config = {
  output: {
    path: constants.path,
    publicPath: constants.publicPath,
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: `'development'` }}),
  ],
  resolve: { extensions: ['.js', '.json', '.jsx'] },
  module: {
    rules: [
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
