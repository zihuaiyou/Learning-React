import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };

  //push跳转，携带params参数 
  pushShowParams = (id,title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`)
  }
  //replace跳转，携带params参数 
  replaceShowParams = (id,title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }


  //push跳转，携带search参数 
  pushShowSearch = (id,title) => {
    this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
  }
  //replace跳转，携带search参数 
  replaceShowSearch = (id,title) => {
    this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
  }


  //push跳转，携带state参数 
  pushShowState = (id,title) => {
    this.props.history.push({pathname:"/home/message/detail/",state:{id,title}})
  }
  //replace跳转，携带state参数 
  replaceShowState = (id,title) => {
    this.props.history.replace({pathname:"/home/message/detail/",state:{id,title}})
  }


  //前进跳转
  forWard = () => {
    this.props.history.goForward()
  }

  //后退跳转
  back = () => {
    this.props.history.goBack()
  }

  //go跳转
  goPage = () => {
    this.props.history.go(2)
  }

  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((messageObj) => {
            return (
              <li key={messageObj.id}>
                {/* 向组件传递params参数 */}
                <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>
                  {messageObj.title}
                </Link>


                {/* 向组件传递search参数 */}
                {/* <Link
                  to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}
                >
                  {messageObj.title}
                </Link> */}

                
                {/* 向组件传递state参数 */}
                {/* push模式(默认):压栈形式，会留下历史痕迹 */}
                {/* replace模式：替代模式，不会留下历史痕迹 */}
                {/* <Link
                replace
                  to={{
                    pathname: "/home/message/detail/",
                    state: { id: messageObj.id, title: messageObj.title },
                  }}
                >
                  {messageObj.title}
                </Link> */}
                &nbsp;&nbsp;
                <button onClick = {()=>this.pushShowParams(messageObj.id,messageObj.title)}>push跳转</button>&nbsp;&nbsp;
                <button onClick = {()=>this.replaceShowParams(messageObj.id,messageObj.title)}>replace跳转</button>&nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr />

        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

        {/* 接收search参数无需声明 正常注册路由即可 */}
        {/* <Route path="/home/message/detail/" component={Detail} /> */}

		    {/* 接收state参数无需声明 正常注册路由即可 */}
        {/* <Route path="/home/message/detail/" component={Detail} /> */}

        <button onClick = {() => this.forWard()}>前进</button>
        <button onClick = {() =>this.back()}>后退</button>
        <button onClick = {() =>this.goPage()}>go跳转</button>
      </div>
    );
  }
}

export default Message;
