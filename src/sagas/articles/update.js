import { put, call, takeEvery } from 'redux-saga/effects';
import { updateArticleService } from '../../services/article';
import { updateArticleSuccess, updateArticleFail } from '../../actions/article';
import { ARTICLE } from '../../constants/actionTypes';
import { closeDrawer } from '../../actions/drawer';

function* updateArticleWorker(action) {
  try {
    const articleUpdated = yield call(updateArticleService, action.payload);
    yield put(updateArticleSuccess(articleUpdated));
    yield put(closeDrawer());
  } catch (err) {
    yield put(updateArticleFail(err));
  }
}

export default function* updateArticleWatcher() {
  yield takeEvery(ARTICLE.UPDATE_PENDING, updateArticleWorker);
}
