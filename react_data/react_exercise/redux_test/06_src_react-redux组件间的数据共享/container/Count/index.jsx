/* 
  该文件含有UI组件和容器组件
*/
import React, { Component } from "react";

//引入常量
import {
  INCREMENT,
  DECREMENT,
  ODDINCREMENT,
  ASYNCINCREMENT,
} from "../../redux/constant";

//引入connect用于生成容器组件并连接UI组件
import { connect } from "react-redux";

//导入action对象
import {
  incrementAction,
  decrementAction,
  incrementAsyncAction,
} from "../../redux/actions/count";

//这是UI组件
//UI组件不能含有redux的API
class Count extends Component {
 
  calculate = (type) => {
    const { value } = this.selected;
    if (type === INCREMENT) {
      this.props.jia(value);
    } else if (type === DECREMENT) {
      this.props.jian(value);
    } else if (type === ODDINCREMENT) {
      if (this.props.count % 2 !== 0) {
        this.props.jia(value);
      }
    } else if (type === ASYNCINCREMENT) {
      this.props.asyncjia(value);
    }
  };
  render() {
    return (   
      <div>
        <h2>这是Count组件 下方组件人数为{this.props.personLen}</h2>
        <h4>当前求和为{this.props.count}</h4>
        <select ref={(currentNode) => (this.selected = currentNode)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        &nbsp;
        <button onClick={() => this.calculate("increment")}>+</button>&nbsp;
        <button onClick={() => this.calculate("decrement")}>-</button>&nbsp;
        <button onClick={() => this.calculate("oddIncrement")}>
          当结果为奇数时加
        </button>
        &nbsp;
        <button onClick={() => this.calculate("asyncIncrement")}>异步加</button>
        &nbsp;
      </div>
    );
  }
}


//容器组件
//简写形式 {向UI组件传递的函数：action对象}
export default connect(
  //映射状态
  (state) => ({ count: state.countResult,personLen:state.personInfo.length-1}), //箭头函数返回一个对象要用括号包起来;
  //映射操作状态的方法
  {
    jia: incrementAction,
    jian: decrementAction,
    asyncjia: incrementAsyncAction,
  }
)(Count);
