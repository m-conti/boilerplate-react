import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import classes from './classes.sass';

const Header: FunctionComponent = () => <Container className={classes.header} fixed maxWidth={false}>
  HEADER
</Container>

export default Header;
