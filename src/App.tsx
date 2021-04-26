import 'startup';

import React, { FunctionComponent } from 'react';
import Router from 'routes/Router';
import Layout from 'Layouts/Layout';
import useForceUpdate from 'Hooks/useForceUpdate';

const App: FunctionComponent<{
  serverSide: boolean
}> = ({ serverSide }) => {

  globalThis.rerenderApp = useForceUpdate();

  return <Layout serverSide={serverSide}>
    <Router />
  </Layout>;
};
export default App;
