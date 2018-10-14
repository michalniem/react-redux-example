import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';

import postsSelector from '../store/api/selectors/posts';
import Post from '../components/Post';
import List from '../styles/blocks/List';

const Posts = ({
  posts: {
    data,
    isLoading,
    error,
  }
}) => (
  <List>
    <List.Vertical
      data={data}
      isLoading={isLoading}
      error={error}
      renderItem={item => (
        <Post
          title={item.title}
          body={item.body}
        />
      )}
    />
  </List>
);

Posts.defaultProps = {
  posts: {
    data: [],
  },
};

const mapStateToProps = state => ({
  posts: postsSelector(state),
});

const enhances = compose(
  withTheme,
  connect(mapStateToProps),
);

export default enhances(Posts);
