import React from 'react';
import { Table, Tag } from 'antd';

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
];

const ArticleListComponent = props => (
  <Table
    bordered
    rowKey="id"
    columns={columns}
    loading={props.isLoading}
    dataSource={props.articles}
  />
);

export default ArticleListComponent;
