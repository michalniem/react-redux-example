import { takeLatest } from 'redux-saga/effects';
import fetchDataFactory from './factory';
import instance from '../axiosConfig';

const fetchMovies = fetchDataFactory('movies', instance.get('movies'));

export default function* watchFetchMovies() {
  yield takeLatest('FETCH_MOVIES', fetchMovies);
}
