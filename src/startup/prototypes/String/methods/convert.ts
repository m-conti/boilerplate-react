import i18next from 'startup/i18n/i18n';
import { TOptions } from 'i18next';
import moment from 'moment';
import { IFunctionalMap } from 'types/types';
import { path, locate } from 'routes';

const cases: IFunctionalMap = {
  date: moment,
  translate: i18next.t.bind(i18next),
  path,
  locate,
};

export default function(
  this: string,
  select: 'date'|'translate'|'path'|'locate',
  params?: string | TOptions<object>
): string | object | moment.Moment {
  return (cases[select] || (() => this))(this, params);
}
