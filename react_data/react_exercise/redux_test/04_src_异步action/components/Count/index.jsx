import React, { Component } from "react";
import store from "../../redux/store";
import { incrementAction, decrementAction,incrementAsyncAction} from "../../redux/count_action";
import {INCREMENT,DECREMENT,ODDINCREMENT,ASYNCINCREMENT} from '../../redux/constant'

class Count extends Component {
  // state = {
  //   count: 0,
  // };

  //组件完成挂载时,渲染页面
  //redux中状态改变时不会使页面重新渲染
  // componentDidMount(){
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }

  calculate = (type) => {
    const { value } = this.selected;
    const count = store.getState();
    if (type === INCREMENT) {
      store.dispatch(incrementAction(value));
    } else if (type === DECREMENT) {
      store.dispatch(decrementAction(value));
    } else if (type === ODDINCREMENT) {
      if (count % 2 !== 0) {
        store.dispatch(incrementAction(value));
      }
    } else if (type === ASYNCINCREMENT) {
      store.dispatch(incrementAsyncAction(value,1000));
    }
  };
  render() {
    return (
      <div>
        <h2>当前求和为{store.getState()}</h2>
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

export default Count;
