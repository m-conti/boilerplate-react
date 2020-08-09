import { Moment } from 'moment';
import { tCheckString } from 'types/types';
import { TOptions } from 'i18next';

declare global {
  interface String {
    ascase(
      select:
        | 'pascal'
        | 'camel'
        | 'snake'
        | 'start'
        | 'kebab'
        | 'upper'
        | 'lower'
        | 'capitalize'
        | 'macro'
    ): string;
    ascheck(
      selects:
        | string
        | tCheckString
        | RegExp
        | [string | tCheckString | RegExp],
      ...params: any[]
    ): boolean;
    asformat(params?: object, option?: TemplateOption): string;
    asconvert(
      select: 'date' | 'translate' | 'path',
      params?: string | TOptions<object>
    ): string | object | Moment;
  }
}
