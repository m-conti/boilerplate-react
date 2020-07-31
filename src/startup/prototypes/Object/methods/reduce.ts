import reduce from 'lodash/reduce';
import reduceRight from 'lodash/reduceRight';
import { tFunctionalMap } from 'types/types';
import { MemoListIterator, Dictionary, NumericDictionary } from 'types/lodash';


const actions: tFunctionalMap = {
  left: reduce,
  right: reduceRight,
};

export default function(
  this: Dictionary<never>|NumericDictionary<never>,
  iteratee: MemoListIterator<unknown, unknown, [unknown]>,
  accumulator: any = {},
  direction: 'left'|'right' = 'left'
): any {
  return (actions[direction] || (() => null))(this, iteratee, accumulator);
}