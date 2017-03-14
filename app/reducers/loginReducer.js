import * as types from '../actions/actionTypes';
const initialState = {
	isLogining: false,
	receiveSucceed: false,
	loginInfo: {},
	loginFail: false,
};

export default loginReudcer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN_IN:
			return Object.assign({}, state, {
				isLogining: action.isLogining,
				loginFail: false,
			})
		case types.RECEIVE_LOGIN:
			return Object.assign({}, state, {
				isLogining: action.isLogining,
				datas: action.datas,
				receiveSucceed: action.receiveSucceed,
			})
		case types.LOGIN_IN_FAIL:
			return Object.assign({}, state, {
				isLogining: false,
				loginFail: true,
			})
		default:
			return state;
	}
}