import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import SubmitArticleFormComponent from '../../components/articles/SubmitArticleFormComponent';

class SubmitArticleFormContainer extends Component {
  render() {
    return (
      <SubmitArticleFormComponent {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  isEditing: state.article.isEditing,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(submit('article')),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitArticleFormContainer);
