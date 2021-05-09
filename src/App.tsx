import 'startup';

import React, { FunctionComponent } from 'react';
import Router from 'routes/Router';
import Layout from 'Layouts/Layout';
import useForceUpdate from 'Hooks/useForceUpdate';

const App: FunctionComponent = () => {

  globalThis.rerenderApp = useForceUpdate();

  return <Layout>
    <Router />
  </Layout>;
};
export default App;
