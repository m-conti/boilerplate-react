import { forEach, forEachRight } from 'lodash';
import { tFunctionalMap } from 'typings/types';


const actions: tFunctionalMap = {
  left: forEach,
  right: forEachRight,
};

export default function(
  this: object,
  iteratee: Function,
  direction: 'left'|'right' = 'left'
): object {
  return (actions[direction] || (() => null))(this, iteratee);
}
