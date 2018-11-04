import React, { Fragment } from 'react';
import { compose } from 'redux';

import Bar from '../components/Bar';
import Movies from './Movies';
import Form from './Form';
import WithAppData from '../hocs/WithAppData';

const Root = () => (
  <Fragment>
    <Bar />
    <Form />
    <Movies />
  </Fragment>
);

const enhances = compose(
  WithAppData,
);

export default enhances(Root);
