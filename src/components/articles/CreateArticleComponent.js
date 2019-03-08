import React from 'react';
import ArticleFormContainer from '../../containers/articles/ArticleFormContainer';
import SubmitArticleFormContainer from '../../containers/articles/SubmitArticleFormContainer';
import DrawerContainer from '../../containers/share/DrawerContainer';

const CreateArticleComponent = (props) => {
  const { onSubmit } = props;

  return (
    <DrawerContainer
      title="Article"
      width={480}
    >
      <ArticleFormContainer onSubmit={onSubmit} />
      <SubmitArticleFormContainer />
    </DrawerContainer>
  );
};

export default CreateArticleComponent;
