const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.author) {
    errors.author = 'Required';
  }
  if (!values.tags || !values.tags.length) {
    errors.tags = { _error: 'At least one tag must be entered' };
  } else {
    const tagsArrayErrors = [];
    values.tags.forEach((tag, index) => {
      if (!tag) {
        tagsArrayErrors[index] = 'Required';
      }
    });
    if (tagsArrayErrors.length) {
      errors.tags = tagsArrayErrors;
    }
  }
  return errors;
};

export default validate;
