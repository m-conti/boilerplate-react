import { lazy } from 'react';

import errorPages from './Error';
import articlesPages from './Articles';

import { IPage } from 'types/page';

const routes: Array<IPage> = [
  { name: 'threejs', component: lazy(() => import('./Threejs')), path: '/', exact: true },
  { name: 'error', pages: errorPages, path: { en: '/error', fr: '/erreur' } },
  { name: 'articles', pages: articlesPages, path: { en: '/posts', fr: '/articles' }, },
];

export default routes;
