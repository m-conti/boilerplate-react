import i18n from 'startup/i18n/i18n';
import moment from 'moment';
import { TOptions, Callback, TFunction } from 'i18next';
import { Global } from 'types/global';

declare const global: Global;

export default class Lang {
  static get(): string {
    return i18n.language;
  }

  static set(langage: string, callback?: Callback): Promise<TFunction> {
    const cb = (error: any, t: TFunction):void|null => {
      if (!error) {
        moment.locale(langage);
        (global.rerender || (() => null))();
      }
      return (callback || (() => null))(error, t);
    };
    return i18n.changeLanguage(langage, cb);
  }

  static translate(key: string | [string], params?: string | TOptions<object>): string {
    return i18n.t(key, params);
  }
}
