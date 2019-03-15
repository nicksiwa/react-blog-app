import React from 'react';
import { Table } from 'antd';

const ArticleListComponent = props => (
  <Table
    bordered
    rowKey="id"
    columns={props.columns}
    loading={props.isLoading}
    dataSource={props.articles}
    className="table"
  />
);

export default ArticleListComponent;
