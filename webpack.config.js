/* eslint-disable prefer-const */
/* eslint-disable curly */
const mergeWith = require('lodash/mergeWith');
const isArray = require('lodash/isArray');
const isPlainObject = require('lodash/isPlainObject');
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
