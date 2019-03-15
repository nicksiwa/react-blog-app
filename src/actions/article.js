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

export const updateArticlePending = data => ({
  type: ARTICLE.UPDATE_PENDING,
  payload: data,
});

export const updateArticleSuccess = data => ({
  type: ARTICLE.UPDATE_SUCCESS,
});

export const updateArticleFail = err => ({
  type: ARTICLE.UPDATE_FAIL,
  payload: err,
});

export const updateArticleCancel = () => ({
  type: ARTICLE.UPDATE_CANCEL,
});

export const getArticleByIdPending = id => ({
  type: ARTICLE.GET_BY_ID_PENDING,
  payload: id,
});

export const getArticleByIdSuccess = data => ({
  type: ARTICLE.GET_BY_ID_SUCCESS,
  payload: data,
});

export const getArticleByIdFail = () => ({
  type: ARTICLE.GET_BY_ID_FAIL,
});
