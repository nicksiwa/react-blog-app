import { ARTICLE } from '../constants/actionTypes';

const init = {
  isLoading: false,
  isOpenDrawer: false,
  articles: [],
};

function articleReducer(state = init, action) {
  switch (action.type) {
    case ARTICLE.FETCH_PENDING:
      return { ...state, isLoading: true };
    case ARTICLE.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: [...state.articles, ...action.payload],
      };
    case ARTICLE.CREATE_PENDING:
      return { ...state, isLoading: true };
    case ARTICLE.CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: [...state.articles, { ...action.payload }],
      };
    case ARTICLE.DELETE_PENDING:
      return { ...state };
    case ARTICLE.DELETE_SUCCESS:
      return {
        ...state,
        articles: state.articles.filter(article => article.id !== action.payload),
      };
    default:
      return state;
  }
}

export default articleReducer;
