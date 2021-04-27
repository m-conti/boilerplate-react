/* eslint-disable prefer-const */
/* eslint-disable curly */
const paths = require('./paths');
const set = require('lodash/set');
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
    new webpack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ }),
  ],
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json' ],
    modules: [
      'node_modules',
      paths.nodeModules,
      paths.src
    ],
    alias: {
      'webpack.config': paths.webpackConfig,
    },
    plugins: [
      new ModuleScopePlugin([ paths.src, paths.nodeModules ], [paths.packageJson])
    ]
  },
  experiments: { syncWebAssembly: true },
  module: {
    rules: [
      // es-lint
      {
        enforce: 'pre',
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'eslint-loader', options: { formatter: eslintFormatter }},
        ],
      },
      // js
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|\.worker\.js$)/,
        use: [
          { loader: 'react-hot-loader/webpack' },
          { loader: 'babel-loader' }
        ],
        resolve: { fullySpecified: false }
      },
      // ts
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'react-hot-loader/webpack' },
          { loader: 'ts-loader'}
        ],
      },
      // yaml
      {
        test: /\.ya?ml$/,
        type: 'json',
        use: [
          { loader: 'yaml-loader' }
        ],
      }
    ],
  }
};

if (DEV_ENV) {
  set(config, 'mode', 'development');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  set(config, 'resolve.alias.react-dom', '@hot-loader/react-dom');
}

if (PROD_ENV) {
  set(config, 'mode', 'production');
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
}

module.exports = config;
