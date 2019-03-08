import { DRAWER } from '../constants/actionTypes';

const init = {
  isOpen: false,
};

export default function drawerReducer(state = init, action) {
  switch (action.type) {
    case DRAWER.OPEN:
      return { isOpen: true };
    case DRAWER.CLOSE:
      return { isOpen: false };
    default:
      return state;
  }
}
