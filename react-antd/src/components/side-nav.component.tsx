import { Layout, Menu, MenuProps } from "antd";
import * as React from "react";
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";
const { Sider } = Layout;

const items2: MenuProps['items'] = [
  {
    key: `/`,
    icon: React.createElement(HomeOutlined),
    label: `Home`
  },
  {
    key: `menu-admin`,
    icon: React.createElement(UserOutlined),
    label: `Admin`,

    children: [{
      key: 'to-do',
      label: `Todo`,
    },
    {
      key: 'static-list',
      label: `Static list`,
    }
    ]
  }]

export const SideNav = () => {
  const context = React.useContext(UserContext);
  const [current, setCurrent] = React.useState('mail');

  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    navigate(e.key);
    setCurrent(e.key);
  };

  return (
    <Sider collapsible trigger={null} collapsed={context.collapsed}>
      <div className="demo-logo-vertical"/>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={items2}
        onClick={onClick} selectedKeys={[current]}
        theme="dark"
      />
    </Sider>
  );
};