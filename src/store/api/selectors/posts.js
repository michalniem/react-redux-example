import { createSelector } from 'reselect';

const getAllPosts = state => state.posts;

const getPosts = (posts) => {
  if (posts.data) {
    const selectedPosts = posts.data.data.filter(p => p.id <= 20);
    return {
      ...posts,
      data: selectedPosts,
    };
  }
  return posts;
};

export default createSelector(
  getAllPosts,
  getPosts,
);
