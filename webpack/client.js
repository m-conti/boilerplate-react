const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const constants = require('./constants');
const { set } = require('lodash');

const DEV_ENV = process.env.NODE_ENV === 'dev';
const PROD_ENV = process.env.NODE_ENV === 'prod';

let config = {
  target: 'web',
  entry: {
    client: './src/client/index.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/index.html',
      filename: './index.html',
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: DEV_ENV
    }),
  ],
  devServer: {
    contentBase: constants.path,
    publicPath: constants.publicPath,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { modules: true } },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { modules: true } },
            { loader: 'postcss-loader' }
          ]
        })
      },
    ]
  }
};

if (DEV_ENV) {
  set(config, 'devtool', 'cheap-module-eval-source-map');
}

if (PROD_ENV) {
  set(config, 'devtool', 'source-map');
}

module.exports = config;
