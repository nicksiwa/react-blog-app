import React from 'react';
import { Field, FieldArray } from 'redux-form';
import { Input, ArrayInput } from '../share/form';

const ArticleFormComponent = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="title"
        type="text"
        label="Title"
        component={Input}
      />
      <Field
        name="author"
        type="text"
        label="Author"
        component={Input}
      />
      <FieldArray
        name="tags"
        type="text"
        label="Tags"
        addLabel="Add Tags"
        component={ArrayInput}
      />
    </form>
  );
};

export default ArticleFormComponent;
