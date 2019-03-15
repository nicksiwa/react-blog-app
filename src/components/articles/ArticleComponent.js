/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Button } from 'antd';
import ArticleListContainer from '../../containers/articles/ArticleListContainer';
import CreateArticleContainer from '../../containers/articles/CreateArticleContainer';

const ArticleComponent = (props) => {
  const { handleOpenDrawer } = props;

  return (
    <div className="tableLayout">
      <Button
        type="primary"
        onClick={() => handleOpenDrawer()}
        className="tableLayout-button"
      >
        Create Article
      </Button>
      <ArticleListContainer />
      <CreateArticleContainer />
    </div>
  );
};

export default ArticleComponent;
