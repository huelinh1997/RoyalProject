import { takeLatest, put, all, fork } from 'redux-saga/effects';
import actions from './Action';
import { getUserService } from '../../services/userService';
import { Error } from '../../helpers/notify/index';

function* getUserSaga() {
	yield takeLatest(actions.GET_USER_REQUEST, function* () {
		try {
			const res = yield getUserService();
			if (res.status === 200) {
				yield put({
					type: actions.GET_USER_RESPONSE,
					data: res.data,
				});
			} else {
				Error('Login error!');
			}
		} catch (error) {
			Error('Cannot connect to server!');
		}
	});
}

export default function* rootSaga() {
	yield all([fork(getUserSaga)]);
}
