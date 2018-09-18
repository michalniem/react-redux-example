import {
  startedActionType,
  successActionType,
  errorActionType,
} from './actionTypes';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export default name => (state = initialState, { type, payload }) => {
  switch (type) {
    case startedActionType(name):
      return { data: null, isLoading: true, error: null };
    case successActionType(name):
      return { data: payload, isLoading: false, error: null };
    case errorActionType(name):
      return { data: null, isLoading: false, error: payload };
    default:
      return state;
  }
};
