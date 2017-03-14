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
	Button
} from 'native-base';
import {
	Actions
} from 'react-native-redux-router';

import common from '../common/common'
import PxToDp from '../util/PxToDp'
class SettingPage extends Component {
	render() {
		return (
			<Container>
                <Content>
                	<ListItem last>
                        <Left style={{flex:0.5}}>
                            <Thumbnail large source={require('../assets/man.png')} />
                        </Left>
                        <Body style={{flex:1}}>
                        	<Text>业主姓名：张无忌（先生）</Text>
                            <Text note>手机号码：13888888888</Text> 
                        </Body>
                    </ListItem>
                     <Separator bordered style={{height:20}}>
                   
                    </Separator>
                    <ListItem icon last button onPress={Actions.myCommunity}>
                        <Left>
                            <Image 
                            	style={styles.thumbnailImg}
                            	source={require('../assets/icon_my_society.png')}/>
                        </Left>
                        <Body>
                          <Text>我的社区</Text>
                        </Body>
                        <Right>
                           <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                   <Separator bordered style={{height:20}}>
                    </Separator>
                    <ListItem icon first button onPress={Actions.editPassword}>
                        <Left>
                            <Image 
                            	style={styles.thumbnailImg}
                            	source={require('../assets/icon-edit-password.png')}/>
                        </Left>
                        <Body>
                          <Text>修改登录密码</Text>
                        </Body>
                        <Right>
                           <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon last onPress={Actions.checkNotification}>
                        <Left>
                            <Image 
                            	style={styles.thumbnailImg}
                            	source={require('../assets/icon-look-message.png')}/>
                        </Left>
                        <Body>
                          <Text>查看通知</Text>
                        </Body>
                        <Right>
                           <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <Separator bordered style={{height:20}}>
                    </Separator>
                    <ListItem icon first >
                        <Left>
                            <Image 
                            	style={styles.thumbnailImg}
                            	source={require('../assets/icon-good-evaluate.png')}/>
                        </Left>
                        <Body>
                          <Text>给个好评</Text>
                        </Body>
                        <Right>
                           <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon last onPress={Actions.aboutUs}>
                        <Left>
                            <Image 
                            	style={styles.thumbnailImg}
                            	source={require('../assets/icon-about-us.png')}/>
                        </Left>
                        <Body>
                          <Text>关于我们</Text>
                        </Body>
                        <Right>
                           <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                      <Button block success style={{marginTop:20,marginLeft:15,marginRight:15}}>
                        	<Text>退出登录</Text>
                      </Button>
                </Content>
            </Container>
		);
	}
}

const styles = StyleSheet.create({
	listItem: {
		backgroundColor: 'red'
	},
	thumbnailImg: {
		width: PxToDp(58),
		height: PxToDp(58),
	}
});

export default SettingPage;