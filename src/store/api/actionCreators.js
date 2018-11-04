import {
  startedActionType,
  successActionType,
  errorActionType,
} from './actionTypes';

export const fetchStarted = name => ({
  type: startedActionType(name),
});

export const fetchSucceeded = (name, data) => ({
  type: successActionType(name),
  payload: data,
});

export const fetchErrored = (name, error) => ({
  type: errorActionType(name),
  payload: error,
});


export const fetchDataFactory = (name, instance) => () => async (dispatch) => {
  dispatch(fetchStarted(name));
  try {
    const res = await instance;
    dispatch(fetchSucceeded(name, res));
  } catch (err) {
    dispatch(fetchErrored(name, err));
  }
};
