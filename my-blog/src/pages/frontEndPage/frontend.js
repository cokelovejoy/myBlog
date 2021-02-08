import "./static/pageCss.css";
import React, { Component } from "react";
import { Layout, Input, Menu, Card, Image } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;
const { Header, Footer, Sider, Content } = Layout;
const onSearch = (value) => console.log("value", value);

export default class FrontEnd extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <Search
            placeholder="想看点啥呢？"
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
          ></Search>
        </Header>
        <Layout>
          <Sider className="sider">
            <div id="name">
              <span>RICHARD BLOG</span>
            </div>
            <div id="menu">
              <Menu>
                <Menu.Item><Link to="/">首页</Link></Menu.Item>
                <Menu.Item><Link to="/">目录 </Link></Menu.Item>
                <Menu.Item><Link to="/">个人信息</Link></Menu.Item>
              </Menu>
            </div>
            <div id="personalInfo">
              <Card hoverable>
                <div id="picture">
                  <Image
                    src={require("../../assets/image/author-pic.png")}
                  ></Image>
                </div>
                <p id="authorName">Richard.Zhao</p>
                <p id="keyWord">Technology Blog</p>
              </Card>
            </div>
          </Sider>
          <Layout>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
