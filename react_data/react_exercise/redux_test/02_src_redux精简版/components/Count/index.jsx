import React, { Component } from "react";
import store from "../../redux/store.js";

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
    const count  = store.getState();
    if (type === "increment" || type === "decrement") {
      store.dispatch({ type, data: value });
    } else if (type === "oddIncrement") {
      if (count % 2 !== 0) {
        store.dispatch({ type: "increment", data: value });
      }
    } else if (type === "asyncIncrement") {
      return setTimeout(() => {
        store.dispatch({ type: "increment", data: value });
      }, 1000);
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
