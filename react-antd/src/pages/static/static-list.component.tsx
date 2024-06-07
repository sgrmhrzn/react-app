
import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { protectedResources } from "../../auth-config";
import useFetchWithMsal from "../../hooks/useFetchWithMsal";
// import ListView from "./list.component";
import { Space, Table, TableProps, Tag } from "antd";
import Wizard from "./wizard.component";
import SideDrawer from "./drawer.component";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
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
      file: { label: item.description, icon: '' },
      author: { label: msalInstance.instance.getActiveAccount()?.name, status: "offline" },
      lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    }
  }

  // const [toDoListData, setToDoListData] = useState<Response>();
  // const handleAddTask = useCallback((title: string) => {
  //   const newTask: any = {
  //     description: title,
  //   };

  //   execute('POST', protectedResources.toDoListAPI.endpoint, newTask).then((response) => {
  //     if (response) {
  //       addItem([...items, mapDTO(response as any)]);
  //     }
  //   });
  // }, [items])


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
      {/* <AddToDoMemo handleAddTask={handleAddTask} /> */}
      {/* <AddToDo handleAddTask={handleAddTask} /> */}
      <Wizard />
      <SideDrawer title="Workgroup" />
    </div>
    <Table columns={columns} dataSource={data} /></>;
};


export const List = () => {
  // const [items, addItem] = useState(initialItems);
  // const authRequest = {
  //   ...loginRequest,
  // };

  return (<>
    {/* <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
    > */}
    <ToDoListContent />

    {/* </MsalAuthenticationTemplate> */}
  </>
  );
};