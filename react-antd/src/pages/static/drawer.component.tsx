import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import type { DrawerProps } from 'antd';
import Wizard from './wizard.component';
import StepForm from './step-form.component';
interface IDrawerProps {
  title?: string;
}
const SideDrawer: React.FC = ({ title }: IDrawerProps) => {
  // const { title } = props;
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps['size']>();

  const showDefaultDrawer = () => {
    setSize('default');
    setOpen(true);
  };

  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showLargeDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title={title}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
      // extra={
      //   <Space>
      //     <Button onClick={onClose}>Cancel</Button>
      //     <Button type="primary" onClick={onClose}>
      //       OK
      //     </Button>
      //   </Space>
      // }
      >
        <StepForm />

      </Drawer>
    </>
  );
};

export default SideDrawer;