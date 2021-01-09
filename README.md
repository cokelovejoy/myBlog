# myBlog
基于React 构建个人博客。
# 创建项目步骤
## create-react-app
```bash
npx create-react-app my-app
```
# 安装ant design
```bash
# 方式1
npm install antd -S
# 方式2
npm add antd
```
## 使用ant design
在src/App.js中引入antd的组件
```js
import React from 'react';
import { Button } from 'antd';
import './App.css';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```
在src/App.css文件顶部引入antd/dist/antd.css
```js
@import '~antd/dist/antd.css'
```
# 技术栈
## JS库
React， redux， react-router
## UI框架
Ant Design
# 页面结构
导航栏，搜索栏。
个人信息展示。
文章展示。
注册，登录功能。
留言功能。
留言展示。
富文本编辑功能。
# 数据库
mongodb
# 服务器
nginx 部署项目。
nodejs 做api。
# 安全
防注入，
cookie (http-only)

# webpack
webpack 打包优化