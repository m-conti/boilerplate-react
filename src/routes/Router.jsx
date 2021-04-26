import React, { Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Loading from 'Components/Utils/Loading';
import routes from './helpers/routes';
import { path } from 'routes';

export default (props) => <Suspense fallback={<Loading />}>
  <Switch>
    {routes.asmap(({ name, component: Component, ...page }) => (
      <Route key={name} {...page} component={() => <Component {...props} />} />
    ))}
    <Redirect to={path('error.404')} />
  </Switch>
</Suspense>;
