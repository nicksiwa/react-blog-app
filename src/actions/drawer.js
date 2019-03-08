import { DRAWER } from '../constants/actionTypes';

export const openDrawer = () => ({
  type: DRAWER.OPEN,
});

export const closeDrawer = () => ({
  type: DRAWER.CLOSE,
});
