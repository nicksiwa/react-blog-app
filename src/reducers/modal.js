import { MODAL } from '../constants/actionTypes';

const init = {
  isOpen: false,
  title: '',
  content: '',
};

export default function modalReducer(state = init, action) {
  switch (action.type) {
    case MODAL.OPEN:
      return {
        isOpen: true,
        title: action.payload.title,
        content: action.payload.content,
      };
    case MODAL.CLOSE:
      return { ...state, isOpen: false };
    case MODAL.ACCEPT:
      return { ...state, isOpen: false };
    case MODAL.CANCEL:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}
