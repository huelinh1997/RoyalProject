import { takeLatest, put, all, fork } from 'redux-saga/effects';
import actions from './Action';
import { loginService, registerService } from '../../services/AuthService';
import history from '../../helpers/history';
import { Error, Success } from '../../helpers/notify/index';
import { getToken } from '../../helpers/localstorage';

function* loginSaga() {
	yield takeLatest(actions.LOGIN_REQUEST, function* (params) {
		const { data } = params;
		try {
			const res = yield loginService(data);
			if (res.status === 200) {
				yield localStorage.setItem('logged', true);
				yield put({ type: actions.LOGIN_RESPONSE, data: res.data });
				yield localStorage.setItem('token', res.data.token);
				if (getToken() !== undefined) {
					yield history.push('/users');
					Success('Login success!');
				} else {
					yield put({ type: actions.LOGIN_REQUEST, data });
				}
			} else {
				Error('Login error!');
			}
		} catch (error) {
			Error('Cannot connect to server!');
		}
	});
}

function* registerSaga() {
	yield takeLatest(actions.REGISTER_REQUEST, function* (params) {
		const { data } = params;
		try {
			const res = yield registerService(data);
			if (res.status === 201) {
				Success('Register success!');
				yield history.push('/login');
			} else Error('Register error!');
		} catch (error) {
			Error('Cannot connect to server!');
		}
	});
}

export default function* rootSaga() {
	yield all([fork(loginSaga), fork(registerSaga)]);
}
