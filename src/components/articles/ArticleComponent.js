import React from 'react';
import { Button } from 'antd';
import ArticleListContainer from '../../containers/articles/ArticleListContainer';
import CreateArticleContainer from '../../containers/articles/CreateArticleContainer';

const ArticleComponent = (props) => {
  const { handleOpenDrawer, handleCloseDrawer, isOpenDrawer } = props;

  return (
    <div>
      <Button type="primary" onClick={handleOpenDrawer()}>Create Article</Button>
      <ArticleListContainer />
      <CreateArticleContainer handleCloseDrawer={handleCloseDrawer} isOpenDrawer={isOpenDrawer} />
    </div>
  );
};

export default ArticleComponent;
