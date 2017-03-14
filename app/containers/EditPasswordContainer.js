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
import EditPassword from '../pages/EditPasswordPage'
class EditPasswordContainer extends Component {
	render() {
		return (
			<EditPassword {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		EditPassword
	} = state;
	return {
		EditPassword
	}
})(EditPasswordContainer);