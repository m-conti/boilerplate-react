import forEach from 'lodash/forEach';
import forEachRight from 'lodash/forEachRight';
import { IFunctionalMap } from 'types/types';


const actions: IFunctionalMap = {
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
