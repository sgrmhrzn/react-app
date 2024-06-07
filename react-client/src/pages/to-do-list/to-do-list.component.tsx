import {
  FolderRegular,
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentPdfRegular,
  VideoRegular,
} from "@fluentui/react-icons";
import {
  TableBody,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
} from "@fluentui/react-components";
import { useCallback, useEffect, useState } from "react";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest, protectedResources } from "../../auth-config";
import useFetchWithMsal from "../../hooks/useFetchWithMsal";
import ListView from "./list.component";
import AddToDoMemo from "./add-with-memo.component";
import AddToDo from "./add.component";

const columns = [
  { columnKey: "file", label: "File" },
  { columnKey: "author", label: "Author" },
  { columnKey: "lastUpdated", label: "Last updated" },
  { columnKey: "actions", label: "" },
];
interface ITodoItemDTO {
  id: string;
  description: string;
}

interface ITodoItem {
  id: string;
  file: any;
  author: any;
  lastUpdated: any;
}
const ToDoListContent = () => {
  const msalInstance = useMsal();
  const [items, addItem] = useState<Array<ITodoItem>>([]);

  const { error, execute } = useFetchWithMsal({
    scopes: protectedResources.toDoListAPI.scopes.read,
  });

  const mapDTO = (item: ITodoItemDTO): ITodoItem => {
    return {
      id: item.id,
      file: { label: item.description, icon: <DocumentPdfRegular /> },
      author: { label: msalInstance.instance.getActiveAccount()?.name, status: "offline" },
      lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    }
  }

  // const [toDoListData, setToDoListData] = useState<Response>();
  const handleAddTask = useCallback((title: string) => {
    const newTask: any = {
      description: title,
    };

    execute('POST', protectedResources.toDoListAPI.endpoint, newTask).then((response) => {
      if (response) {
        addItem([...items, mapDTO(response as any)]);
      }
    });
  }, [items])

  const handleAddTask2 = (title: string) => {
    const newTask: any = {
      description: title,
    };

    execute('POST', protectedResources.toDoListAPI.endpoint, newTask).then((response) => {
      if (response) {
        addItem([...items, mapDTO(response as any)]);
      }
    });
  }

  useEffect(() => {
    if (!items.length) {
      execute("GET", protectedResources.toDoListAPI.endpoint).then((response: any) => {
        console.log('get', response);
        if (response?.length) {
          addItem([...response.map((x: any) => mapDTO(x))]);
        }

        console.log(items);
      });
    }
  }, [execute, items])

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <>
    <div>
      {/* <Button appearance="primary">Add</Button> */}
      <AddToDoMemo handleAddTask={handleAddTask} />
      <AddToDo handleAddTask={handleAddTask} />
    </div>
    <Table arial-label="Default table" role="grid">
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column.columnKey}>
              {column.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items ? <ListView items={items} /> : null}
      </TableBody>
    </Table></>;
};


export const ToDoList = () => {
  // const [items, addItem] = useState(initialItems);
  const authRequest = {
    ...loginRequest,
  };

  return (<>

    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
    >
      <ToDoListContent />

    </MsalAuthenticationTemplate>
  </>
  );
};