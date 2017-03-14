/**
 * Created by BOBO on 16/5/25.
 * 根reducer
 */
import {
	combineReducers
} from 'redux';
import Login from './loginReducer';
var {
	Router,
	routerReducer,
	Route,
	Container,
	Animations,
	Schema
} = require('react-native-redux-router');


export default rootReducer = combineReducers({
	routerReducer,
	Login,
})