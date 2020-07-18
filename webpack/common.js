const constants = require('./constants');
const { set } = require('lodash');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

const DEV_ENV = process.env.NODE_ENV === 'dev';
const PROD_ENV = process.env.NODE_ENV === 'prod';

let config = {
  output: {
    path: constants.path,
    publicPath: constants.publicPath,
    filename: '[name].js',
  },
  plugins: [
  ],
  resolve: { extensions: ['.js', '.json', '.jsx'] },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
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
