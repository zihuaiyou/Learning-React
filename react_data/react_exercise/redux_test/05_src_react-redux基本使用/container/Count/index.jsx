//这是包裹UI组件的容器组件

//引入UI组件
import CountUI from "../../components/Count";

//引入connect用于连接UI组件与容器组件
import { connect } from "react-redux";

//导入action对象
import {
  incrementAction,
  decrementAction,
  incrementAsyncAction,
} from "../../redux/count_action";

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
  (state) => ({ count: state }), //箭头函数返回一个对象要用括号包起来;
  {
    jia: incrementAction,
    jian: decrementAction,
    asyncjia: incrementAsyncAction,
  }
)(CountUI);
