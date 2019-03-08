import { put, call, takeEvery } from 'redux-saga/effects';
import { createArticleService } from '../../services/article';
import { createArticleSuccess, createArticleFail } from '../../actions/article';
import { ARTICLE } from '../../constants/actionTypes';
import { closeDrawer } from '../../actions/drawer';

function* createArticleWorker(action) {
  try {
    const article = yield call(createArticleService, action.payload);
    yield put(createArticleSuccess(article));
    yield put(closeDrawer());
  } catch (err) {
    yield put(createArticleFail(err));
  }
}

export default function* createArticleWatcher() {
  yield takeEvery(ARTICLE.CREATE_PENDING, createArticleWorker);
}
