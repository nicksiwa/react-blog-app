import React from 'react';
import { Drawer } from 'antd';
import ArticleFormContainer from '../../containers/articles/ArticleFormContainer';
import SubmitArticleFormContainer from '../../containers/articles/SubmitArticleFormContainer';

const CreateArticleComponent = (props) => {
  const { isOpenDrawer, handleCloseDrawer, onSubmit } = props;

  return (
    <Drawer
      title="Article"
      visible={isOpenDrawer}
      onClose={handleCloseDrawer()}
      width={480}
    >
      <ArticleFormContainer onSubmit={onSubmit} />
      <SubmitArticleFormContainer />
    </Drawer>
  );
};

export default CreateArticleComponent;
