import React, { Component } from "react";
// import qs from 'querystring'
const contentData = [
  {
    id: "01",
    data: "你好,中国",
  },
  {
    id: "02",
    data: "你好,世界",
  },
  {
    id: "03",
    data: "你好,未来的自己",
  },
];

class Detail extends Component {
  render() {
    // console.log(this.props);

    //接收params参数
    const { id, title } = this.props.match.params;


    // 接收search参数
    // const {search} = this.props.location;
    // const {id,title} = qs.parse(search.slice(1))


    //接收state参数
    // const {state} = this.props.location; 
    
    const resultData = contentData.filter((obj) => {
      return obj.id === id;
    });

    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{resultData[0].data}</li>
        </ul>
      </div>
    );
  }
}

export default Detail;
