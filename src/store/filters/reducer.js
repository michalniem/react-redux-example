import { changeFilterType } from './actionTypes';

const initialState = {
  text: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case changeFilterType(payload):
      return {
        ...state,
        // [filter]: value,
      };
    default:
      return state;
  }
};
