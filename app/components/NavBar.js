'use strict';

import NavigationBar from 'react-native-navbar';
import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
var {
  Router,
  Route,
  Animations,
  Schema
} = require('react-native-redux-router');

import Icon from 'react-native-vector-icons/Ionicons';

class NavBarBase extends React.Component {
  onPrev() {
    var Actions = this.props.routes;
    if (this.props.onPrev) {
      this.props.onPrev();
      return;
    }
    if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
      Actions.pop();
    }
  }
  render() {
    var Actions = this.props.routes;
    console.log("Props : " + this.props);
    return <NavigationBar style={styles.navBar}
                             titleColor='white'
                             buttonsColor='white'
                             statusBar= {{style:'default', hidden: false,tintColor:'#1aad19'}}
                             title= {{title:this.props.title,tintColor:'#fff'}}
                             prevTitle={this.props.initial ? " " : null}
                             leftButton = {this.props.leftButton ? this.props.leftButton : {title:''}}
                             rightButton = {this.props.rightButton ? this.props.rightButton : {title:''}}

           />
  }
}
class NavBar extends React.Component {
  render() {
    var Actions = this.props.routes;
    // return (<View><NavBarBase customNext={<View/>} {...this.props} leftButton={{title:'返回', handler:this.props.onPrev || Actions.pop},<Text>3333</Text>}/></View>)
    return (<View><NavBarBase customNext={<View/>} {...this.props} leftButton={<TouchableOpacity onPress={this.props.onPrev || Actions.pop} style={styles.leftBtn}><Icon color='#900' name='ios-arrow-back' style={styles.leftBtnIcon}/><Text style={styles.leftBtnText}>返回</Text></TouchableOpacity>}/></View>)

  }
}


class NavBarModal extends React.Component {
  render() {
    var Actions = this.props.routes;
    return <NavBarBase customPrev={<View/>} nextTitle="Close" {...this.props} rightButton={{title:'Close', handler:this.props.onNext || Actions.pop}}/>
  }
}

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#1aad19'
  },
  leftBtn: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  leftBtnText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
  },
  leftBtnIcon: {
    color: '#fff',
    fontSize: 26,
    marginLeft: 10
  }
});
module.exports = {
  NavBar,
  NavBarModal
};