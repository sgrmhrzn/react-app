import * as React from "react";
import {
  Avatar,
  Divider,
  makeStyles,
  shorthands,
  Tab,
  TabList,
  Tree,
  TreeItem,
  TreeItemLayout,
} from "@fluentui/react-components";
import type { TabListProps } from "@fluentui/react-components";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "space-between",
    alignItem: 'center',
    ...shorthands.padding("5px", "10px"),
    rowGap: "20px",
    backgroundColor: "#484644",
    width: '100%',
    color: 'white',
  },
});

export const Header = (props: Partial<TabListProps>) => {
  const userContext = React.useContext(UserContext);
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      {/* <TabList {...props}>
        <Tab value="tab1" onClick={() => navigate('/')}>Home</Tab>
        <Tab value="tab2" onClick={() => navigate('/to-do')}>Todo</Tab>
        <Tab value="tab3" onClick={() => navigate('/uploader')}>Upload</Tab>
      </TabList> */}
      <h3>Front Stage</h3>
      <div>
        <Avatar name={userContext} />
      </div>
    </div>
  );
};

