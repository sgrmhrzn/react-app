// import { Avatar } from "@fluentui/react-components";
import { createContext } from "react";
interface UserContextProp {
  collapsed?: boolean;
  setCollapsed?: React.Dispatch<React.SetStateAction<boolean>>
}
export const UserContext = createContext<UserContextProp>({});

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