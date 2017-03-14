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
import OpenDoor from '../pages/OpenDoorPage'
class OpenDoorContainer extends Component {
	render() {
		return (
			<OpenDoor {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		OpenDoor
	} = state;
	return {
		OpenDoor
	}
})(OpenDoorContainer);