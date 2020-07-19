import 'startup';

import React, { FunctionComponent } from 'react';
import Counter from 'Components/Counter';
import Layout from 'Layouts/Layout';

const App: FunctionComponent<{
  serverSide: boolean
}> = ({ serverSide }) => <Layout serverSide={serverSide}>
  <Counter />
</Layout>

export default App;
