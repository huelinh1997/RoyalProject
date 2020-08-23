import { requestAuth, requestRegister } from '../helpers/request';

const loginService = (data) => {
	return requestAuth({
		url: '/login',
		method: 'POST',
		data: data,
	});
};

const registerService = (data) => {
	return requestRegister({
		url: '/account',
		method: 'POST',
		data: data,
	});
};

export { loginService, registerService };
