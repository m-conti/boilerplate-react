import trim from 'lodash/trim';
import trimEnd from 'lodash/trimEnd';
import trimStart from 'lodash/trimStart';

import { tFunctionalMap } from 'types/types';

const actions: tFunctionalMap = {
  'center': trim,
  'start': trimStart,
  'end': trimEnd
};

export default function(
  this: string,
  select: 'center' | 'start' | 'end' = 'center',
  chars = ' '
): string {
  return (actions[select] || ((): string => (this)))(this, chars);
}

