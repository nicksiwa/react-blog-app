import React from 'react';
import { Layout } from 'antd';
import NavbarComponent from '../components/share/NavbarComponent';
import ArticleListContainer from '../containers/articles/ArticleListContainer';

const { Header, Content, Footer } = Layout;

const AppLayout = props => (
  <Layout className="layout">
    <Header>
      <NavbarComponent />
    </Header>
    <Content style={{ padding: '50px' }}>
      <div style={{ background: '#fff', padding: 24 }}>
        <ArticleListContainer />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>footer</Footer>
  </Layout>
);

export default AppLayout;
