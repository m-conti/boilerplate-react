import { lazy } from 'react';

import { IPage } from 'types/page';

const routes: Array<IPage> = [
  { name: 'first', component: lazy(() => import('./Page1')), exact: true, path: '/1' },
  { name: 'second', component: lazy(() => import('./Page2')), exact: true, path: '/2' },
  { name: 'third', component: lazy(() => import('./Page3')), exact: true, path: '/3' },
  { name: 'params', component: lazy(() => import('./PageWithParms')), exact: true, path: '/params/:id' },
];

export default routes;
