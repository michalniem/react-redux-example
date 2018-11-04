import { changeFilterType } from './actionTypes';

export const changeFilter = (filter, value) => ({
  type: changeFilterType(filter),
  payload: { filter, value },
});
