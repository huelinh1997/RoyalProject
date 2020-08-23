import { request } from '../helpers/request';

const getUserService = () => {
	return request({
		url: '/users',
		method: 'GET',
	})
		.then((res) => {
			return res;
		})
		.catch((error) => {
			//return error.response.data;
		});
};

export { getUserService };
