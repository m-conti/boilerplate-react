/* eslint-disable prefer-const */
/* eslint-disable curly */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const constants = require('./constants');
const { set } = require('lodash');

const DEV_ENV = process.env.NODE_ENV === 'development';
const PROD_ENV = process.env.NODE_ENV === 'production';

let config = {
  target: 'web',
  output: {
    filename: PROD_ENV ? '[name].js' : null,
  },
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
    hot: DEV_ENV,
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
      {
        test: /\.(png|je?pg|gif|svg)$/i,
        use: [
          { loader: 'url-loader', options: { limit: 8192 } },
          { loader: 'img-loader', options: { enable: PROD_ENV } }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          { loader: 'file-loader' },
        ],
      }
    ]
  }
};

if (DEV_ENV) {
  set(config, 'devtool', 'cheap-module-eval-source-map');
  set(config, 'entry.client', [ 'react-hot-loader/patch', config.entry.client ]);
}

if (PROD_ENV) {
  set(config, 'devtool', 'source-map');
  config.plugins.push(new ManifestPlugin());
}

module.exports = config;
