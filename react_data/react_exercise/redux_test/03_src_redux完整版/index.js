import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './redux/store.js'

ReactDOM.render(<App />, document.getElementById('root'));
//简易写法,redux状态发生改变即完成渲染页面
store.subscribe(() => ReactDOM.render(<App />, document.getElementById('root')))
