import React from 'react';
import { Input } from 'antd';

const RenderInput = (props) => {
  const { hidden } = props;
  return (
    <Input
      {...props.input}
      hidden={hidden}
    />
  );
};

export default RenderInput;
