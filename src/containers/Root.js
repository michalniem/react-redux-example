import React, { Fragment } from 'react';
import { compose } from 'redux';

import Bar from '../components/Bar';
import Movies from './Movies';
import Loading from '../shared/Loading';
import WithAppData from '../hocs/WithAppData';

const Root = () => (
  <Fragment>
    <Bar />
    <Movies />
  </Fragment>
);

const enhances = compose(
  WithAppData,
);

export default enhances(Root);
