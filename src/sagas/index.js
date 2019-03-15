import { all } from 'redux-saga/effects';
import fetchArticlesWatcher from './articles/fetch';
import createArticleWatcher from './articles/create';
import delelteArticleWatcher from './articles/delete';
import updateArticleWatcher from './articles/update';
import getArticleByIdWatcher from './articles/getById';

export default function* rootSaga() {
  yield all([
    fetchArticlesWatcher(),
    createArticleWatcher(),
    delelteArticleWatcher(),
    updateArticleWatcher(),
    getArticleByIdWatcher(),
  ]);
}
