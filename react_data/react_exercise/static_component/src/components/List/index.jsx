import React, { Component } from 'react'
import Item from './Item'
// import "./index.css"

export default class List extends Component {
    render() {
        return (
            <div>
                <ul className="Todo-list">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                </ul>
            </div>
        )
    }
}
