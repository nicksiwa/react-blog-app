import { LOGIN } from '../constants/actionTypes';

export const login = () => ({
  type: LOGIN.LOGIN,
});

export const logout = () => ({
  type: LOGIN.LOGOUT,
});
