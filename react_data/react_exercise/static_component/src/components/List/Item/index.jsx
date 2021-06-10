import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = {
    mouseIn: false,
  };
  getChecked = (id) => {
    //函数柯里化 为了获取id值
    return (event) => {
      this.props.handleChecked(id, event.target.checked);
    };
  };
  // 鼠标移入移出的回调
  handleMouse = (mouseIn) => {
    return () => {
      this.setState({ mouseIn });
    };
  };
  //向父组件传递Todo的id,删除Todo
  handledeleteTodo = (id) => {
    return () => {
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { id, name, done } = this.props;
    const { mouseIn } = this.state;
    return (
      <div className="item">
        <li
          style={{ backgroundColor: mouseIn ? "#ddd" : "#fff" }}
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
        >
          <label>
            <input
              type="checkbox"
              checked={done}
              onChange={this.getChecked(id)}
            />
            <span>{name}</span>
            <button
              className="btn btn-danger"
              style={{ display: mouseIn ? "block" : "none" }}
              onClick = {this.handledeleteTodo(id)}
            >
              删除
            </button>
          </label>
        </li>
      </div>
    );
  }
}
