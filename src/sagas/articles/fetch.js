import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchArticlesService } from '../../services/article';
import { fetchArticlesSuccess, fetchArticlesFail } from '../../actions/article';
import { ARTICLE } from '../../constants/actionTypes';

function* fetchArticlesWorker() {
  try {
    const articles = yield call(fetchArticlesService);
    yield put(fetchArticlesSuccess(articles));
  } catch (err) {
    yield put(fetchArticlesFail(err));
  }
}

export default function* fetchArticlesWatcher() {
  yield takeEvery(ARTICLE.FETCH_PENDING, fetchArticlesWorker);
}
