import React, { Component } from "react";
// import "../node_modules/antd/dist/antd.css";
import { Button, DatePicker, Space } from "antd";
import { PoweroffOutlined, WechatOutlined } from "@ant-design/icons";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";

const { RangePicker } = DatePicker;
class App extends Component {
  state = {
    loadings: [],
  };

  onChange = (_, dateString) => {
    console.log(dateString);
  };

  enterLoading = (index) => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 2000);
  };
  render() {
    const { loadings } = this.state;
    return (
      <div>
        <button>你好</button>
        <Button type="primary">Primary Button</Button>
        <br />
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <hr />
        <WechatOutlined style={{ fontsize: "20px", color: "#ff6700" }} />
        <Space direction="vertical">
          <DatePicker onChange={this.onChange} locale={locale} />
          <DatePicker onChange={this.onChange} picker="week" />
          <DatePicker onChange={this.onChange} picker="month" />
          <DatePicker onChange={this.onChange} picker="quarter" />
          <DatePicker onChange={this.onChange} picker="year" />

          <RangePicker />
        </Space>
      </div>
    );
  }
}

export default App;
