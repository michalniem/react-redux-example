import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import asyncReducerFactory from './api/reducer';

const rootReducer = combineReducers({
  movies: asyncReducerFactory('movies'),
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
);
