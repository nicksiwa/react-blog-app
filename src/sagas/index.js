import { all } from 'redux-saga/effects';
import fetchArticlesWatcher from './articles/fetch';
import createArticleWatcher from './articles/create';

export default function* rootSaga() {
  yield all([
    fetchArticlesWatcher(),
    createArticleWatcher(),
  ]);
}
