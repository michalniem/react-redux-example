import { createSelector } from 'reselect';

const getAllMovies = state => state.movies;

const getSelectedMovies = (movies) => {
  if (movies.data) {
    const selectedMovies = movies.data.data;
    return {
      ...movies,
      data: selectedMovies,
    };
  }
  return movies;
};

export default createSelector(
  getAllMovies,
  getSelectedMovies,
);
