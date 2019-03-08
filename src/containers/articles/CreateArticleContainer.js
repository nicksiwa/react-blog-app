import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateArticleComponent from '../../components/articles/CreateArticleComponent';

class CreateArticleContainer extends Component {
  render() {
    return (
      <CreateArticleComponent {...this.props} />
    );
  }
}

export default connect()(CreateArticleContainer);
