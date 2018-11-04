import { createSelector } from 'reselect';

const getAllMovies = state => state.movies;
const getFilters = state => state.movies.filters;

const getSelectedMovies = (movies, { text }) => {
  if (movies.data) {
    const allMovies = movies.data.data;
    const selectedMovies = allMovies.filter(m => m.name.includes(text));
    return {
      ...movies,
      data: selectedMovies,
    };
  }
  return movies;
};

export default createSelector(
  [getAllMovies, getFilters],
  getSelectedMovies,
);
