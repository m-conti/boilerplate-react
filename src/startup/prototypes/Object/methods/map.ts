import { map, mapValues, mapKeys, flatMapDeep, Dictionary, NumericDictionary } from 'lodash';
import { tFunctionalMap } from 'typings/types';


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
): Array<any> {
  return actions[option](this, iteratee);
}
