import { changeFilterType } from './actionTypes';

export const changeFilter = (filterName, value) => ({
  type: changeFilterType(filterName),
  payload: { filterName, value },
});
