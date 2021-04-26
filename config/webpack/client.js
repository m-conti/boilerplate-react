/* eslint-disable prefer-const */
/* eslint-disable curly */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const paths = require('./paths');
const set = require('lodash/set');

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
    new MiniCssExtractPlugin({
      filename: DEV_ENV ? '[name].css' : '[name].[hash].css',
      chunkFilename: DEV_ENV ? '[id].css' : '[id].[hash].css',
    }),
    new WasmPackPlugin({
      crateDirectory: paths.wasmCrate,
      outDir: paths.wasmOut,
    }),
  ],
  devServer: {
    contentBase: paths.out,
    publicPath: paths.public,
    open: true,
    hot: DEV_ENV,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { hmr: DEV_ENV } },
          { loader: 'css-loader', options: { modules: { localIdentName: '[local]__[hash:base64:5]' } } },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { hmr: DEV_ENV } },
          { loader: 'css-loader', options: { modules: { localIdentName: '[local]__[hash:base64:5]' } } },
          { loader: 'postcss-loader' }
        ]
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
      },
      {
        test: /\.worker.js$/i,
        use: [
          { loader: 'worker-loader' }
        ],
      }
    ]
  }
};

if (DEV_ENV) {
  set(config, 'devtool', 'cheap-module-eval-source-map');
  set(config, 'entry.client', [ 'react-hot-loader/patch', config.entry.client ]);
  config.plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false, defaultSizes: 'gzip', analyzerPort: 8989 }));
}

if (PROD_ENV) {
  config.plugins.push(new ManifestPlugin());
  config.plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false, defaultSizes: 'gzip', analyzerMode: 'static' }));
}

module.exports = config;
