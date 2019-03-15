import { ARTICLE } from '../constants/actionTypes';

const init = {
  isLoading: false,
  isOpenDrawer: false,
  isEditing: false,
  articles: [],
  article: {},
};

function articleReducer(state = init, action) {
  switch (action.type) {
    case ARTICLE.FETCH_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ARTICLE.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: [...state.articles, ...action.payload],
      };
    case ARTICLE.CREATE_PENDING:
      return {
        ...state,
        isLoading: true,
      };
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
        articles: state.articles.filter(
          article => article.id !== action.payload,
        ),
      };
    case ARTICLE.GET_BY_ID_PENDING:
      return {
        ...state,
        isEditing: true,
      };
    case ARTICLE.GET_BY_ID_SUCCESS:
      return {
        ...state,
        article: { ...action.payload },
      };
    case ARTICLE.UPDATE_PENDING:
      return {
        ...state,
      };
    case ARTICLE.UPDATE_SUCCESS:
      return {
        ...state,
        isEditing: false,
        article: {},
      };
    case ARTICLE.UPDATE_CANCEL:
      return {
        ...state,
        isEditing: false,
        article: {},
      };
    default:
      return state;
  }
}

export default articleReducer;
