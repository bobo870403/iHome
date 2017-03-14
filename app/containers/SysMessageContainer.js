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

import SysMessage from '../pages/SysMessagePage'

class SysMessageContainer extends Component {
	render() {
		return (
			<SysMessage {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		SysMessage
	} = state;
	return {
		SysMessage
	}
})(SysMessageContainer);