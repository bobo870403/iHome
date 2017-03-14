/**
 * Created by BOBO on 17/2/10.
 */
import {
	Dimensions
} from 'react-native';
let window = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height,
}
export default {
	hostip: 'http://121.41.117.138:8083/bis.manage/',
	getListUri: 'content/getList',
	window: window,
	//接口地址
	loginIn: 'appLogin' //用户登录
}