import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tag, Button } from 'antd';
import ArticleListComponent from '../../components/articles/ArticleListComponent';
import { fetchArticlesPending, deleteArticlePending } from '../../actions/article';

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
            {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: data => (
          <span>
            <Button>Edit</Button>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer);
