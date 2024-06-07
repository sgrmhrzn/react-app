import React, { useState } from 'react';
import { Button, Form, Input, Radio, Select } from 'antd';
const { Option } = Select;
type LayoutType = Parameters<typeof Form>[0]['layout'];

const GeneralForm: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
    >
      <Form.Item label="Name">
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item label="Workgroup administrator">
        <Input placeholder="Workgroup administrator" />
      </Form.Item>
      <Form.Item label="Caller ID">
        <Input placeholder="Caller ID" />
      </Form.Item>
      <Form.Item label="Hours of operation">
        <Input placeholder="Hours of operation" />
      </Form.Item>
      <Form.Item label="Time zone">
        <Select
          placeholder="Select a option and change input text above"
          onChange={() => { }}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      {/* <Form.Item {...buttonItemLayout}>
        <Button type="primary">Submit</Button>
      </Form.Item> */}
    </Form>
  );
};

export default GeneralForm;