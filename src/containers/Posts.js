import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import postsSelector from '../store/api/selectors/posts';
import Post from '../components/Post';
import List from './List';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100vw;
`;

const ColumnList = styled(List)`
  list-style-type: none;
  padding: 0;
`;

const Posts = ({
  posts: {
    data,
    isLoading,
    error,
  }
}) => (
  <Container>
    <ColumnList
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
  </Container>
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
