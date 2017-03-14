'use strict';

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';
var {
    Router,
    routerReducer,
    Route,
    Container,
    Animations,
    Schema
} = require('react-native-redux-router');
var {
    NavBar,
    NavBarModal
} = require('../components/NavBar');

import Login from './LoginContainers'
import ChangePassword from './ChangePasswordContainer'
import ChangePwSucc from './ChangePwSuccContainer'
import Home from './HomeContainer'
import Settings from './SettingsContainer'
import OpenDoor from './OpenDoorContainer'
import ChangeDoor from './ChangeDoorContainer'
import SysMessage from './SysMessageContainer'
import CommunityMessage from './CommunityMessageContainer'
import MyCommunity from './MyCommunityContainer'
import EditPassword from './EditPasswordContainer'
import CheckNotification from './CheckNotificationContainer'
import AboutUs from './AboutUsContainer'
class app extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'#F5FCFF'}}/>
                <Router>
                    <Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal}/>
                    <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar}/>
                    <Schema name="withoutAnimation" navBar={NavBar}/>
                    <Schema name="tab" navBar={NavBar}/>

                    <Route name="login" component={Login} initial={true} hideNavBar={true} title="login"/>
                    <Route name="firstChangePW" component={ChangePassword} hideNavBar={true} title="changePassword"/>
                    <Route name="changePwSucc" component={ChangePwSucc} hideNavBar={true} title="changePwSucc"/>
                    <Route name="home" component={Home} hideNavBar={true} title="home"/>
                    <Route name="settings" component={Settings} title="个人设置" />
                    <Route name="openDoor" component={OpenDoor} title="我要开门" />
                    <Route name="changeDoor" component={ChangeDoor} title="选择开启大门" />

                    <Route name="sysMessage" component={SysMessage} title="系统信息" />
                    <Route name="communityMessage" component={CommunityMessage} title="社区信息" />

                    <Route name="myCommunity" component={MyCommunity} title="我的社区" />
                    <Route name="editPassword" component={EditPassword} title="修改密码" />
                    <Route name="checkNotification" component={CheckNotification} title="查看通知" />
                    <Route name="aboutUs" component={AboutUs} title="关于我们" />
                </Router>
            </View>
        );
    }
}

export default app;