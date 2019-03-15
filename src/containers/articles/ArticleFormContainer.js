import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ArticleFormComponent from '../../components/articles/ArticleFormComponent';
import { createArticlePending } from '../../actions/article';
import validate from '../../components/articles/helper/validate';

const ArticleFormComponentWithReduxForm = reduxForm({
  form: 'article',
  validate,
  enableReinitialize: true,
})(ArticleFormComponent);

class ArticleFormContainer extends Component {
  render() {
    const { onCreate, onUpdate, isEditing } = this.props;
    return (
      <ArticleFormComponentWithReduxForm
        {...this.props}
        onSubmit={!isEditing ? value => onCreate(value) : value => onUpdate(value)}
      />
    );
  }
}

const mapStateToProps = state => ({
  initialValues: state.article.article,
  isEditing: state.article.isEditing,
});

const mapDispatchToProps = dispatch => ({
  onCreate: value => dispatch(createArticlePending(value)),
  onUpdate: value => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFormContainer);
