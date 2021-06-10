import React, { Component } from "react";
import "./index.css";
import { nanoid } from "nanoid";

export default class Header extends Component {
  handleKeyUp = (event) => {
    // 回车键的keycode 为13
    if (event.keyCode !== 13) return;
    const { value: name } = event.target;
    // 引入nanoid库随机生成id值
    const TodoObj = { id: nanoid(), name, done: false };
    // 调用父组件传来的函数,并传入参数,由此实现对父组件传参
    this.props.addTodo(TodoObj);
    event.target.value = ""
  };
  render() {
    return (
      <div>
        <div className="Todo-header">
          <input
            type="text"
            placeholder="请输入你的任务名称，按回车键确认"
            className="header"
            onKeyUp={this.handleKeyUp}
          />
        </div>
      </div>
    );
  }
}
