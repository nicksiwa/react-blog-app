import React from 'react';
import { Drawer } from 'antd';

const DrawerComponent = (props) => {
  const {
    children,
    title,
    isOpen,
    width,
    handleCloseDrawer,
  } = props;

  return (
    <Drawer width={width} title={title} visible={isOpen} onClose={() => handleCloseDrawer()}>
      {children}
    </Drawer>
  );
};

export default DrawerComponent;
