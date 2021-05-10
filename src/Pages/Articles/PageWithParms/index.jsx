import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
// import useWorker from 'Hooks/useWorker';

import './classes.sass';


export default () => {
  const { id } = useParams();
  // const [ responses, dispatchWasm ] = useWorker('wasm', (response) => console.log(response));

  return <Grid alignItems='center' className='article' container direction='column' justify='center'>
    <h1 className='title'>Article {id}</h1>
  </Grid>;
};
