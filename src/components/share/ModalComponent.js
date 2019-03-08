import React from 'react';
import { Modal } from 'antd';


const ModalComponent = (props) => {
  const {
    isOpen,
    title,
    content,
    okText,
    okType,
    cancelText,
    handleAcceptModal,
    handleCancelModal,
  } = props;

  return (
    <Modal
      visible={isOpen}
      title={title}
      okText={okText}
      okType={okType}
      cancelText={cancelText}
      onOk={handleAcceptModal}
      onCancel={handleCancelModal}
    >
      {content}
    </Modal>
  );
};

export default ModalComponent;
