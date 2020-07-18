const HtmlWebPackPlugin = require('html-webpack-plugin');
const constants = require('./constants');

module.exports = {
  target: 'web',
  entry: {
    client: "./src/client/index.js",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html",
      filename: "./index.html",
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: constants.path,
    publicPath: constants.publicPath,
    open: true,
    historyApiFallback: true,
  },
};