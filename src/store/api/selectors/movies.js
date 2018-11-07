import { createSelector } from 'reselect';

const getAllMovies = state => state.movies;
const getFilters = state => state.filters;

const getSelectedMovies = (movies, { name }) => {
  if (movies.data) {
    const allMovies = movies.data.data;
    const selectedMovies = allMovies.filter(m => m.name.includes(name));
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
