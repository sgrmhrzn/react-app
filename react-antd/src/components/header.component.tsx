import * as React from "react";

import { UserContext } from "../context/user.context";
import { Header } from "antd/es/layout/layout";
import { Avatar, Button, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

export const CustomHeader = () => {
  const userContext = React.useContext(UserContext) as any;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const navigate = useNavigate();

  return (
    <Header style={{ padding: '0', display: 'flex', alignItems: 'center', background: colorBgContainer }}>
      <Button
        type="text"
        icon={userContext.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => userContext.setCollapsed(!userContext.collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      {/* <Menu
        mode="horizontal"
        defaultSelectedKeys={['0']}
        items={menuItems}
        style={{ flex: 1, minWidth: 0 }}
      /> */}
      {/* <Button> */}
      <Avatar style={{ marginLeft: 'auto' }} shape="square" />
      {/* </Button> */}
    </Header>
  );
};

