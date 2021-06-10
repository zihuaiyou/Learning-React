import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  //状态驱动页面的显示
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    errorMsg: "",
  };
  updateState = (stateObj) => {
    this.setState(stateObj);
  };
  render() {
    return (
      <div>
        <div className="container">
          <Search updateState={this.updateState} />
          <List {...this.state} />
        </div>
      </div>
    );
  }
}
