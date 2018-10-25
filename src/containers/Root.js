import React, { Fragment, lazy, Suspense } from 'react';
import { compose } from 'redux';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
// import Loadable from 'react-loadable';

import Bar from '../components/Bar';
// import Users from './Users';
// import Photos from './Photos';
// import Posts from './Posts';
// import Movies from './Movies';
import Loading from '../shared/Loading';
import WithAppData from '../hocs/WithAppData';

const Users = lazy(() => import('./Users'));

const Photos = lazy(() => import('./Photos'));

const Posts = lazy(() => import('./Posts'));

const Movies = lazy(() => import('./Movies'));

const Root = () => (
  <BrowserRouter>
    <Fragment>
      <Bar />
      {/* <Button>Add new item</Button> */}
      <Route
        exact
        path="/users"
        render={() => (
          <Suspense fallback={<Loading />}>
            <Users />
          </Suspense>
        )}
      />
      <Route
        exact
        path="/photos"
        render={() => (
          <Suspense fallback={<Loading />}>
            <Photos />
          </Suspense>
        )}
      />
      <Route
        exact
        path="/posts"
        render={() => (
          <Suspense fallback={<Loading />}>
            <Posts />
          </Suspense>
        )}
      />
      <Route
        exact
        path="/movies"
        render={() => (
          <Suspense fallback={<Loading />}>
            <Movies />
          </Suspense>
        )}
      />
    </Fragment>
  </BrowserRouter>
);

const enhances = compose(
  withRouter,
  WithAppData,
);

export default enhances(Root);
