import {createStore} from 'redux';
//引入为count组件服务的reducer
import countReducer from './count_reducer';
//创建store对象;
export default createStore(countReducer);

