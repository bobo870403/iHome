'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Footer,
	FooterTab,
	Button,
	Left,
	Right,
	Body,
	Icon,
	Grid,
	Row,
	Col,
	Text,
} from 'native-base';
import Swiper from 'react-native-swiper'
import {
	Actions
} from 'react-native-redux-router';
import common from '../common/common'
import PxToDp from '../util/PxToDp'
class HomePage extends Component {
	render() {
		return (
			<Container style={{flex:1}}>
				<Content style={{flex:1}}>
					<Swiper
						style={styles.swiperContent}
						showsButtons={false} 
						height={PxToDp(292)}>
					       	<Image style={styles.bannerImg} source={require('../assets/test_ad.png')}/>
					</Swiper>
					<View style={{flex:1}}>
						<View style={styles.rowContent}>
							<TouchableOpacity style={styles.btn} onPress={()=>Actions.openDoor()}>
								<Image style={styles.Img} source={require('../assets/icon_open_door.png')}/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.btn}>
								<Image style={styles.Img} source={require('../assets/icon_society.png')}/>
							</TouchableOpacity>
						</View>
						<View style={styles.rowContent}>
							<TouchableOpacity style={styles.btn}>
								<Image style={styles.Img} source={require('../assets/icon_push.png')}/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.btn} onPress={()=>Actions.settings()}>
								<Image style={styles.Img} source={require('../assets/icon_setting.png')}/>
							</TouchableOpacity>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
	},
	swiperContent: {
		backgroundColor: '#c3ffe0',
	},
	bannerImg: {
		marginTop: PxToDp(40),
		width: common.window.width,
		height: PxToDp(252),

	},
	rowContent: {
		flexDirection: 'row',
		height: PxToDp(520)
	},
	btn: {
		flex: 1,
		borderColor: '#eee',
		borderWidth: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	Img: {
		width: PxToDp(298),
		height: PxToDp(322),

	}
});

export default HomePage;