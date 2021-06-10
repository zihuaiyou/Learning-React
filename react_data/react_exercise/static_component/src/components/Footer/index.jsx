import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
    selectAll = (event) => {
      const {checked} = event.target;
        this.props.handleSelectAll(checked);
    }
  render() {
      const { Todos } = this.props;
      const total = Todos.length;
      const totalDone = Todos.reduce((pre,cur) => {
        return pre + (cur.done?1:0)
      },0)
    return (
      <div>
        <div className="Todo-footer">
          <label>
            <input type="checkbox" onChange = {this.selectAll}
            checked = {(total === totalDone?true:false) && (total!==0)}/>
            <span>已完成{totalDone}/全部{total}</span>
          </label>
          <button className="btn btn-danger" onClick = {this.props.handleDeleteAll}>清除已完成任务</button>
        </div>
      </div>
    );
  }
}
