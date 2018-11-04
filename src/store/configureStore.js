import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import filtersReducer from './filters/reducer';

import asyncReducerFactory from './api/reducer';

const rootReducer = combineReducers({
  movies: asyncReducerFactory('movies'),
  filters: filtersReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
);
