import { Dictionary } from 'types/lodash';
import routes from './routes';
import { PARAM_HANDLER, PARAM_REPLACER, REGEX_LOCALE } from './constants';

import { IRoute, IListPathData, IPathData } from 'types/page';
import { tLocale } from 'types/types';

const removeParametersFromPath = (path: string): string => path
  .replace(new RegExp(`${PARAM_HANDLER}/`), `?${PARAM_REPLACER}`) // to can do : records/pages/:id? match records/pages
  .replace(new RegExp(`${PARAM_HANDLER}`), PARAM_REPLACER);

const locations: IListPathData = routes.asmap(({name, path}: IRoute): IPathData => {

  const locale: tLocale = REGEX_LOCALE.exec(name)?.asget?.(1);

  const paramsMatch = path.matchAll(new RegExp(PARAM_HANDLER, 'g'));
  const params = [...paramsMatch].asmap((elem: RegExpMatchArray) => elem.asget(2));

  const match = removeParametersFromPath(path);

  return { match, params, name: name.replace(`${locale}.`, ''), locale };
});

console.log('locations : ', locations);

const locate = (path: string): string => {

  const value = locations.asfind(({ match }: IPathData) => new RegExp(`^${match}`).test(path));

  if (!value) return path;

  const [ , ...params ] = path.match(new RegExp(value.match)) || [];

  return {
    ...value.asomit('match'),
    params: value.params.asreduce((
      obj: Dictionary<string>,
      elem: string,
      idx: number
    ) => (
      { ...obj, [elem]: params[idx] }
    ), {}),
  };
};

export default locate;
