import React from 'react';
import { Button } from 'antd';

const SubmitArticleFormComponent = (props) => {
  const { onSubmit } = props;

  return (
    <div>
      <Button>Cancel</Button>
      <Button type="primary" onClick={onSubmit}>Create</Button>
    </div>
  );
};

export default SubmitArticleFormComponent;
