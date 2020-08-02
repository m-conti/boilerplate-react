/* eslint-disable prefer-const */
/* eslint-disable curly */
const nodeExternals = require('webpack-node-externals');
const set = require('lodash/set');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DEV_ENV = process.env.NODE_ENV === 'development';
const PROD_ENV = process.env.NODE_ENV === 'production';

let config = {
  target: 'node',
  entry: {
    server: './src/server/server.js',
  },
  output: {
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css|png|jpe?g|gif|svg|woff2?|eot|ttf|otf|\.worker\.js)$/i,
        use: ['null-loader']
      },
    ]
  }
};

if (DEV_ENV) {
  set(config, 'entry.server', [ 'react-hot-loader/patch', config.entry.server ]);
}

if (PROD_ENV) {
  config.plugins.push(new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['dist'], verbose: true }));
}

module.exports = config;
