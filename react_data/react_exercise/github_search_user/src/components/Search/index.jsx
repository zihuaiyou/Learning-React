import React, { Component } from "react";
// import axios from "axios";

export default class Search extends Component {
  search = async () => {
    const { keyword } = this;
    this.props.updateState({ isFirst: false, isLoading: true });

    // axios发送网络请求
    // axios
    //   .get(`https://api.github.com/search/users?q=${keyword.value}`)
    //   .then((response) => {
    //     this.props.updateState({
    //       users: response.data.items,
    //       isLoading: false,
    //     });
    //   })
    //   .catch((err) => {
    //     this.props.updateState({ errorMsg: err.message, isLoading: false });
    //   });

    //Fetch 发送网络请求
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${keyword.value}`
      );
      const data = await response.json();
      await this.props.updateState({
        users: data.items,
        isLoading: false,
      });
      console.log(data.items);
      
    } catch (error) {
      await this.props.updateState({ errorMsg: error.message, isLoading: false });
      console.log(error);
      
    }
  };
  enterSearch = (event) => {
    if (event.keyCode !== 13) return;
    else this.search();
  };
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              type="text"
              placeholder="enter the name you search"
              ref={(currentNode) => (this.keyword = currentNode)}
              onKeyUp={this.enterSearch}
            />
            &nbsp;<button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}
