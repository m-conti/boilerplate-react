import { every, some, ConformsPredicateObject, isMatch, isEqual, isEmpty, } from 'lodash';
import { tFunctionalMap } from 'typings/types';

const actions: tFunctionalMap = {
  every: every, some: some,
  none: (...args:[any]): boolean => !some(...args),
  match: isMatch, equal: isEqual, empty: isEmpty,
};

export default function(
  this: object,
  select: 'every'|'some'|'none',
  predicate: ConformsPredicateObject<object> | object,
): boolean {
  return actions[select](this, predicate);
}
