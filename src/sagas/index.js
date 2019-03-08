import { all } from 'redux-saga/effects';
import fetchArticlesWatcher from './articles/fetch';
import createArticleWatcher from './articles/create';
import delelteArticleWatcher from './articles/delete';

export default function* rootSaga() {
  yield all([
    fetchArticlesWatcher(),
    createArticleWatcher(),
    delelteArticleWatcher(),
  ]);
}
