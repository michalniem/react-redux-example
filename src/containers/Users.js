import React from 'react';
import { compose } from 'redux';

import WithUsers from '../hocs/WithUsers';

const Users = (props) => (
  <div>
    <h1>Users</h1>
    {console.log(props)}
  </div>
);

const enhances = compose(
  WithUsers,
);

export default enhances(Users);
