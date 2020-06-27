import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Col, Row } from "antd";
const { Content } = Layout;
const Unauthorized = () => {
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 130 }}>
            <Row>
                <Col span={7} />
                <Col span={10}>
                    <img src="https://media.giphy.com/media/8abAbOrQ9rvLG/giphy.gif" alt="this slowpoke moves" />

                    <h1>403 - You Shall Not Pass</h1>
                    <p>Uh oh, Gandalf is blocking the way!<br />Maybe you have a typo in the url? Or you meant to go to a different location? Like...Hobbiton?</p>

                    <p><Link to='/'>Back to Home</Link></p>
                </Col>
                <Col span={7} />
            </Row>
        </Content>
    )
}

export default Unauthorized;