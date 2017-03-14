import * as types from './actionTypes';
import FetchUtil from '../util/FetchUtil'
import md5 from '../util/md5.min';

import common from '../common/common';

export let login = (loginInfo, isLogining) => {
	let url = common.hostip + common.loginIn;
	var formdata = new FormData();
	formdata.append('userid', loginInfo.iphone);
	formdata.append('password', md5(loginInfo.pw));
	return dispatch => {
		dispatch(fetchLogin(isLogining))
		return FetchUtil.post(url, formdata, (response) => {
			// console.log(response);
			if (response.success) {
				dispatch(receiveLogin(response))
			} else {

			}

		}, (error) => {
			console.log(error);
		})
	}
}
let fetchLogin = (isLogining) => {
	return {
		type: types.LOGIN_IN,
		isLogining: isLogining,
	}
}
let receiveLogin = (response) => {
	return {
		type: types.RECEIVE_LOGIN,
		datas: response,
		isLogining: false,
		receiveSucceed: true,
	}
}
let receiveLoginErroe = (response) => {
	return {
		type: types.RECEIVE_LOGIN,
		datas: response,
		isLogining: false,
		receiveSucceed: true,
	}
}
let fetchLoginFail = () => {
	return {
		type: RECEIVE_LOGIN,
	}
}