import { createSelector } from 'reselect';

const getAllMovies = state => state.movies;

const getMovies = (movies) => {
  if (movies.data) {
    const selectedUsers = movies.data.data;
    return {
      ...movies,
      data: selectedUsers,
    };
  }
  return movies;
};

export default createSelector(
  getAllMovies,
  getMovies,
);
