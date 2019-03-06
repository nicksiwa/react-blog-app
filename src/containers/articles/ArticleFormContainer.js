import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ArticleFormComponent from '../../components/articles/ArticleFormComponent';
import { createArticlePending } from '../../actions/article';

class ArticleFormContainer extends Component {
  render() {
    return (
      <ArticleFormComponent {...this.props} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(createArticlePending(value)),
});

const ArticleFormContainerWithReduxForm = reduxForm({
  form: 'article',
})(ArticleFormContainer);

export default connect(null, mapDispatchToProps)(ArticleFormContainerWithReduxForm);
