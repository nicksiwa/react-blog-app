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
