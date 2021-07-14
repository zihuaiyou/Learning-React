import React, { Component } from "react";

class Count extends Component {
  state = {
    count: 0,
  };
  calculate = (type) => {
    const { value } = this.selected;
    const { count } = this.state;
    if (type === "increment") {
      this.setState({ count: count + value * 1 });
    } else if (type === "decrement") {
      this.setState({ count: count - value * 1 });
    } else if (type === "oddIncrement") {
      if (count % 2 !== 0) {
        this.setState({ count: count + value * 1 });
      }
    } else if (type === "asyncIncrement") {
      return setTimeout(() => {
        this.setState({ count: count + value * 1 });
      }, 1000);
    }
  };
  render() {
    return (
      <div>
        <h2>当前求和为{this.state.count}</h2>
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
