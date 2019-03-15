import React from 'react';
import { Input, Form } from 'antd';

const RenderInput = (props) => {
  const { label, hidden, meta: { error, touched } } = props;
  return (
    <Form.Item
      label={label}
      validateStatus={touched && error ? 'error' : ''}
      help={touched && error}
    >
      <Input
        {...props.input}
        hidden={hidden}
      />
    </Form.Item>
  );
};

export default RenderInput;
