import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  // 增加Todos
  addTodo = (TodoObj) => {
    const { Todos } = this.state;
    this.setState({ Todos: [TodoObj, ...Todos] });
  };
  //更新Todo
  handleChecked = (id, done) => {
    const { Todos } = this.state;
    const newTodos = Todos.map((item) => {
      if (item.id === id) return { ...item, done };
      else return item;
    });
    this.setState({ Todos: newTodos });
  };
  //删除Todo
  deleteTodo = (id) => {
    const { Todos } = this.state;
    if (window.confirm("确认要删除吗")) {
      const newTodo = Todos.filter((item) => {
        return item.id !== id;
      });
      this.setState({ Todos: newTodo });
    }
  };
  //全选or全不选
  handleSelectAll = (done) => {
      const { Todos } = this.state;
      const newTodos = Todos.map((item) => {
        return {...item,done}
      })
      this.setState({ Todos:newTodos });
    };
  // 删除所有
  handleDeleteAll =  () => {
    const { Todos } = this.state;
    const newTodos = Todos.filter((item) => {
      return !item.done
    })
    this.setState({Todos:newTodos});
  }
  state = {
    Todos: [
      { id: 1, name: "吃饭", done: false },
      { id: 2, name: "睡觉", done: true },
      { id: 3, name: "学习", done: false },
      { id: 4, name: "打豆豆", done: true },
    ],
  };
  render() { 
    return (
      <div className="Todo-Container">
        <div className="Todo-Wraper">
          <Header addTodo={this.addTodo} />
          <List
            Todos={this.state.Todos}
            handleChecked={this.handleChecked}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            Todos={this.state.Todos}
            handleSelectAll={this.handleSelectAll}
            handleDeleteAll = {this.handleDeleteAll}
          />
        </div>
      </div>
    );
  };
  };

