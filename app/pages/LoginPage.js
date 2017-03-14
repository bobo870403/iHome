'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Image,
	InteractionManager
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
import Validator from 'mod-validator';
import Toast from 'react-native-root-toast';
import * as LoginAction from '../actions/LoginAction.js';
import Loading from '../common/Loading'
let inputInfo = {
	iphone: "",
	pw: ""
}
let rules = {
	iphone: 'required|phone',
	pw: 'required|password',
}
let isLogining = true;
class LoginPage extends Component {
	login() {
		let v = Validator.make(inputInfo, rules);
		if (v.fails()) {
			if (v.messages().iphone) {
				Toast.show(v.messages().iphone)
			} else {
				Toast.show(v.messages().pw)
			}
		}
		if (v.passes()) {
			// 如果全部通过验证
			InteractionManager.runAfterInteractions(() => {
					const {
						dispatch
					} = this.props
					dispatch(LoginAction.login(inputInfo, isLogining));
				})
				// Actions.firstChangePW()
		}
	}
	componentWillReceiveProps(nextProps) {

	}
	shouldComponentUpdate(nextProps) {
		const {
			Login
		} = this.props;
		if (Login.receiveSucceed) {
			console.log(this.props.Login.datas);
			console.log('-----------');
			console.log(Login.datas);
			if (Login.datas.success) {
				Actions.firstChangePW();
			} else {
				Toast.show(Login.datas.message);
			}

		}
		if (Login.loginFail) {
			Toast.show('网络异常！');
		}
		return true;
	}
	render() {
		const {
			Login
		} = this.props;

		return (
			<Container style={{flex:1,backgroundColor:'#fff'}}>		
				<Content padder={true}>
					<View style={styles.header}>
						<Text style={{fontSize:34,color:'#1aad19',marginTop:4}}>
							一码在手 开门不愁
						</Text>
						<Text style={{fontSize:14,color:'#ccc',marginTop:4}}>
							-浙江大华楼宇综合管理平台提供技术支持-
						</Text>
						<Image style={styles.image} source={require('../assets/icon_login.png')}/>				
					</View>
					<View style={{marginTop:10}}>
			            <Madoka
						    label={'输入手机号'}
						    // this is used as active and passive border color
						    borderColor={'#aee2c9'}
						    labelStyle={{ color: '#008445' }}
						    inputStyle={{ color: '#000' }}
						    keyboardType={'numeric'}
						    maxLength={11}
						    onChangeText={(text)=>{inputInfo.iphone=text}}
						  />
			            <Madoka
						    label={'输入密码'}
						    // this is used as active and passive border color
						    borderColor={'#aee2c9'}
						    labelStyle={{ color: '#008445' }}
						    inputStyle={{ color: '#000' }}
						    secureTextEntry={true}
						    maxLength={16}
						    onChangeText={(text)=>{inputInfo.pw=text}}
						  />
			        </View>
			        <Button block success onPress={this.login.bind(this)}>
                        <Text>登录</Text>
                    </Button>
                    <Right>
                    	<Button transparent success onPress={()=>{Toast.show('请到物业管理处重置密码！')}}>
		                    <Text>忘记密码请点击此处找回</Text>
		                </Button>
	                </Right>
	                {(Login.isLogining)?<Loading/>:<View/>}
                    </Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		marginTop: 30,
		flex: 1,
	},
	image: {
		marginTop: 4,
		width: PxToDp(298),
		height: PxToDp(253),
	},
	card2: {
		padding: 16,
		width: common.window.width,
	},
	input: {
		marginTop: 4,
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


export default LoginPage;