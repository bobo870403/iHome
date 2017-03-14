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
import ChangePassword from '../pages/ChangePasswordPage'
class ChangePasswordContainer extends Component {
	render() {
		return (
			<ChangePassword {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		ChangePassword
	} = state;
	return {
		ChangePassword
	}
})(ChangePasswordContainer);