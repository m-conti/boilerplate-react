import i18n from 'startup/i18n/i18n';
import moment from 'moment';
import { TOptions, Callback, TFunction } from 'i18next';

import { tLocale } from 'types/types';

class Lang {
  static get(): tLocale {
    return i18n.language as tLocale;
  }

  static set(langage: string, callback?: Callback): Promise<TFunction> {
    const cb = (error: any, t: TFunction):void|null => {
      if (!error) {
        moment.locale(langage);
        rerenderApp();
      }
      return callback?.(error, t);
    };
    return i18n.changeLanguage(langage, cb);
  }

  static translate(key: string | [string], params?: string | TOptions<object>): string {
    return i18n.t(key, params);
  }
}

export default Lang;
