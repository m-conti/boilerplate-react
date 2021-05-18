import { Dictionary } from 'types/lodash';
import { IFunctionalMap } from 'types/types';

import isArray from 'lodash/isArray';
import toArray from 'lodash/toArray';

import isFinite from 'lodash/isFinite';
import toFinite from 'lodash/toFinite';

import isInteger from 'lodash/isInteger';
import toInteger from 'lodash/toInteger';

import isLength from 'lodash/isLength';
import toLength from 'lodash/toLength';

import isNumber from 'lodash/isNumber';
import toNumber from 'lodash/toNumber';

import isPlainObject from 'lodash/isPlainObject';
import toPlainObject from 'lodash/toPlainObject';

import isSafeInteger from 'lodash/isSafeInteger';
import toSafeInteger from 'lodash/toSafeInteger';

import isString from 'lodash/isString';
import toString from 'lodash/toString';


const actions: Dictionary<IFunctionalMap> = {
  'array': { 'check': isArray, 'convert': toArray },
  'finite': { 'check': isFinite, 'convert': toFinite },
  'integer': { 'check': isInteger, 'convert': toInteger },
  'length': { 'check': isLength, 'convert': toLength },
  'number': { 'check': isNumber, 'convert': toNumber },
  'plainobject': { 'check': isPlainObject, 'convert': toPlainObject },
  'safeinteger': { 'check': isSafeInteger, 'convert': toSafeInteger },
  'string': { 'check': isString, 'convert': toString },
};

export default function(
  this: object,
  action: 'check' | 'convert',
  type: 'array' | 'finite' | 'integer' | 'length' | 'number' | 'plainobject' | 'safeinteger' | 'string'
): any {
  return actions[type][action](this);
}
