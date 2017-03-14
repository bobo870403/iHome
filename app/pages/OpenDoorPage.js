'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,

} from 'react-native';
import {
	Container,
	Content,
	ListItem,
	Left,
	Body,
	Right,
	Text,
	Icon,
	Thumbnail,
	Separator,
	H1,
	H3,
	Button,
	Switch,
	List
} from 'native-base';

import Picker from 'react-native-picker';
import common from '../common/common'
import PxToDp from '../util/PxToDp'

import {
	Actions
} from 'react-native-redux-router';
let timeArr = [
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
]
class OpenDoorPage extends Component {
	_showDatePicker() {
		Picker.init({
			pickerData: timeArr,
			pickerToolBarFontSize: 16,
			pickerFontSize: 20,
			pickerFontColor: [0, 0, 0, 1],
			pickerTitleText: '请选择有限时间',
			pickerConfirmBtnText: '确认',
			pickerCancelBtnText: '取消',
			pickerBg: [255, 255, 255, 1],
			onPickerConfirm: (pickedValue, pickedIndex) => {
				console.log('date', pickedValue, pickedIndex);
			},
			onPickerCancel: (pickedValue, pickedIndex) => {
				console.log('date', pickedValue, pickedIndex);
			},
			onPickerSelect: (pickedValue, pickedIndex) => {
				console.log('date', pickedValue, pickedIndex);
			}
		});
		Picker.show();
	}
	render() {
		return (
			<Container style={styles.container}>
				<Content>
					<ListItem last button onPress={()=>Actions.changeDoor()}>
                        <Text style={styles.fontColor}>中山五路桂香街社区 18栋7单元101号</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem last button onPress={()=>{this._showDatePicker()}}>           	
                    	<Text style={styles.fontColor}>密码有限期到：</Text>
                    	<Text style={{fontSize:16,color:'#2ca000'}}>2017年2月8日 14:15:51</Text>                   	
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem last>
                        <Text style={styles.fontColor}>允许多次使用密码</Text>
                        <Right>
                            <Switch valur={false} />
                        </Right>
                    </ListItem>
                    <View style={styles.passwordContainer}>
                    	<Text>
                    		开门密码
                    	</Text>
           				<View style={styles.passwordContent}>
           					<View style={styles.passwordLine}>
           					    <Text>
                    		
                    			</Text>
           					</View>
           					<View style={styles.passwordLine}>
           					    <Text>
                    		
                    			</Text>
           					</View>
           					<View style={styles.passwordLine}>
           					    <Text>
                    		
                    			</Text>
           					</View>
           					<View style={styles.passwordLine}>
           					    <Text>
                    		
                    			</Text>
           					</View>
           					<View style={styles.passwordLine}>
           					    <Text>
                    		
                    			</Text>
           					</View>
           					<View style={styles.passwordLine}>
           					    <Text>
                    		
                    			</Text>
           					</View>
           				</View>
           				<View style={{flexDirection:'row',marginTop:45,alignItems:'center'}}>
           					<Icon name='md-alert' style={{color:'#bfbfbf',fontSize:20}}/>
           					<Text style={{color:'#bfbfbf',fontSize:14}}>
                    			点右上角可将密码分享给他人
                    		</Text>
           				</View>
                    	
                    </View>
                    <View style={styles.sumbitbit}>
                    	<Button block success >
	                        <Text>申请开门密码</Text>
	                    </Button>
                    </View>

				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f2f2f2'
	},
	passwordContainer: {
		alignItems: 'center',
		marginTop: 15,
	},
	passwordContent: {
		flexDirection: 'row',

	},
	passwordLine: {
		width: PxToDp(80),
		height: PxToDp(100),
		marginLeft: 4,
		borderBottomColor: '#36b013',
		borderBottomWidth: 3,
	},
	sumbitbit: {
		marginLeft: 15,
		marginRight: 15,
		marginTop: 30,
	},
	fontColor: {
		color: 'rgba(0,0,0,0.6)'
	}
});


export default OpenDoorPage;