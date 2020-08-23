const Action = {
	GET_USER_REQUEST: 'GET_USER_REQUEST',
	GET_USER_RESPONSE: 'GET_USER_RESPONSE',

	getUserAction: () => ({
		type: Action.GET_USER_REQUEST,
	}),
};

export default Action;
