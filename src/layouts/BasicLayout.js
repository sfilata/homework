import React from 'react';
import { Layout, Avatar, Menu, Dropdown } from 'antd';
import cruise from '../assets/logo/logo.svg';

/**
 * 主要布局
 * author: shubaiqiao
 * date: 2019.3.8
 */
import SideMenu from '../components/SideMenu';
import MainContent from '../views/MainContent';

const { Header, Footer, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <i className="icon icon-sign-in"></i>
      <span>Profile</span>
    </Menu.Item>
    <Menu.Item key="1">
      <i className="icon icon-id-card" style={{marginRight: '10px'}}></i>
      <span>Sign Out</span>
    </Menu.Item>
  </Menu>
)

const BasicLayout = () => (
  <>
    <Layout>
      <Header className="header">
        <img className="logo" src={cruise} alt="logo" />
        <Dropdown overlay={menu} trigger={['click']}>
          <div style={{float: 'right', marginRight: '0px'}}>
            <Avatar style={{textAlign: 'center'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={40} />
            <div style={{display: 'inline-block', position: 'relative', top: '4px', left: '2px'}}>
              <i style={{fontSize: '20px', color: '#afafaf', verticalAlign: 'text-bottom'}} className="icon icon-angle-down"></i> 
            </div>
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <SideMenu></SideMenu>
        <Layout style={{ padding: '12px' }}>
          <Content style={{ padding: '8px 12px', margin: 0, minHeight: '800px'
          }}
          >
            <MainContent></MainContent>
          </Content>
        </Layout>
      </Layout>
      <Footer className="footer">&copy;Copyright 2017 ThoughtWorks</Footer>
    </Layout>
  </>
);
export default BasicLayout;
