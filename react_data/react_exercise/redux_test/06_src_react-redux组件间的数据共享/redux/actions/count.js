/* 
这个文件是为了给count组件创建action
*/
import store from "../store";
import { INCREMENT, DECREMENT } from "../constant";

//同步Action：返回一个对象的action;
export function incrementAction(data) {
  return { type: INCREMENT, data };
}
export function decrementAction(data) {
  return { type: DECREMENT, data };
}

//异步Action：返回一个对象的action;(使得异步任务无需在组件中实现)
export function incrementAsyncAction(data, time = 1000) {
  return () => {
    setTimeout(() => {
      store.dispatch(incrementAction(data));
    }, time);
  };
}
