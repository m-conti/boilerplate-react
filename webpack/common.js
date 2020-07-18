const webpack = require('webpack');
const constants = require('./constants');


module.exports = {
  output: {
    path: constants.path,
    publicPath: constants.publicPath,
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: `'development'` }}),
  ],
  resolve: { extensions: [".js"] },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};