import React, { Component } from 'react'
import "./index.css"

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="Todo-footer">
                        <label>
                            <input type="checkbox"/>
                            <span>已完成/全部</span>
                        </label>
                        <button className="btn btn-danger">清除已完成任务</button>
                </div>
            </div>
        )
    }
}
