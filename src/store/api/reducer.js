import {
  startedActionType,
  successActionType,
  errorActionType,
} from './actionTypes';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  visibilityFilter: 'SHOW_FIRST',
};

export default name => (state = initialState, { type, payload }) => {
  switch (type) {
    case startedActionType(name):
      return {
        ...state,
        data: null,
        isLoading: true,
        error: null,
      };
    case successActionType(name):
      return {
        ...state,
        data: payload,
        isLoading: false,
        error: null,
      };
    case errorActionType(name):
      return {
        ...state,
        data: null,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
