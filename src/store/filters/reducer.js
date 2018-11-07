import { changeFilterType } from './actionTypes';

const initialState = {
  name: '',
};

const initialPayload = {
  filterName: '',
  value: '',
};

export default (state = initialState, { type, payload = initialPayload }) => {
  switch (type) {
    case changeFilterType(payload.filterName):
      return {
        ...state,
        [payload.filterName]: payload.value,
      };
    default:
      return state;
  }
};
