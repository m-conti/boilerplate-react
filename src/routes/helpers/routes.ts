import pages from 'Pages';
import flatMapDeep from 'lodash/flatMapDeep';
import routeMaker from '../routeMaker';

import { routes as locales } from 'locales/config';

import { IRoute } from 'types/page';

const routes = flatMapDeep(locales, ({ locale, path }) => routeMaker(pages, locale, path)) as Array<IRoute>;

console.log('routes : ', routes);

export default routes;
