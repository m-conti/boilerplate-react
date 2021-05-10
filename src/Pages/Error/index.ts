import { lazy } from 'react';

import { IPage } from 'types/page';

const routes: Array<IPage> = [
  { name: '404', component: lazy(() => import('./404')), exact: true, path: '/404' },
];

export default routes;
