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

