'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';
import common from '../common/common'
import PxToDp from '../util/PxToDp'
import TimerMixin from 'react-timer-mixin'

import {
	Actions
} from 'react-native-redux-router';
class ChangePwSuccPage extends Component {
	componentDidMount() {
		this.timer = setTimeout(
			() => {
				Actions.home();
			},
			1000
		);
	}
	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}
	render() {
		return (
			<View style={styles.header}>
				<Image style={styles.image} source={require('../assets/img_modify_success.png')}/>				
			</View>
		);
	}
}
const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: -130,
		flex: 1,
	},
	image: {
		marginTop: 100,
		width: PxToDp(305),
		height: PxToDp(524),
	},
});


export default ChangePwSuccPage;