import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleComponent from '../../components/articles/ArticleComponent';
import { openArticleDrawer, closeArticleDrawer } from '../../actions/article';

class ArticleContainer extends Component {
  handleOpenDrawer = () => this.props.openDrawer;

  handleCloseDrawer = () => this.props.closeDrawer;

  render() {
    return (
      <ArticleComponent
        handleOpenDrawer={this.handleOpenDrawer}
        handleCloseDrawer={this.handleCloseDrawer}
        isOpenDrawer={this.props.isOpenDrawer}
      />
    );
  }
}

const mapStateToProps = state => ({
  isOpenDrawer: state.article.isOpenDrawer,
});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openArticleDrawer()),
  closeDrawer: () => dispatch(closeArticleDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
