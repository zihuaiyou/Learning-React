import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import addPersonAction from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.name.value;
    const age = this.age.value;
    const personObj = { id: nanoid(), name, age };
    this.props.handleAddPerson(personObj);
  };
  render() {
    return (
      <div>
        <h2>这是Person组件,上方组件求和为{this.props.countRes}</h2>
        <input
          type="text"
          ref={(currentNode) => (this.name = currentNode)}
          placeholder="请输入姓名"
        />
        <input
          type="text"
          ref={(currentNode) => (this.age = currentNode)}
          placeholder="请输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.personsArr.map((personObj) => {
            return (personObj.id!=="001"?
              <li key = {personObj.id}>
                名字:{personObj.name}--年龄:{personObj.age}
              </li>:""
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ personsArr: state.personInfo,countRes:state.countResult}), {
  handleAddPerson: addPersonAction,
})(Person);
