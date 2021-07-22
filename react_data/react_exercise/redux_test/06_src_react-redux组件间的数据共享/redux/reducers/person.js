import {ADDPERSON} from '../constant';

const initState = [{id :'001'}];
export default function PersonReducer(preState = initState,action){
    const {type,data} = action;
    switch (type) {
        case ADDPERSON:
            //preState.unshift(data);此处不可以这样写，这样改变了函数参数preState,使得reducer不再是一个纯函数；
            //redux中会进行浅比较，只会比较对象的地址；对象地址不变不会引起页面的更新；
            return [data,...preState];
        default:
            return preState;
    }
}