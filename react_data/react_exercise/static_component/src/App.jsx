import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import "./App.css"

export default class App extends Component {
    render() {
        return (
            <div className="Todo-Container">
                <div className="Todo-Wraper">
                    <Header/>
                    <List/>
                    <Footer/>
                </div>
            </div>
        ) 
    }
}
