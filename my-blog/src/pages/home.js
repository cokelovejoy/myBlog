import React, { Component } from 'react'
import { Card, Row, Col, Button } from 'antd'
export default class HomePage extends Component {
    render() {

        return (
            <div id="site-card-border-less-wrapper">
                <Row justify="center">
                    <Col>
                        <Card title="小赵全栈666 个人博客" bordered={false} style={{ width: 500 }}>

                            <Button type="primary" block>
                                前端技术
                            </Button>
                            <Button type="primary" block>
                                工作经验
                            </Button>
                            <Button type="primary" block>
                                业余炒股
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}