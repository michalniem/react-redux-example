import { changeFiltersType } from './actionTypes';

const initialState = {
  text: '',
  genres: '',
};

export default (state = initialState, { type, filterName, payload }) => {
  switch (type) {
    case changeFiltersType(filterName):
      return {
        ...state,
        [filterName]: payload,
      };
    default:
      return state;
  }
};
