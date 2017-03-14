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

import MyCommunity from '../pages/MyCommunityPage'

class MyCommunityContainer extends Component {
	render() {
		return (
			<MyCommunity {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		MyCommunity
	} = state;
	return {
		MyCommunity
	}
})(MyCommunityContainer);