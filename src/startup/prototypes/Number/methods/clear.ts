import round from 'lodash/round';
import ceil from 'lodash/ceil';
import floor from 'lodash/floor';

import { IFunctionalMap } from 'types/types';

const actions: IFunctionalMap = {
  round,
  ceil,
  floor,
};

export default function(
  this: number,
  action: 'round' | 'ceil' | 'floor' = 'round',
  precision?: number,
): number {
  return actions[action](this, precision);
}
