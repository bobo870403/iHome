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
import Settings from '../pages/SettingPage'
class SettingsContainer extends Component {
	render() {
		return (
			<Settings {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		Settings
	} = state;
	return {
		Settings
	}
})(SettingsContainer);