import { LOGIN } from '../constants/actionTypes';

const init = {
  isAuthenticated: true,
};

function loginReducer(state = init, action) {
  switch (action.type) {
    case LOGIN.LOGIN:
      return {
        isAuthenticated: true,
      };
    case LOGIN.LOGOUT:
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export default loginReducer;
