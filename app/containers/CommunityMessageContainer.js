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

import CommunityMessage from '../pages/CommunityMessagePage'

class CommunityMessageContainer extends Component {
	render() {
		return (
			<CommunityMessage />
		);
	}
}

export default connect((state) => {
	const {
		CommunityMessage
	} = state;
	return {
		CommunityMessage
	}
})(CommunityMessageContainer);