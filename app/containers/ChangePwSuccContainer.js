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

import ChangePwSucc from '../pages/ChangePwSuccPage'
class ChangePwSuccContainer extends Component {
	render() {
		return (
			<ChangePwSucc {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		ChangePwSucc
	} = state;
	return {
		ChangePwSucc
	}
})(ChangePwSuccContainer);