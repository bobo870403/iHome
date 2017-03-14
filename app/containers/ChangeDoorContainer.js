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

import ChangeDoor from '../pages/ChangeDoorPage'
class ChangeDoorContainer extends Component {
	render() {
		return (
			<ChangeDoor {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		ChangeDoor
	} = state;
	return {
		ChangeDoor
	}
})(ChangeDoorContainer);