import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import asyncReducerFactory from './api/reducer';

const rootReducer = combineReducers({
  users: asyncReducerFactory('users'),
  psots: asyncReducerFactory('posts'),
  photos: asyncReducerFactory('photos'),
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);
