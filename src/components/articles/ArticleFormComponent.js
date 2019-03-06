import React from 'react';
import { Field, FieldArray } from 'redux-form';
import { Form } from 'antd';
import { Input, ArrayInput } from '../share/form';

const ArticleFormComponent = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Form.Item label="Title">
        <Field
          name="title"
          type="text"
          component={Input}
        />
      </Form.Item>
      <Form.Item label="Author">
        <Field
          name="author"
          type="text"
          component={Input}
        />
      </Form.Item>
      <Form.Item label="Tags">
        <FieldArray
          name="tags"
          type="text"
          addLabel="Add Tags"
          component={ArrayInput}
        />
      </Form.Item>
    </form>
  );
};

export default ArticleFormComponent;
