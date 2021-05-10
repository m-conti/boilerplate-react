import mapValues from 'lodash/mapValues';
import get from 'lodash/get';

import * as btn from './btn';
import * as post from './post';
import * as album from './album';

const selectLangage = (locale) => mapValues({
  btn,
  post,
  album
}, (trads) => get(trads, locale));

export const fr = selectLangage('fr');
export const en = selectLangage('en');
