import { useMsal } from "@azure/msal-react";
import { Avatar } from "@fluentui/react-components";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext('');

// export const UserComponent = () => {
//   const { instance } = useMsal();
//   const activeAccount = instance.getActiveAccount();
//   const [user, setUser] = useState('');
//   useEffect(() => {
//     setUser(activeAccount?.name || '');
//   }, [activeAccount])
//   return (<UserContext.Provider value={user}>
//     <Avatar name="user" />
//   </UserContext.Provider>)
// }