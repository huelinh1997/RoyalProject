import { combineReducers } from 'redux';
import AuthReducer from './auth/Reducer';
import userReducer from './user/Reducer';

const reducer = combineReducers({ AuthReducer, userReducer });

export default reducer;
