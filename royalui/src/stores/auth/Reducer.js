import Actions from './Action';

const initialState = {
	data: {},
};

const AuthReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case Actions.LOGIN_RESPONSE: {
			return {
				...state,
				data: actions.data,
			};
		}
		default:
			return state;
	}
};

export default AuthReducer;
