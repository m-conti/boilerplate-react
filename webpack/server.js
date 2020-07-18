const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
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
  ]
};