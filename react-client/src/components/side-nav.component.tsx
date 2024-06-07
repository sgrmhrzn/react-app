import * as React from "react";
import {
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

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("0px", "0px"),
    rowGap: "20px",
    backgroundColor: "#e7e7e7",
    height: '100%'
  },
  tree: {
    width: '100%'
  }
});

export const SideNav = (props: Partial<TabListProps>) => {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      {/* <TabList {...props}>
        <Tab value="tab1" onClick={() => navigate('/')}>Home</Tab>
        <Tab value="tab2" onClick={() => navigate('/to-do')}>Todo</Tab>
        <Tab value="tab3" onClick={() => navigate('/uploader')}>Upload</Tab>
      </TabList> */}
      <Tree aria-label="Default" className={styles.tree}>
        <TreeItem itemType="leaf">
          <TreeItemLayout onClick={() => navigate('/')}>Home</TreeItemLayout>
        </TreeItem>
        <TreeItem itemType="branch">
          <TreeItemLayout>Admin</TreeItemLayout>
          <Tree>
            <TreeItem itemType="leaf">
              <TreeItemLayout onClick={() => navigate('/to-do')}>Todo</TreeItemLayout>
            </TreeItem>
            <TreeItem itemType="leaf">
              <TreeItemLayout>level 2, item 3</TreeItemLayout>
            </TreeItem>
          </Tree>
        </TreeItem>
        <TreeItem itemType="branch">
          <TreeItemLayout>Public</TreeItemLayout>
          {/* <Tree>
            <TreeItem itemType="branch">
              <TreeItemLayout>level 2, item 1</TreeItemLayout> */}
          <Tree>
            <TreeItem itemType="leaf">
              <TreeItemLayout onClick={() => navigate('/uploader')}>Upload</TreeItemLayout>
            </TreeItem>
          </Tree>
          {/* </TreeItem>
          </Tree> */}
        </TreeItem>
      </Tree>
    </div>
  );
};