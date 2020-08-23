const Action = {
	LOGIN_REQUEST: 'LOGIN_REQUEST',
	LOGIN_RESPONSE: 'LOGIN_RESPONSE',

	REGISTER_REQUEST: 'REGISTER_REQUEST',
	REGISTER_RESPONSE: 'REGISTER_RESPONSE',

	LoginAction: (data) => ({
		type: Action.LOGIN_REQUEST,
		data,
	}),

	registerAction: (data) => ({
		type: Action.REGISTER_REQUEST,
		data,
	}),
};

export default Action;
