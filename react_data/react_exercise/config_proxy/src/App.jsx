import React, { Component } from 'react'
import axios from "axios"

export default class App extends Component {
    getStudentsInfo = () => {
        axios.get("http://localhost:3000/api1/students").then(
            response => console.log('请求成功,数据是',response.data),
            error => console.log('请求失败',error)
        )
    }
    getCarsInfo = () => {
        axios.get("http://localhost:3000/api2/cars").then(
            response => console.log('请求成功,数据是',response.data),
            error => console.log('请求失败',error)
        )
    }
    render() {
        return (
            <div>
                <button onClick = {this.getStudentsInfo}>获取student的数据</button>
                <button onClick = {this.getCarsInfo}>获取car的数据</button>
            </div>
        )
    }
}
