import { Moment } from 'moment';
import { ICheckString } from 'types/types';
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
        | ICheckString
        | RegExp
        | [string | ICheckString | RegExp],
      ...params: any[]
    ): boolean;
    asformat(params?: object, option?: TemplateOption): string;
    asconvert(
      select: 'date' | 'translate' | 'path',
      params?: string | TOptions<object>
    ): string | object | Moment;
    astrim(
      select: 'center' | 'start' | 'end' = 'center',
      chars = ' '
    ): string;
    aspad(
      select: 'center' | 'start' | 'end' = 'center',
      length = 0,
      chars = ' '
    ): string;
  }
}
