import { MODAL } from '../constants/actionTypes';

export const openModal = data => ({
  type: MODAL.OPEN,
  payload: data,
});

export const closeModal = () => ({
  type: MODAL.CLOSE,
});

export const acceptModal = () => ({
  type: MODAL.ACCEPT,
});

export const cancelModal = () => ({
  type: MODAL.CANCEL,
});
