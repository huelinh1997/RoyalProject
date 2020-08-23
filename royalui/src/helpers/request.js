import axios from 'axios';
import { getToken } from './localstorage';

const { REACT_APP_BASE_URL, REACT_APP_BASE_MOCK } = process.env;

const requestAuth = axios.create({
	baseURL: `${REACT_APP_BASE_URL}/v1`,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

const requestRegister = axios.create({
	baseURL: `${REACT_APP_BASE_MOCK}/api`,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

const request = axios.create({
	baseURL: `${REACT_APP_BASE_URL}/v1`,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

request.interceptors.request.use(
	async (config) => {
		const token = await getToken();
		if (token !== null) {
			config.headers.Authorization = `Bearer ${getToken()}`;
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

// after send request
request.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const res = error.response;
		const mess = res.data.message;
		if (mess === `Invalid token` || mess === `Account change`) {
			localStorage.clear();
			window.location.reload();
		}
		return Promise.reject(error);
	}
);

export { request, requestAuth, requestRegister };
