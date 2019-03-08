import {
  put,
  call,
  takeEvery,
  race,
  take,
} from 'redux-saga/effects';
import { deleteAriticleService } from '../../services/article';
import { deleteArticleSuccess, deleteArticleFail } from '../../actions/article';
import { ARTICLE, MODAL } from '../../constants/actionTypes';
import { openModal } from '../../actions/modal';
import { showSuccessMessage, showErrorMessage } from '../../components/share/MessageComponent';

function* deleteArticleWorker(action) {
  yield put(openModal({
    title: 'Are you sure delete this article?',
    content: `Article ID: ${action.payload}`,
  }));

  const modal = yield race({
    accept: take(MODAL.ACCEPT),
    cancel: take(MODAL.CANCEL),
  });

  if (modal.accept) {
    try {
      const id = yield call(deleteAriticleService, action.payload);
      yield put(deleteArticleSuccess(id));
      yield showSuccessMessage('Delete success');
    } catch (err) {
      yield put(deleteArticleFail(err));
      yield showErrorMessage(`${err}`);
    }
  }
}

export default function* deleteArticleWatcher() {
  yield takeEvery(ARTICLE.DELETE_PENDING, deleteArticleWorker);
}
