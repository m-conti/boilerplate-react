import { find, Dictionary, NumericDictionary } from 'lodash';


export default function(
  this: Dictionary<never>|NumericDictionary<never>,
  predicate: Function,
  fromIndex?: number,
): unknown {
  return find(this, predicate, fromIndex);
}
