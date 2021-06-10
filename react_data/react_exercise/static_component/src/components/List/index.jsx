import React, { Component } from "react";
import Item from "./Item";
import "./index.css";

export default class List extends Component {
  render() {
    const { Todos, handleChecked,deleteTodo } = this.props;
    return (
      <div>
        <ul className="Todo-list">
          {Todos.map((todoobj) => {
            return (
              <Item
                key={todoobj.id}
                {...todoobj}
                handleChecked={handleChecked}
                deleteTodo = {deleteTodo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
