import React, { Component } from 'react'
import { Card, Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
export default class HomePage extends Component {
  openFrontEndPage() {
    console.log('open front end');
  }
  render() {
    return (
      <div id="site-card-border-less-wrapper">
        <Row justify="center">
          <Col>
            <Card title="小赵全栈666 个人博客" bordered={false} style={{ width: 500 }}>
              <Row gutter={[16, 24]}>
                <Col span={24}>
                  <Button type="primary" block onClick={() => this.openFrontEndPage()}>
                    <Link to="/frontend">前端技术</Link>
                  </Button>
                </Col>
                <Col span={24}>
                  <Button type="primary" block>
                    <Link to="/stock">股票金融</Link>
                  </Button>
                </Col>
                <Col span={24}>
                  <Button type="primary" block>
                    <Link to="/experience"> 职业经验</Link>
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}