import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import classes from './classes.sass';

const Header: FunctionComponent = () => {

  const { pathname } = useLocation();

  console.log(`location : ${pathname}\nlocate : `, pathname.asconvert('locate'));

  return <Container className={classes.header} fixed maxWidth={false}>
    <div />
  </Container>;
};

export default Header;
