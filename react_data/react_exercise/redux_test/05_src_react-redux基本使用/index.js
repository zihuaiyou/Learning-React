import ReactDOM from 'react-dom';
import App from './App.jsx';
// import store from './redux/store.js'

ReactDOM.render(<App />, document.getElementById('root'));

//使用react-redux后，无需在入口文件监测状态的改变
//简易写法,redux状态发生改变即完成渲染页面,
// store.subscribe(() => ReactDOM.render(<App />, document.getElementById('root')))
