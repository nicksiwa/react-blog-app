import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './login';
import articleReducer from './article';

export default combineReducers({
  login: loginReducer,
  article: articleReducer,
  form: formReducer,
});
