import { reduce, reduceRight, Dictionary, NumericDictionary, MemoListIterator } from 'lodash';
import { tFunctionalMap } from 'typings/types';


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
