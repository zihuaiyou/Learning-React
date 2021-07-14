/* 
这个文件是为了给count组件创建action
*/
import {INCREMENT,DECREMENT} from './constant'
export function incrementAction(data){
    return {type:INCREMENT,data}
}
export function decrementAction(data){
    return {type:DECREMENT,data}
}