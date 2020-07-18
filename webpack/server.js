const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { set } = require('lodash');

const DEV_ENV = process.env.NODE_ENV === 'dev';
const PROD_ENV = process.env.NODE_ENV === 'prod';

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
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['dist'], verbose: true }),
  ],
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ['null-loader']
      },
    ]
  }
};

if (DEV_ENV) {

}

if (PROD_ENV) {

}

module.exports = config;
