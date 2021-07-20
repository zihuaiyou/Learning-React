import ReactDOM from "react-dom";
import App from "./App.jsx";
import store from "./redux/store.js";
import {Provider} from "react-redux";

//使用react-redux后，无需在入口文件监测状态的改变
//使用react-redux后，可以使用Provider组件统一传递store,而用挨个给容器组件传递store
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//简易写法,redux状态发生改变即完成渲染页面,
// store.subscribe(() => ReactDOM.render(<App />, document.getElementById('root')))
