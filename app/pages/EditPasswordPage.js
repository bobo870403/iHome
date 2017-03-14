'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Image,
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
	H1,
	H2,
	H3,
	Text,
} from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
	Sae,
	Madoka
} from 'react-native-textinput-effects';
import {
	Actions
} from 'react-native-redux-router';
import common from '../common/common'
import PxToDp from '../util/PxToDp'
class EditPasswordPage extends Component {
	render() {
		return (
			<Container style={{flex:1,backgroundColor:'#ffffff'}}>
				<Content padder={true}>
					<View style={styles.header}>
						<Text style={{fontSize:34,color:'#1aad19',marginTop:4}}>
							修改密码
						</Text>
						<Image style={styles.image} source={require('../assets/icon_password.png')}/>				
					</View>
					<View style={{marginTop:10}}>
			            <Madoka
						    label={'原密码'}
						    // this is used as active and passive border color
						    borderColor={'#aee2c9'}
						    labelStyle={{ color: '#008445' }}
						    inputStyle={{ color: '#f4a197' }}
						  />
			            <Madoka
						    label={'新密码'}
						    // this is used as active and passive border color
						    borderColor={'#aee2c9'}
						    labelStyle={{ color: '#008445' }}
						    inputStyle={{ color: '#f4a197' }}
						  />
						<Madoka
						    label={'确认新密码'}
						    // this is used as active and passive border color
						    borderColor={'#aee2c9'}
						    labelStyle={{ color: '#008445' }}
						    inputStyle={{ color: '#f4a197' }}
						  />
			        </View>
			        <Button block success onPress={()=>Actions.firstChangePW()}>
                        <Text>确认</Text>
                    </Button>
                    </Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		marginTop: 10,
		flex: 1,
	},
	image: {
		marginTop: 4,
		width: PxToDp(298),
		height: PxToDp(247),
	},
	card2: {
		padding: 16,
		width: common.window.width,
	},
	input: {
		marginTop: 3,
	},
	title: {
		textAlign: 'center',
		paddingBottom: 16,
		color: '#404d5b',
		fontSize: 20,
		fontWeight: 'bold',
		opacity: 0.8,
	},
});


export default EditPasswordPage;