import React from 'react';
import { compose } from 'redux';

import WithData from '../hocs/WithData';

const Users = () => (
  <div>
    <h1>Users</h1>
  </div>
);

const enhances = compose(
  WithData('users'),
);

export default enhances(Users);
