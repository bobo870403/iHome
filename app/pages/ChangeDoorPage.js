'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,

} from 'react-native';
import {
	ListItem,
	Container,
	Content,
	Separator,
	Button,
	Text,
} from 'native-base';
class ChangeDoorPage extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Content>
					 <Separator bordered>
	                        <Text>申请临时密码，可开启如下大门</Text>
	                 </Separator>
					<ListItem first>
	                        <Text>Simon Mignolet</Text>
	                </ListItem>
	                <ListItem>
	                        <Text>Nathaniel Clyne</Text>
	                </ListItem>
	                <ListItem>
	                        <Text>Nathaniel Clyne</Text>
	                </ListItem>
	                <ListItem last>
	                        <Text>Dejan Lovren</Text>
	                </ListItem>

	                 <View style={styles.sumbitbit}>
                    	<Button block success >
	                        <Text>换个新账户登录</Text>
	                    </Button>
                    </View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
	},
	tipText: {
		fontSize: 18,
		color: '#999',
		margin: 15,
	},
	sumbitbit: {
		marginLeft: 10,
		marginRight: 10,
		marginTop: 30,
	}

});


export default ChangeDoorPage;