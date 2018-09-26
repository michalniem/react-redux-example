import React from 'react';
import { compose } from 'redux';
import instance from '../axiosConfig';

import WithData from '../hocs/WithData';

const Users = () => (
  <div>
    <h1>Users</h1>
  </div>
);

const enhances = compose(
  WithData('users', instance.get('users')),
);

export default enhances(Users);
