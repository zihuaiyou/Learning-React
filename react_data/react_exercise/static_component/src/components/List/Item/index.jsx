import React, { Component } from 'react'
import "./index.css"

export default class Item extends Component {
    render() {
        return (
            <div>
                <li>
                    <label>
                        <input type="checkbox"/>
                        <span>睡觉</span>
                        <button className="btn btn-danger">删除</button>
                    </label>
                </li>
            </div>
        )
    }
}
