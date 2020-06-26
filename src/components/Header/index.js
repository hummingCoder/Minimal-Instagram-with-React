
import {
    Link
} from "react-router-dom";
import React from 'react';
import { Layout, Menu } from 'antd';
import './index.css';

const { Header } = Layout;

export default () => {
    return <Header theme="dark" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        </Menu>
    </Header>

}