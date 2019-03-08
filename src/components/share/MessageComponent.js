import { message } from 'antd';

export const showSuccessMessage = (msg) => {
  message.success(msg);
};

export const showErrorMessage = (msg) => {
  message.error(msg);
};

export const showWarningMessage = (msg) => {
  message.warning(msg);
};
