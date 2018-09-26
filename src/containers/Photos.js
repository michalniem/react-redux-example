import React from 'react';
import { compose } from 'redux';
import styled, { withTheme } from 'styled-components';
import { jsonPlaceholder } from '../axiosConfig';

import Photo from '../components/Photo';
import List from './List';
import WithData from '../hocs/WithData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const GridList = styled(List)`
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px 10px;
`;

const Photos = ({
  data: { data, isLoading, error },
}) => (
  <Container>
    <GridList
      data={data}
      isLoading={isLoading}
      error={error}
      limit={20}
      renderItem={item => (
        <Photo
          title={item.title}
          thumbnailUrl={item.thumbnailUrl}
        />
      )}
    />
  </Container>
);

const enhances = compose(
  WithData('photos', jsonPlaceholder('photos')),
  withTheme,
);

export default enhances(Photos);
