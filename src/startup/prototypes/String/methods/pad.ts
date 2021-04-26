import pad from 'lodash/pad';
import padEnd from 'lodash/padEnd';
import padStart from 'lodash/padStart';

import { IFunctionalMap } from 'types/types';

const actions: IFunctionalMap = {
  'center': pad,
  'start': padStart,
  'end': padEnd
};

export default function(
  this: string,
  select: 'center' | 'start' | 'end' = 'center',
  length = 0,
  chars = ' '
): string {
  return (actions[select] || ((): string => (this)))(this, length, chars);
}

