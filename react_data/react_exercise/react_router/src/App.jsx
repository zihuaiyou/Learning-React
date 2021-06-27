import React, { Component } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route,Switch,Redirect} from "react-router-dom";
import MyNavLink from "./components/MyNavLink";
// import Test from "./components/Test";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中靠<a/>跳转不同页面 */}
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}

              {/* 在React中靠路由链接实现切换页面 */}
              {/* 编写路由链接 */}
              {/* NavLink可以实现导航链接的高亮,activeClassName指定样式名 如不写,默认样式名为active*/}
              {/* <NavLink activeClassName="linkColor" className="list-group-item" to="/a">About</NavLink> */}
              {/* <NavLink activeClassName="linkColor" className="list-group-item" to="/b">Home</NavLink> */}

              {/* 为了实现NavLink的复用,自定义一个组件实现对NavLink的封装 */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
              {/* <MyNavLink to="/b">Home</MyNavLink> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由Route */}
                {/* Switch组建的使用 路由匹配路径时只匹配第一个符合要求的,效率高 */}
                <Switch>
                  {/* 多级目录可能会出现样式丢失问题 */}
                  {/* 模糊匹配  to跳转的路径必须含有注册的路径,并且顺序一致*/}
                  {/* 严格匹配exact  to/和path必须严格一致*/}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  {/* <Route exact path="/b" component={Test} /> */}
                  {/* redirect 兜底作用 当所有路由没有匹配到,跳转到该路由 */}
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
