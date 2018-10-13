import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';

import photosSelector from '../store/api/selectors/photos';
import Photo from '../components/Photo';
import { GridListContainer, GridList } from '../styles/common';

const Photos = ({
  photos: {
    data,
    isLoading,
    error,
  }
}) => (
  <GridListContainer>
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
  </GridListContainer>
);

const mapStateToProps = state => ({
  photos: photosSelector(state),
});

const enhances = compose(
  withTheme,
  connect(mapStateToProps),
);

export default enhances(Photos);
