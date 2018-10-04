import React, { Fragment } from 'react';
import { compose } from 'redux';
import { Route } from 'react-router-dom';

import Bar from '../components/Bar';
import WithProviders from '../hocs/WithProviders';
import AsyncComponent from '../hocs/AsyncComponent';
import WithAppData from '../hocs/WithAppData';

const Root = () => (
  <Fragment>
    <Bar />
    <Route
      exact
      path="/users"
      component={AsyncComponent(() => import('./Users'))}
    />
    <Route
      exact
      path="/photos"
      component={AsyncComponent(() => import('./Photos'))}
    />
    <Route
      exact
      path="/posts"
      component={AsyncComponent(() => import('./Posts'))}
    />
  </Fragment>
);

const enhances = compose(
  WithProviders,
  WithAppData,
);

export default enhances(Root);
