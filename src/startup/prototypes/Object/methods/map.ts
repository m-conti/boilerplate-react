import map from 'lodash/map';
import mapValues from 'lodash/mapValues';
import mapKeys from 'lodash/mapKeys';
import flatMapDeep from 'lodash/flatMapDeep';
import { tFunctionalMap } from 'types/types';
import { Dictionary, NumericDictionary } from 'types/lodash';


const actions: tFunctionalMap = {
  value: mapValues,
  key: mapKeys,
  array: map,
  flat: flatMapDeep
};


export default function(
  this: Dictionary<never>|NumericDictionary<never>,
  iteratee: Function,
  option: 'key'|'value'|'array'|'flat' = 'array',
): Array<any> | object {
  return actions[option](this, iteratee);
}
