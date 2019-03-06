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

const mapStateToProps = state => ({
  isOpenDrawer: state.article.isOpenDrawer,
});

export default connect(mapStateToProps)(CreateArticleContainer);
