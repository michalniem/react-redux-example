import { changeFiltersType } from './actionTypes';

const initialState = {
  name: '',
  genres: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case changeFiltersType:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
