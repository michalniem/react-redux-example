import React from 'react';
import { compose } from 'redux';

import WithPosts from '../hocs/WithPosts';

const Posts = (props) => (
  <div>
    <h1>Posts</h1>
    {console.log(props)}
  </div>
);

const enhances = compose(
  WithPosts,
);

export default enhances(Posts);
