import { Button, Flex, Steps, message, theme } from "antd"
import { useState } from "react";
import GeneralForm from "./general-form.component";
import DistributionForm from "./distribution-form.component";
import Users from "./users-form.component";
import { DeploymentUnitOutlined, InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
const steps = [
  {
    title: 'General',
    content: <GeneralForm />,
    icon: <InfoCircleOutlined />,
  },
  {
    title: 'Routing & Distribution',
    content: <DistributionForm />,
    icon: <DeploymentUnitOutlined />,
  },
  {
    title: 'Users',
    content: <Users />,
    icon: <UserOutlined />,
  },
];

const StepForm = () => {

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const renderForm = () => {
    switch (current) {
      case 0:
        return <GeneralForm />;
      case 1:
        return <GeneralForm />;
      default:
        return 'foo';
    }
  }
  return (<>
    <Flex gap="middle" vertical style={{ height: '100%' }}>
      <Steps current={current} items={steps} labelPlacement="horizontal" size="small" />
      {steps[current].content}
      <div style={{ marginTop: 'auto' }}>
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
      </div>
    </Flex>
  </>)
}

export default StepForm;