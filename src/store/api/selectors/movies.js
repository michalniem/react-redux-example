import { createSelector } from 'reselect';

const getAllMovies = state => state.movies;
const getFilters = state => state.filters;

const getSelectedMovies = (movies, { name, genres }) => {
  if (movies.data) {
    const allMovies = movies.data.data;
    const filterByName = allMovies.filter(m => m.name.includes(name));
    const filterByGenres = filterByName.filter(m => m.genres.join().includes(genres));
    const selectedMovies = filterByGenres;
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
