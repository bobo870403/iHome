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

import CheckNotification from '../pages/CheckNotificationPage'

class CheckNotificationContainer extends Component {
	render() {
		return (
			<CheckNotification {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		CheckNotification
	} = state;
	return {
		CheckNotification
	}
})(CheckNotificationContainer);