import every from 'lodash/every';
import some from 'lodash/some';
import isMatch from 'lodash/isMatch';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import { tFunctionalMap } from 'types/types';
import { ConformsPredicateObject } from 'types/lodash';

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
