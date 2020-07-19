import React, { ReactChild, ComponentType } from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import error from '@material-ui/core/colors/deepOrange';
import success from '@material-ui/core/colors/green';
import { SnackbarProvider } from 'notistack';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
// import { Header, Footer, Lang } from 'Components/Layouts';
import './styles.sass';

const theme = createMuiTheme({
  palette: {
    error: error,
    success: success,
  }
});

export default ({ serverSide, children }: { serverSide:boolean, children: ReactChild }) => {
  const Router: ComponentType = serverSide ? StaticRouter : BrowserRouter;
  return <ThemeProvider theme={theme}>
    <Router>
      {/* <Lang> */}
        <SnackbarProvider>
          {/* <Header /> */}
          <Container className='main-page'>
            {children}
          </Container>
          {/* <Footer /> */}
        </SnackbarProvider>
      {/* </Lang> */}
    </Router>
    <div className='main-background' />
  </ThemeProvider>
}