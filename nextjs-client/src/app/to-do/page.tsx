import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { msalInstance } from "../../../services/msal";
import { useRouter } from "next/router";
import { CustomNavigationClient } from "@/utils/custom-navigation-client";
import { MsalProvider } from "@azure/msal-react";
import { Suspense } from "react";
import { Row } from "./row";

export async function getToDoList() {
  const res = await fetch(`https://api.publicapis.org/entries`);
  return res.json()
}
// Client-side cache, shared for the whole session of the user in the browser.

msalInstance.initialize().then(() => {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback((event: any) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
      const account = event.payload.account;
      msalInstance.setActiveAccount(account);
    }
  });
});

export default async function ToDoList() {
  // const msalInstance = new PublicClientApplication(msalConfig);

  const data = await getToDoList();
  // msalInstance.logoutPopup();
  console.log(data.entries);
  // const router = useRouter();
  // const navigationClient = new CustomNavigationClient(router);
  // msalInstance.setNavigationClient(navigationClient);

  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            <Suspense fallback={<div>Loading...</div>}>

              <Row entries={data.entries} />
            </Suspense>
          }

        </tbody>
      </table>
    </>
  )
}