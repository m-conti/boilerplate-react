const { mergeWith, isArray, isPlainObject } = require('lodash');
let { common, serverSide, clientSide } = require('./webpack');

const mergeWebpack = (...args) => mergeWith(...args, (targetVal, sourceVal) => {
  if (isArray(targetVal))
    return targetVal.concat(sourceVal);
  if (targetVal && !isPlainObject(targetVal))
    return targetVal;
});

module.exports = [
  mergeWebpack(clientSide, common),
  mergeWebpack(serverSide, common)
];
