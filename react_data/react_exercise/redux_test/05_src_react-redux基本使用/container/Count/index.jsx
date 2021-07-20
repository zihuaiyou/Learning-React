/* 
  该文件含有UI组件和容器组件
*/
import React, { Component } from "react";

//引入常量
import {
  INCREMENT,
  DECREMENT,
  ODDINCREMENT,
  ASYNCINCREMENT,
} from "../../redux/constant";

//引入connect用于生成容器组件并连接UI组件
import { connect } from "react-redux";

//导入action对象
import {
  incrementAction,
  decrementAction,
  incrementAsyncAction,
} from "../../redux/count_action";

//这是UI组件
//UI组件不能含有redux的API
class Count extends Component {
  // state = {
  //   count: 0,
  // };

  //组件完成挂载时,渲染页面
  //redux中状态改变时不会使页面重新渲染
  // componentDidMount(){
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }

  calculate = (type) => {
    const { value } = this.selected;
    if (type === INCREMENT) {
      this.props.jia(value);
    } else if (type === DECREMENT) {
      this.props.jian(value);
    } else if (type === ODDINCREMENT) {
      if (this.props.count % 2 !== 0) {
        this.props.jia(value);
      }
    } else if (type === ASYNCINCREMENT) {
      this.props.asyncjia(value);
    }
  };
  render() {
    return (
      <div>
        <h2>当前求和为{this.props.count}</h2>
        <select ref={(currentNode) => (this.selected = currentNode)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        &nbsp;
        <button onClick={() => this.calculate("increment")}>+</button>&nbsp;
        <button onClick={() => this.calculate("decrement")}>-</button>&nbsp;
        <button onClick={() => this.calculate("oddIncrement")}>
          当结果为奇数时加
        </button>
        &nbsp;
        <button onClick={() => this.calculate("asyncIncrement")}>异步加</button>
        &nbsp;
      </div>
    );
  }
}


//容器组件
//将状态传递给子组件的props
/* function mapStateToProps(state) {
  return { count: state };
} */

//将操作状态的方法传递给子组件的props
/* function mapDispatchToProps(dispatch) {
  return {
    jia: (num) => dispatch(incrementAction(num)),
    jian: (num) => dispatch(decrementAction(num)),
    asyncjia: (num) => dispatch(incrementAsyncAction(num, 500)),
  };
} */

// export default connect(mapStateToProps, mapDispatchToProps)(CountUI);

//mapDispatchToProps也可以简写成一个对象
//简写形式 {向UI组件传递的函数：action对象}
export default connect(
  //映射状态
  (state) => ({ count: state }), //箭头函数返回一个对象要用括号包起来;
  //映射操作状态的方法
  {
    jia: incrementAction,
    jian: decrementAction,
    asyncjia: incrementAsyncAction,
  }
)(Count);
