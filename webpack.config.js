const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const { mergeWith, isArray, isPlainObject } = require('lodash');
let { common, serverSide, clientSide } = require('./webpack');

const mergeWebpack = (targetVal, sourceVal) => {
  if (isArray(targetVal))
    return targetVal.concat(sourceVal);
  if (targetVal && !isPlainObject(targetVal))
    return targetVal;
}

module.exports = [
  mergeWith(clientSide, common, mergeWebpack),
  mergeWith(serverSide, common, mergeWebpack)
];
