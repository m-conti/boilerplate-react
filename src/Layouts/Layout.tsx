import React, { ReactChild, FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import Container from '@material-ui/core/Container';

import { Header } from 'Components/Layouts';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import error from '@material-ui/core/colors/deepOrange';
import success from '@material-ui/core/colors/green';

import classes from './classes.sass';

const theme = createMuiTheme({
  palette: {
    error: error,
    success: success,
  }
});

const Layout: FunctionComponent<{
  children: ReactChild|ReactChild[]
}> = ({ children }) => {
  console.log('');

  return <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <Lang> */}
      <SnackbarProvider>
        <Header />
        <Container className={classes.page}>
          {children}
        </Container>
        {/* <Footer /> */}
      </SnackbarProvider>
      {/* </Lang> */}
    </BrowserRouter>
    <div className={classes.background} />
  </ThemeProvider>;
};

export default Layout;
