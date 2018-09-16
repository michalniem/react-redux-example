import React from 'react';
import { compose } from 'redux';

import Post from '../components/Post';
import List from '../containers/List';
import WithData from '../hocs/WithData';

const Posts = ({ posts: { data, isLoading, error } }) => (
  <React.Fragment>
    <h1>Posts</h1>
      <List
        data={data}
        isLoading={isLoading}
        error={error}
        renderItem={item => (
          <li key={item.id}>
            <Post
              title={item.title}
              body={item.body}
            />
          </li>
        )}
      />
  </React.Fragment>
);

const enhances = compose(
  WithData('posts'),
);

export default enhances(Posts);
