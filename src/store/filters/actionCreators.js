import { changeFiltersType } from './actionTypes';

export const changeFilters = filters => ({
  type: changeFiltersType,
  payload: filters,
});
