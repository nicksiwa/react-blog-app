/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button, Form } from 'antd';
import { Field } from 'redux-form';
import Input from './RenderInput';

const RenderArrayInput = (props) => {
  const {
    label,
    fields,
    addLabel,
    meta: { error, submitFailed },
  } = props;

  return (
    <Form.Item
      label={label}
      validateStatus={submitFailed && error ? 'error' : ''}
      help={submitFailed && error}
    >
      <Button type="default" onClick={() => fields.push()}>{addLabel}</Button>
      {fields.map((name, index) => (
        <span key={index}>
          <Field
            name={name}
            type="text"
            component={Input}
          />
          <Button type="danger" onClick={() => fields.remove(index)}>Remove</Button>
        </span>
      ))}
    </Form.Item>
  );
};

export default RenderArrayInput;
