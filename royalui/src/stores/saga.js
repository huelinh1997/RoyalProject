import { all } from 'redux-saga/effects';
import AuthSaga from './auth/Saga';
import userSaga from './user/Saga';

export default function* rootSaga() {
	yield all([AuthSaga(), userSaga()]);
}
