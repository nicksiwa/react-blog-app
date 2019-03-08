import { ARTICLE } from '../constants/actionTypes';

export const fetchArticlesPending = () => ({
  type: ARTICLE.FETCH_PENDING,
});

export const fetchArticlesSuccess = articles => ({
  type: ARTICLE.FETCH_SUCCESS,
  payload: articles,
});

export const fetchArticlesFail = err => ({
  type: ARTICLE.FETCH_FAIL,
  payload: err,
});

export const createArticlePending = data => ({
  type: ARTICLE.CREATE_PENDING,
  payload: data,
});

export const createArticleSuccess = article => ({
  type: ARTICLE.CREATE_SUCCESS,
  payload: article,
});

export const createArticleFail = err => ({
  type: ARTICLE.CREATE_FAIL,
  payload: err,
});

export const deleteArticlePending = data => ({
  type: ARTICLE.DELETE_PENDING,
  payload: data,
});

export const deleteArticleSuccess = id => ({
  type: ARTICLE.DELETE_SUCCESS,
  payload: id,
});

export const deleteArticleFail = err => ({
  type: ARTICLE.DELETE_FAIL,
  payload: err,
});
