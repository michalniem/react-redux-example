import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
// import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import filtersReducer from './filters/reducer';
import watchFetchMovies from '../sagas/fetchMoviesSaga';

import asyncReducerFactory from './api/reducer';

const rootReducer = combineReducers({
  movies: asyncReducerFactory('movies'),
  filters: filtersReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchFetchMovies);

export default store;
