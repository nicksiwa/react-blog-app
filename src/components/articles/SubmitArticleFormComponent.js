import React from 'react';
import { Button } from 'antd';

const SubmitArticleFormComponent = (props) => {
  const { onSubmit, isEditing } = props;

  return (
    <div>
      <Button>Cancel</Button>
      <Button type="primary" onClick={onSubmit}>{!isEditing ? 'Create' : 'Update'}</Button>
    </div>
  );
};

export default SubmitArticleFormComponent;
