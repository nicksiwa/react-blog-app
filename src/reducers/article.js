import { ARTICLE } from '../constants/actionTypes';

function articleReducer(state = [], action) {
  switch (action.type) {
    case ARTICLE.FETCH_PENDING:
      return { isLoading: true, articles: [] };
    case ARTICLE.FETCH_SUCCESS:
      return { isLoading: false, articles: [...state.articles, ...action.payload] };
    default:
      return state;
  }
}

export default articleReducer;
