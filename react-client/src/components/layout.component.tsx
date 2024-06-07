import { Body1, Card, CardFooter, CardHeader, CardPreview, Divider, FluentProvider, Tree, TreeItem, TreeItemLayout, makeStyles, shorthands, teamsLightTheme } from '@fluentui/react-components';
import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { SideNav } from './side-nav.component';
import { Header } from './header.component';
import { UserContext } from '../context/user.context';
import { useMsal } from '@azure/msal-react';

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    ...shorthands.padding('0'),
    rowGap: 0
    // display:"grid"
  },
  footer: {
    marginTop: 'auto'
  },
  cardBody: {
    ...shorthands.margin("0 !important"),
    ...shorthands.padding("0"), display: 'flex', height: '100%'
  }
});
const Layout = () => {
  const styles = useStyles();
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser(activeAccount?.name || '');
  }, [activeAccount])
  return (
    <>
      <FluentProvider theme={teamsLightTheme}>
        <UserContext.Provider value={user}>
          <Card className={styles.card}>
            <CardHeader header={
              // <Body1>
              <Header />
              // </Body1>
            } />
            {/* <Divider /> */}
            <CardPreview className={styles.cardBody}>
              <div style={{ maxWidth: '200px' }}>
                <SideNav />
              </div>
              <div style={{ padding: '20px' }}>
                <Outlet />
              </div>
            </CardPreview>
            <CardFooter className={styles.footer}>
              <p className="read-the-docs">
                Copyright 2024
              </p>
            </CardFooter>
          </Card>
        </UserContext.Provider>
      </FluentProvider >
    </>

  )
};
export default Layout;