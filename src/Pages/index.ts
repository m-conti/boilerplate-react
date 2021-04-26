import errorPages from './Error';
import articlesPages from './Articles';

import { IPage } from 'types/page';

const routes: Array<IPage> = [
  { name: 'error', pages: errorPages, path: '' },
  { name: 'articles', pages: articlesPages, path: { en: '/posts', fr: '/articles' }, },
];

export default routes;
