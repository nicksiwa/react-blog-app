import { put, call, takeEvery } from 'redux-saga/effects';
import { getArticleByIdService } from '../../services/article';
import { getArticleByIdSuccess, getArticleByIdFail } from '../../actions/article';
import { ARTICLE } from '../../constants/actionTypes';
import { openDrawer } from '../../actions/drawer';

function* getArticleByIdWorker(action) {
  try {
    const article = yield call(getArticleByIdService, action.payload);
    yield put(getArticleByIdSuccess(article));
    yield put(openDrawer());
  } catch (err) {
    yield put(getArticleByIdFail(err));
  }
}

export default function* getArticleByIdWatcher() {
  yield takeEvery(ARTICLE.GET_BY_ID_PENDING, getArticleByIdWorker);
}
