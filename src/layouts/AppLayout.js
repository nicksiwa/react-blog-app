import React from 'react';
import { Layout } from 'antd';
import NavbarComponent from '../components/share/NavbarComponent';
import ArticleContainer from '../containers/articles/ArticleContainer';
import ModalContainer from '../containers/share/ModalContainer';

const { Content, Footer } = Layout;

const AppLayout = () => (
  <Layout className="appLayout">
    <NavbarComponent />
    <Content className="appLayout-content">
      <ArticleContainer />
      <ModalContainer />
    </Content>
    <Footer>footer</Footer>
  </Layout>
);

export default AppLayout;
