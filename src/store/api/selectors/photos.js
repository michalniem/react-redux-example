import { createSelector } from 'reselect';

const getAllPhotos = state => state.photos;

const getPhotos = (photos) => {
  if (photos.data) {
    const selectedPhotos = photos.data.data.filter(p => p.id <= 20);
    return {
      ...photos,
      data: selectedPhotos,
    };
  }
  return photos;
};

export default createSelector(
  getAllPhotos,
  getPhotos,
);
