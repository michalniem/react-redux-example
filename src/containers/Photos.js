import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';

import photosSelector from '../store/api/selectors/photos';
import Photo from '../components/Photo';
import List from '../styles/blocks/List';

const Photos = ({
  photos: {
    data,
    isLoading,
    error,
  },
}) => (
  <List>
    <List.Grid
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
  </List>
);

const mapStateToProps = state => ({
  photos: photosSelector(state),
});

const enhances = compose(
  withTheme,
  connect(mapStateToProps),
);

Photos.propTypes = {
  photos: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

export default enhances(Photos);
