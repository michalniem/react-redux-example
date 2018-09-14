import React from 'react';
import { compose } from 'redux';

import WithData from '../hocs/WithData';

const Posts = (props) => (
  <div>
    <h1>Posts</h1>
    {console.log(props)}
  </div>
);

const enhances = compose(
  WithData('posts'),
);

export default enhances(Posts);
