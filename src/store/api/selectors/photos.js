import { createSelector } from 'reselect';

const getAllPhotos = state => state.photos;
const getVisibilityFilter = state => state.photos.visibilityFilter;

const getSelectedPhotos = (visibilityFilter, photos) => {
  if (photos.data) {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return {
          ...photos,
          data: photos.data.data,
        };
      case 'SHOW_FIRST':
        return {
          ...photos,
          data: photos.data.data.slice(0, 20),
        };
      case 'SHOW_ALBUMID_1':
        return {
          ...photos,
          data: photos.data.data.filter(e => e.albumId === 1),
        };
      default:
        return photos;
    }
  }
  return photos;
};

export default createSelector(
  getVisibilityFilter,
  getAllPhotos,
  getSelectedPhotos,
);
