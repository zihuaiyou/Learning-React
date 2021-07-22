//引入中间件applyMiddleware
import {createStore,applyMiddleware,combineReducers} from 'redux';

//引入为count组件服务的reducer
import countReducer from './reducers/count';
import PersonReducer from './reducers/person';

//引入thunk
import thunk from "redux-thunk";

//引入composeWithDevTools,为了使用redux开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'

//合并reducer
const allreducer = combineReducers({countResult:countReducer,personInfo:PersonReducer})

//创建store对象;
export default createStore(allreducer,composeWithDevTools(applyMiddleware(thunk)));

