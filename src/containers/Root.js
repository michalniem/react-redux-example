import React from 'react';
import { compose } from 'redux';
import { Route } from 'react-router-dom';

import Users from './Users';
import Photos from './Photos';
import Posts from './Posts';
import WithProviders from '../hocs/WithProviders';

const Root = () => (
  <div>
    <h1>Root</h1>
    <Route exact path="/users" component={Users} />
    <Route exact path="/photos" component={Photos} />
    <Route exact path="/posts" component={Posts} />
  </div>
);

const enhances = compose(
  WithProviders,
);

export default enhances(Root);
