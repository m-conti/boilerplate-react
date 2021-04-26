import routes from './routes';
import { PARAM_HANDLER } from './constants';

import { tLocale } from 'types/types';
import { IRoute } from 'types/page';
import { Dictionary } from 'types/lodash';

const paths = routes.reduce((obj: Dictionary<string>, { name, path }: IRoute): Dictionary<string> => (
  { ...obj, [name]: path }
), {});

console.log('paths : ', paths);

const path = (
  path: string,
  args: Dictionary<string> = {},
  locale: tLocale = lang.get()
): string => {

  let url: string = paths.asget(`${locale}.${path}`);
  if (!url) throw new Error('Path doesn\'t exist');

  const paramsFound: IterableIterator<RegExpMatchArray> = url?.matchAll(new RegExp(PARAM_HANDLER, 'g'));

  for (const param of paramsFound) {
    console.log(param);
    url = url.replace(param[0], args.asget(param[2], ''));
  }

  return url.replace(/\/$/, '');
};

export default path;
