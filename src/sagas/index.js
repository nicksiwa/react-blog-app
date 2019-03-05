import { all } from 'redux-saga/effects';
import fetchArticlesWatcher from './articles/fetch';

export default function* rootSaga() {
  yield all([
    fetchArticlesWatcher(),
  ]);
}
