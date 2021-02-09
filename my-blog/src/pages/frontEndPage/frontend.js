import "./static/pageCss.css";
import React, { Component } from "react";
import { Layout, Input, Menu, Card, Image } from "antd";
import { Switch, Link, Route } from "react-router-dom";
import CatalogueContent from "./component/catalogue.js";
import PersonalInfo from "./component/personalInfo.js";
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
                <Menu.Item>
                  <Link to="/frontend">首页</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/frontend/catalogue">目录</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/frontend/personalInfo">个人信息</Link>
                </Menu.Item>
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
            <Content>
              <Switch>
                <Route exact path="/frontend">first page</Route>
                <Route
                  path="/frontend/catalogue"
                  component={CatalogueContent}
                ></Route>
                <Route
                  path="/frontend/personalInfo"
                  component={PersonalInfo}
                ></Route>
              </Switch>
            </Content>
            <Footer>
              <a href="http://www.beian.miit.gov.cn" target="_blank">
                湘ICP备20004873
              </a>
              <Image src={require("../../assets/image/beian.png")}></Image>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
