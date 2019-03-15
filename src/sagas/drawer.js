import { takeEvery, race, take } from 'redux-saga/effects';
import { DRAWER } from '../constants/actionTypes';

function* drawerWorker() {
  const { submit, cancel } = yield race({
    submit: take(DRAWER.SUBMIT),
    cancel: take(DRAWER.CLOSE),
  });
}

export default function* drawerWatcher() {
  yield takeEvery(DRAWER.OPEN, drawerWorker);
}
