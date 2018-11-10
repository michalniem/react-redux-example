import { changeFiltersType } from './actionTypes';

export const changeFilters = (filterName, value) => ({
  type: changeFiltersType(filterName),
  filterName,
  payload: value,
});
