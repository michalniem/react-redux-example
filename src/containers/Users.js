import React from 'react';
import { compose } from 'redux';

import WithData from '../hocs/WithData';

const Users = (props) => (
  <div>
    <h1>Users</h1>
    {console.log(props)}
  </div>
);

const enhances = compose(
  WithData('users'),
);

export default enhances(Users);
