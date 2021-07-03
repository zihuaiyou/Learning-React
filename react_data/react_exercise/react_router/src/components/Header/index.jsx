import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Header extends Component {
  forWard = () => {
    this.props.history.goForward();
  };
  back = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <h2>React Router Demo</h2>
        </div>
        <button onClick={() => this.forWard()}>前进</button>&nbsp;
        <button onClick={() => this.back()}>后退</button>&nbsp;
      </div>
    );
  }
}
//withRouter 给一般组件增加路由组件的API(History对象)
export default withRouter(Header);
