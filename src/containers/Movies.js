import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';

import Movie from '../components/Movie';
import List from '../styles/blocks/List';
import selectedMovies from '../store/api/selectors/movies';

const Movies = ({
  movies: {
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
        <Movie
          title={item.name}
          thumbnailUrl={item.image.original}
        />
      )}
    />
  </List>
);

const mapStateToProps = state => ({
  movies: selectedMovies(state),
});

const enhances = compose(
  withTheme,
  connect(mapStateToProps),
);

Movies.propTypes = {
  movies: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

export default enhances(Movies);
