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
import AboutUs from '../pages/AboutUsPage'

class AboutUsContainer extends Component {
	render() {
		return (
			<AboutUs {...this.props}/>
		);
	}
}

export default connect((state) => {
	const {
		AboutUs
	} = state;
	return {
		AboutUs
	}
})(AboutUsContainer);