import curry from 'lodash/curry';
import curryRight from 'lodash/curryRight';

import { IFunctionalMap } from 'types/types';

const actions: IFunctionalMap = {
  'left': curry,
  'right': curryRight,
};

export default function(
  this: (...args: any[]) => any,
  action: 'left' | 'right' = 'left'
): (...args: any[]) => any {
  return actions[action](this);
}
