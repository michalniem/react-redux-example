import React from 'react';
import { compose } from 'redux';
import { jsonPlaceholder } from '../axiosConfig';

import WithData from '../hocs/WithData';

const Users = () => (
  <div>
    <h1>Users</h1>
  </div>
);

const enhances = compose(
  WithData('users', jsonPlaceholder.get('users')),
);

export default enhances(Users);
