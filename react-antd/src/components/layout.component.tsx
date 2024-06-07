import { useEffect } from 'react';
import { useOutlet } from 'react-router-dom';
import { SideNav } from './side-nav.component';
import { CustomHeader } from './header.component';
import { UserContext } from '../context/user.context';
import { useMsal } from '@azure/msal-react';
import { Breadcrumb, Layout, theme } from 'antd';
import React from 'react';
const { Content } = Layout;



const CustomLayout = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  // const [user, setUser] = useState('');
  const outlet = useOutlet();
  useEffect(() => {
    // setUser(activeAccount?.name || '');
  }, [activeAccount])
  return (
    <>
      <UserContext.Provider value={{ collapsed, setCollapsed }}>
        <Layout style={{ height: '100vh' }}>
          <SideNav />
          <Layout>
            <CustomHeader />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {outlet}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </UserContext.Provider>

    </>
  )
};
export default CustomLayout;