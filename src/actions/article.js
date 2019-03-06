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

export const openArticleDrawer = () => ({
  type: ARTICLE.OPEN_DRAWER,
});

export const closeArticleDrawer = () => ({
  type: ARTICLE.CLOSE_DRAWER,
});
