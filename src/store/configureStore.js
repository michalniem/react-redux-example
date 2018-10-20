import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import asyncReducerFactory from './api/reducer';

const rootReducer = combineReducers({
  users: asyncReducerFactory('users'),
  posts: asyncReducerFactory('posts'),
  photos: asyncReducerFactory('photos'),
  movies: asyncReducerFactory('movies'),
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);
