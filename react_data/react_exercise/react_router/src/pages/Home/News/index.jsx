import React, { Component } from "react";

class News extends Component {
  //挂载后两秒跳转到Message
  // componentDidMount() {
  //   setTimeout(() => this.props.history.push("/home/message"), 2000);
  // }

  render() {
    return (
      <div>
        <ul>
          <li>news001</li>
          <li>news002</li>
          <li>news003</li>
        </ul>
      </div>
    );
  }
}

export default News;
