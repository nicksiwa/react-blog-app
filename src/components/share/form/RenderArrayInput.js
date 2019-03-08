/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button } from 'antd';
import { Field } from 'redux-form';
import Input from './RenderInput';

const RenderArrayInput = (props) => {
  const { fields, addLabel } = props;

  return (
    <div>
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
    </div>
  );
};

export default RenderArrayInput;
