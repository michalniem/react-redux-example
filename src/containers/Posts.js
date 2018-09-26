import React from 'react';
import { compose } from 'redux';
import styled, { withTheme } from 'styled-components';
import { jsonPlaceholder } from '../axiosConfig';

import Post from '../components/Post';
import List from './List';
import WithData from '../hocs/WithData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ColumnList = styled(List)`
  list-style-type: none;
  padding: 0;
`;

const Posts = ({
  data: { data, isLoading, error },
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

const enhances = compose(
  WithData('users', jsonPlaceholder.get('posts')),
  withTheme,
);

export default enhances(Posts);
