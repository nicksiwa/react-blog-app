import { combineReducers } from 'redux';
import loginReducer from './login';
import articleReducer from './article';

export default combineReducers({
  login: loginReducer,
  article: articleReducer,
});
