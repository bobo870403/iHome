'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	TouchableHighlight,
	TouchableOpacity,
	Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SortableListView from 'react-native-sortable-listview';

import PxToDp from '../util/PxToDp'

let data = {
	hello: {
		text: '中山五路桂香街社区18栋7单元101号'
	},
	how: {
		text: '白马尊邸社区 6栋1单元506号'
	},
	test: {
		text: '广宇、西城年华社区 11栋2单元801号'
	},
	this: {
		text: '香樟公寓社区 15栋1单元101号'
	},


}
let order = Object.keys(data); //Array of keys
class MyCommunityPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.tip}>
					<Icon style={styles.tipIcon} name='md-information-circle'/>
					<Text style={styles.tipText}>申请临时密码，默认显示下面第一个大门名称</Text>
				</View>
				<SortableListView
				  alwaysBounceVertical={false}
		          style={{flex: 1}}
		          data={data}
		          order={order}
		          onRowMoved={e => {
		            order.splice(e.to, 0, order.splice(e.from, 1)[0]);
		            this.forceUpdate();
		          }}
		          renderRow={row => <RowComponent data={row}/>}
		        />

			</View>
		);
	}
}
let RowComponent = React.createClass({
	render: function() {
		return (
			<TouchableOpacity
		        underlayColor={'#eee'}
		        delayLongPress={500} 
		        style={{height:50,backgroundColor: "#fff", borderBottomWidth:1, borderColor: '#eee',flexDirection:'row',alignItems: 'center',paddingLeft:10}} 
		        {...this.props.sortHandlers}>
		        <Text>{this.props.data.text}</Text>
		        <Icon style={{position:'absolute',right:15,fontSize:24,color:'#999'}} name="ios-menu"/>
		    </TouchableOpacity>
		);
	}
})
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
	},
	tip: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
	},
	tipIcon: {
		fontSize: 20,
		color: '#999',
		marginLeft: 15,
	},
	tipText: {
		fontSize: PxToDp(30),
		color: '#999',
		marginLeft: 5,
	}
});


export default MyCommunityPage;