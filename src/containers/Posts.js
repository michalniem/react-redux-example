import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import { getPosts } from '../store/api/selectors';
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

const Posts = (props) => (
  <Container>
    {console.log(props)}
    {/* <ColumnList
      data={data}
      isLoading={isLoading}
      error={error}
      renderItem={item => (
        <Post
          title={item.title}
          body={item.body}
        />
      )}
    /> */}
  </Container>
);

const mapStateToProps = state => ({
  photos: getPosts(state),
});

const enhances = compose(
  withTheme,
  connect(mapStateToProps),
);

export default enhances(Posts);
