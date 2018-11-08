import { createSelector } from 'reselect';
import toLower from 'lodash/toLower';


const filterMovie = (movie, key, filterValue) => toLower(movie[key]).includes(toLower(filterValue));

const getAllMovies = state => state.movies;
const getFilters = state => state.filters;

const getSelectedMovies = (movies, { name, genres }) => {
  if (movies.data) {
    const allMovies = movies.data.data;

    const selectedMovies =
      allMovies
        .filter(movie => filterMovie(movie, 'name', name))
        .filter(movie => filterMovie(movie, 'genres', genres));
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
