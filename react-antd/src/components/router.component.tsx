import { MsalProvider } from "@azure/msal-react";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout.component";
import { IPublicClientApplication } from "@azure/msal-browser";
import { ToDoList } from "../pages/to-do-list/to-do-list.component";
import Home from "../pages/home/home.component";
import { List } from "../pages/static/static-list.component";
import { ConfigProvider } from "antd";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="to-do" element={<ToDoList />} />
    <Route path="static-list" element={<List />} />
    {/* 
    <Route path="register" element={<Register />} /> */}
  </Route>
));
interface IProps {
  instance: IPublicClientApplication
}
const RouterLayout = ({ instance }: IProps) => {
  return (
    <MsalProvider instance={instance}>
      <ConfigProvider theme={{
        components: {
          Form: {
            // paddingContentVertical:10,
            // margin: 0,
            itemMarginBottom: 8,
            verticalLabelPadding:'0 0 3px'
          }
        }
      }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </MsalProvider>
  )
}
export default RouterLayout;