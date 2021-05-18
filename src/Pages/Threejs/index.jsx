import React from 'react';
import Grid from '@material-ui/core/Grid';

import Scene from 'Components/Three/Scene';

import './classes.sass';

export default () => <Grid alignItems='center' container direction='column' justify='center'>
  <Scene />
</Grid>;
