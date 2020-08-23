import Actions from './Action';

const initialState = {
	listUser: [],
};

const userReducer = (state = initialState, actions) => {
	switch (actions.type) {
		case Actions.GET_USER_RESPONSE: {
			return {
				...state,
				listUser: actions.data,
			};
		}
		default:
			return state;
	}
};

export default userReducer;
