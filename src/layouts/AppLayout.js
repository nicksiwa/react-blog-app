import React from 'react';
import { Layout } from 'antd';
import NavbarComponent from '../components/share/NavbarComponent';
import ArticleContainer from '../containers/articles/ArticleContainer';
import ModalContainer from '../containers/share/ModalContainer';

const { Content, Footer } = Layout;

const AppLayout = props => (
  <Layout className="layout">
    <NavbarComponent />
    <Content style={{ padding: '50px' }}>
      <div style={{ background: '#fff', padding: 24 }}>
        <ArticleContainer />
        <ModalContainer />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>footer</Footer>
  </Layout>
);

export default AppLayout;
