import { filter, Dictionary, NumericDictionary } from 'lodash';


export default function(
  this: Dictionary<never>|NumericDictionary<never>,
  iteratee: Function
): Array<any> {
  return filter(this, iteratee);
}
