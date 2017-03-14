'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Image
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
class ChangePasswordPage extends Component {
	render() {
		return (
			<Container style={{flex:1}}>		
				<Content padder={true}>
					<View style={styles.header}>
						<Text style={{fontSize:34,color:'#1aad19',marginTop:4}}>
							首次登录
						</Text>
						<Text style={{fontSize:34,color:'#1aad19',marginTop:4}}>
							请修改密码
						</Text>
						<Image style={styles.image} source={require('../assets/icon_password.png')}/>				
					</View>
					<View style={{marginTop:20}}>
			            <Madoka
						    label={'输入新密码'}
						    // this is used as active and passive border color
						    borderColor={'#aee2c9'}
						    labelStyle={{ color: '#008445' }}
						    inputStyle={{ color: '#f4a197' }}
						  />
			        </View>
			        <Button block success 
			        	style={{marginTop:10}} 
			        	onPress={()=>Actions.changePwSucc()}>
                        <Text>确定</Text>
                    </Button>
                    <Button iconRight success transparent
                    	style={{marginTop:10,alignSelf:'flex-end'}}
                    	onPress={()=>Actions.home()}>
	                    <Text>跳过</Text>
	                    <Icon name='arrow-forward' />
	                </Button>
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
});


export default ChangePasswordPage;