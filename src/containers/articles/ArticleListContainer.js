/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tag, Button } from 'antd';
import ArticleListComponent from '../../components/articles/ArticleListComponent';
import { fetchArticlesPending, deleteArticlePending, getArticleByIdPending } from '../../actions/article';

class ArticleListContainer extends Component {
  componentDidMount() {
    this.props.handleFetchArticles();
  }

  render() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        render: tags => (
          <span>
            {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: data => (
          <span className="table-action">
            <Button onClick={() => this.props.handleGetArticleById(data.id)}>Edit</Button>
            <Button type="danger" onClick={() => this.props.handleDeleteArticle(data.id)}>Delete</Button>
          </span>
        ),
      },
    ];

    return (
      <ArticleListComponent {...this.props} columns={columns} />
    );
  }
}

const mapStateToProps = state => ({
  articles: state.article.articles,
  isLoading: state.article.isLoading,
});

const mapDispatchToProps = dispatch => ({
  handleFetchArticles: () => dispatch(fetchArticlesPending()),
  handleDeleteArticle: id => dispatch(deleteArticlePending(id)),
  handleGetArticleById: id => dispatch(getArticleByIdPending(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer);
