import React, { Component } from 'react';
import { Card } from "antd";

export default class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <Card title="全栈是怎样练成的" bordered={false}>
          React组件，类似于JavaScript函数。它接受任意的参数(props),并返回描述页面展示内容的React元素。

          组件有两种形式：class组件和function组件。

          props: 当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。
          可以通过this.props访问自定义组件接收的属性和子组件（通过children属性获取子组件）。
          组件名称必须以大写字母开头，小写字母开头的组件将会被视为原生DOM标签。
         </Card>
      </div>
    )
  }
}