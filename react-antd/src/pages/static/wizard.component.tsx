import React, { useState } from 'react';
import { Button, message, Modal, Steps, theme } from 'antd';
import StepForm from './step-form.component';


const Wizard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal title="Add Todo" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

        <StepForm />
      </Modal>
    </>
  );
};

export default Wizard;