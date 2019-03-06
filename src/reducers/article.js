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
      return { ...state, isLoading: false, articles: [...state.articles, ...action.payload] };
    case ARTICLE.OPEN_DRAWER:
      return { ...state, isOpenDrawer: true };
    case ARTICLE.CLOSE_DRAWER:
      return { ...state, isOpenDrawer: false };
    default:
      return state;
  }
}

export default articleReducer;
