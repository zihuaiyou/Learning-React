import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import Message from "./Messagge";
import News from "./News";

export default class Home extends Component {
  render() {
    return (
    <div>
        <h3>我是home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
        </div>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
        
    );
  }
}
