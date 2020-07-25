import filter from 'lodash/filter';
import { Dictionary, NumericDictionary } from 'types/lodash';


export default function(
  this: Dictionary<never>|NumericDictionary<never>,
  iteratee: Function
): Array<any> {
  return filter(this, iteratee);
}
