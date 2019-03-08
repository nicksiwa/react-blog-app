import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleComponent from '../../components/articles/ArticleComponent';
import { openDrawer } from '../../actions/drawer';

class ArticleContainer extends Component {
  render() {
    return (
      <ArticleComponent
        handleOpenDrawer={this.props.handleOpenDrawer}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleOpenDrawer: () => dispatch(openDrawer()),
});

export default connect(null, mapDispatchToProps)(ArticleContainer);
