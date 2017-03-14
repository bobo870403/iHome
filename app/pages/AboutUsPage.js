'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Image,
	Text,
} from 'react-native';
import {
	Button,
	Toast,
} from 'native-base';
import common from '../common/common'
import PxToDp from '../util/PxToDp'
class AboutUsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showToast: false
		}
	}
	to
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.img} source={require('../assets/icon_app.png')}/>
				<Text style={styles.t0}>爱Home</Text>				
				<Text style={styles.t1}>iHome</Text>
				<Text style={styles.t2}>简单 纯粹 易用</Text>
				<Text style={styles.t3}>V 0.0.0</Text>
				<Button block success onPress={()=>{}}>
                        <Text style={{color:'#fff'}}>检查版本更新</Text>
                </Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		alignItems: 'center',
		paddingLeft: 15,
		paddingRight: 15,
	},
	img: {
		width: PxToDp(260),
		height: PxToDp(260),
		marginTop: 40,
	},
	t0: {
		marginTop: 10,
		fontSize: 30,
	},
	t1: {
		marginTop: 10,
		fontSize: 22,
	},
	t2: {
		marginTop: 10,
		fontSize: 16,
	},
	t3: {
		marginTop: 10,
		fontSize: 14,
		marginBottom: 15,
	}
});


export default AboutUsPage;