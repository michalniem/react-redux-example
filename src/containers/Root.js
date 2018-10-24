import React, { Fragment, lazy, Suspense } from 'react';
import { compose } from 'redux';
import { Route, withRouter } from 'react-router-dom';
// import Loadable from 'react-loadable';

import Bar from '../components/Bar';
import WithProviders from '../hocs/WithProviders';
import Loading from '../shared/Loading';
import WithAppData from '../hocs/WithAppData';

const Users = lazy(() => import('./Users'));

const Photos = lazy(() => import('./Photos'));

const Posts = lazy(() => import('./Posts'));

const Movies = lazy(() => import('./Movies'));

const Root = () => (
  <Fragment>
    <Bar />
    {/* <Button>Add new item</Button> */}
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
    <Route
      exact
      path="/movies"
      component={Movies}
    />
  </Fragment>
);

const enhances = compose(
  WithProviders,
  withRouter,
  WithAppData,
);

export default enhances(Root);
