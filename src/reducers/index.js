import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './login';
import articleReducer from './article';
import drawerReducer from './drawer';
import modalReducer from './modal';

export default combineReducers({
  login: loginReducer,
  article: articleReducer,
  drawer: drawerReducer,
  modal: modalReducer,
  form: formReducer,
});
