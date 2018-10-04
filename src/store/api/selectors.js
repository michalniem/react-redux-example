import { createSelector } from 'reselect';

const getUsers = state => state.users;
const getPosts = state => state.posts;
const getPhotos = state => state.photos;

const photosSelector = createSelector(
  getPhotos,
  data => data.data,
);

export {
  getPhotos,
  photosSelector,
  getUsers,
  getPosts,
};
