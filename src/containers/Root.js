import React, { Fragment } from 'react';
import { compose } from 'redux';
import { Route, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import Bar from '../components/Bar';
import WithProviders from '../hocs/WithProviders';
import Loading from '../shared/Loading';
import WithAppData from '../hocs/WithAppData';

const Users = Loadable({
  loader: () => import('./Users'),
  loading: Loading,
});

const Photos = Loadable({
  loader: () => import('./Photos'),
  loading: Loading,
});

const Posts = Loadable({
  loader: () => import('./Posts'),
  loading: Loading,
});

const Root = () => (
  <Fragment>
    <Bar />
    <Route
      exact
      path="/users"
      component={Users}
    />
    <Route
      exact
      path="/photos"
      component={Photos}
    />
    <Route
      exact
      path="/posts"
      component={Posts}
    />
  </Fragment>
);

const enhances = compose(
  WithProviders,
  withRouter,
  WithAppData,
);

export default enhances(Root);
