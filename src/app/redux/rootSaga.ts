import { all } from 'redux-saga/effects';
import authSaga from './slices/authSaga';

function* helloSaga() {
  console.log('hello saga');
}

export default function* rootSaga() {
  console.log('rootSaga');
  yield all([helloSaga(), authSaga()]);
}
