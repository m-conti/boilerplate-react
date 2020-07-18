const HtmlWebPackPlugin = require('html-webpack-plugin');
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
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader' },
        ]
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
