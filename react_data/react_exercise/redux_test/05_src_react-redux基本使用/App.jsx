import React, { Component } from 'react';
import Count from './container/Count'
import store from './redux/store'

class App extends Component {
    render() {
        return (
            <div>
              <Count store = {store}/>  
            </div>
        );
    }
}

export default App;