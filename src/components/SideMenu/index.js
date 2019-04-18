/**
 * 侧边栏
 * author: shubaiqiao
 * date: 2019.3.9
 */
import React from 'react';
import { Menu, Layout } from 'antd';

import History from '../History';
import './index.css';

const { Sider } = Layout;

const SideMenu = () => (
  <>
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0, textAlign: 'left' }}
        theme="dark"
      >
        <Menu.Item key="dashboard">
          <i className="icon icon-dashboard"></i>
          <span>DASHBOARD</span>
        </Menu.Item>
        <Menu.Item key="agent">
          <i className="icon icon-sitemap"></i>
          <span>AGENT</span>
        </Menu.Item>
        <Menu.Item key="mycruise">
          <i className="icon icon-boat"></i>
          <span>MY CRUISE</span>
        </Menu.Item>
        <Menu.Item key="help">
          <i className="icon icon-life-bouy"></i>
          <span>HELP</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <History></History>
  </>
);
export default SideMenu;
