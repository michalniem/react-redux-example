import { put } from 'redux-saga/effects';
import {
  fetchStarted,
  fetchSucceeded,
  fetchErrored,
} from '../store/api/actionCreators';

export default (name, instance) => function* fetchDataFactory() {
  yield put(fetchStarted(name));
  try {
    const res = yield instance;
    yield put(fetchSucceeded(name, res));
  } catch (err) {
    yield put(fetchErrored(name, err));
  }
}