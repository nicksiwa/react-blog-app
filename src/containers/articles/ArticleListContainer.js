import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleListComponent from '../../components/articles/ArticleListComponent';
import { fetchArticlesPending } from '../../actions/article';

class ArticleListContainer extends Component {
  componentDidMount() {
    this.props.handleFetchArticles();
  }

  render() {
    return (
      <ArticleListComponent {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  articles: state.article.articles,
  isLoading: state.article.isLoading,
});

const mapDispatchToProps = dispatch => ({
  handleFetchArticles: () => dispatch(fetchArticlesPending()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer);
