import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { users, isLoading, isFirst, errorMsg } = this.props;

    return ( 
      //标签内不能写语句,只能写表达式
      //判断不能写if-else,可以写三元表达式
      <div>
        <div className="row">
          {isFirst ? (
            <h2>欢迎使用</h2>
          ) : isLoading ? (
            <h3>Loading...</h3>
          ) : errorMsg ? (
            <h3>{errorMsg}</h3>
          ) : (
            users.map((userObj) => {
              return (
                <div className="card" key={userObj.id}>
                  <a href={userObj.html_url} target="_blank" rel="noreferrer">
                    <img
                      src={userObj.avatar_url}
                      style={{ width: "100px" }}
                      alt="pic"
                    />
                  </a>
                  <p className="card-text">{userObj.login}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}
