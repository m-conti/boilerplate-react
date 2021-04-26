import React, { FunctionComponent } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import './classes.sass';


const Loading: FunctionComponent = () => <Backdrop open>
  <CircularProgress className='clear-icon' color='inherit' />
</Backdrop>;

export default Loading;
