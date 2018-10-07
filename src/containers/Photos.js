import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import photosSelector from '../store/api/selectors/photos';
import Photo from '../components/Photo';
import List from './List';

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
  photos: {
    data,
    isLoading,
    error,
  }
}) => (
  <Container>
    <GridList
      data={data}
      isLoading={isLoading}
      error={error}
      renderItem={item => (
        <Photo
          title={item.title}
          thumbnailUrl={item.thumbnailUrl}
        />
      )}
    />
  </Container>
);

const mapStateToProps = state => ({
  photos: photosSelector(state),
});

const enhances = compose(
  withTheme,
  connect(mapStateToProps),
);

export default enhances(Photos);
