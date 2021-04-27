import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import useWorker from 'Hooks/useWorker';

import { greet } from 'pkg';

import './classes.sass';


export default () => {
  const { id } = useParams();
  const [ responses, dispatchWasm ] = useWorker('wasm', (response) => console.log(response));

  useEffect(() => { console.log(greet()); }, []);

  return <Grid alignItems='center' className='article' container direction='column' justify='center'>
    <h1 className='title'>Article {id}</h1>
  </Grid>;
};
