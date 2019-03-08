import React from 'react';
import { Button } from 'antd';
import ArticleListContainer from '../../containers/articles/ArticleListContainer';
import CreateArticleContainer from '../../containers/articles/CreateArticleContainer';

const ArticleComponent = (props) => {
  const { handleOpenDrawer } = props;

  return (
    <div>
      <Button type="primary" onClick={() => handleOpenDrawer()}>Create Article</Button>
      <ArticleListContainer />
      <CreateArticleContainer />
    </div>
  );
};

export default ArticleComponent;
