import React from 'react';
import { Layout, Avatar } from 'antd';
import cruise from '../assets/logo/logo.svg';

import SideMenu from '../components/SideMenu';
import MainContent from '../views/MainContent';

const { Header, Footer, Content } = Layout;

const BasicLayout = () => (
  <>
    <Layout>
      <Header className="header">
        <img className="logo" src={cruise} alt="logo" />
        <div style={{float: 'right', marginRight: '0px'}}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div style={{display: 'inline-block', position: 'relative', top: '4px', left: '2px'}}>
            <i style={{fontSize: '20px', color: '#afafaf', verticalAlign: 'text-bottom'}} className="icon icon-angle-down"></i> 
          </div>
        </div>
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
