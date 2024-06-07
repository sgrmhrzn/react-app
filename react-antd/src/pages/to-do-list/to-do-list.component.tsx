
import { useCallback, useEffect, useState } from "react";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest, protectedResources } from "../../auth-config";
import useFetchWithMsal from "../../hooks/useFetchWithMsal";
// import ListView from "./list.component";
import AddToDo from "./add.component";
import { Space, Table, TableProps, Tag } from "antd";

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

interface ITodoItemDTO {
  id: string;
  description: string;
}

// interface ITodoItem {
// title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
// }
const ToDoListContent = () => {
  const msalInstance = useMsal();
  const [items, addItem] = useState<Array<DataType>>([]);

  const { error, execute } = useFetchWithMsal({
    scopes: protectedResources.toDoListAPI.scopes.read,
  });

  const mapDTO = (item: ITodoItemDTO): DataType => {
    return {
      key: item.id,
      name: item.description,
      address: msalInstance.instance.getActiveAccount()?.name || '',
      tags: ['cool', 'teacher'],
      age: 9
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
      <AddToDo handleAddTask={handleAddTask} />
    </div>
    <Table columns={columns} dataSource={items} /></>;
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