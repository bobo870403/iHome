'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,

} from 'react-native';
import {
	connect
} from 'react-redux';

import Login from '../pages/LoginPage'
class LoginContainers extends Component {
	render() {
		return (
			<Login {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		Login
	} = state;
	return {
		Login
	}
})(LoginContainers);