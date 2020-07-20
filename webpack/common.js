/* eslint-disable prefer-const */
/* eslint-disable curly */
const paths = require('./paths');
const { set } = require('lodash');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const webpack = require('webpack');

const DEV_ENV = process.env.NODE_ENV === 'development';
const PROD_ENV = process.env.NODE_ENV === 'production';

let config = {
  output: {
    path: paths.out,
    publicPath: paths.public,
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }}),
  ],
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.sass' ],
    modules: [
      'node_modules',
      paths.nodeModules,
      paths.src
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'webpack.config': paths.webpackConfig,
    },
    plugins: [
      new ModuleScopePlugin(paths.src, [paths.packageJson])
    ]
  },
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
        use: [ 'react-hot-loader/webpack', 'ts-loader' ],
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
