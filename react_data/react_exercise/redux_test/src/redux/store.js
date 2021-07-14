//引入中间件applyMiddleware
import {createStore,applyMiddleware} from 'redux';

//引入为count组件服务的reducer
import countReducer from './count_reducer';
import thunk from "redux-thunk";
//创建store对象;
export default createStore(countReducer,applyMiddleware(thunk));

