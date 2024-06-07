import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";



type FieldType = {
  title?: string;
};


const AddToDo = ({ handleAddTask }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState<FieldType>({ title: '' });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    save();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const [formValid, setValid] = useState(false);
  // const formRef = useRef<any>(null);

  const onFinish = (values: any) => {
    setValue(values);
    save();
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const save = () => {
    console.log(value);
    handleAddTask(value.title);
    // setValid(false);
    // formRef.current.reset();
    // console.log(formRef.current[0].value);
    // setValue({ title: '' });
    // setIsModalOpen(false)
  }

  // const formValidity = () => {
  //   if (formRef?.current) {
  //     var arr = Array.from(formRef?.current?.elements);
  //     console.log(arr.every((x: any) => x.validity.valid));
  //     var arr = Array.from(formRef?.current?.elements);
  //     if (arr.every((x: any) => x.validity.valid)) {
  //       setValid(true);
  //     }
  //   }
  // }


  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal title="Add Todo" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input a title!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>

    // <Dialog open={open} onOpenChange={(event, data) => { setOpen(data.open), event }}>
    //   <DialogTrigger disableButtonEnhancement>
    //     <Button appearance="primary" data-testid="add-btn">Add</Button>
    //   </DialogTrigger>
    //   <DialogSurface data-testid="add-dialog">
    //     <DialogBody>
    //       <DialogTitle>Add new</DialogTitle>
    //       <DialogContent>
    //         <form ref={formRef} onBlur={() => { formValidity() }} onChange={() => { formValidity() }} >
    //           <InputItem required={true} />
    //           <Button appearance="primary" type="submit" disabled={!formValid} onClick={() => save()}>Save</Button>
    //         </form>
    //       </DialogContent>
    //       {/* <DialogActions>
    //         <DialogTrigger disableButtonEnhancement>
    //           <Button appearance="secondary" onClick={() => setValid(false)}>Close</Button>
    //         </DialogTrigger>
    //       </DialogActions> */}
    //     </DialogBody>
    //   </DialogSurface>
    // </Dialog >
  );
};

// export default AddToDo;NewType = FieldType;

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Add
//       </Button>
//       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//         <Form
//           formRef={formRef}
//           name="basic"
//           labelCol={{ span: 8 }}
//           wrapperCol={{ span: 16 }}
//           style={{ maxWidth: 600 }}
//           initialValues={{ remember: true }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//         >
//           <Form.Item<NewType>
//             label="Username"
//             name="username"
//             rules={[{ required: true, message: 'Please input your username!' }]}
//           >
//             <Input />
//           </Form.Item>

//           {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//           </Form.Item> */}
//         </Form>
//       </Modal>
//     </>

//     // <Dialog open={open} onOpenChange={(event, data) => { setOpen(data.open), event }}>
//     //   <DialogTrigger disableButtonEnhancement>
//     //     <Button appearance="primary" data-testid="add-btn">Add</Button>
//     //   </DialogTrigger>
//     //   <DialogSurface data-testid="add-dialog">
//     //     <DialogBody>
//     //       <DialogTitle>Add new</DialogTitle>
//     //       <DialogContent>
//     //         <form ref={formRef} onBlur={() => { formValidity() }} onChange={() => { formValidity() }} >
//     //           <InputItem required={true} />
//     //           <Button appearance="primary" type="submit" disabled={!formValid} onClick={() => save()}>Save</Button>
//     //         </form>
//     //       </DialogContent>
//     //       {/* <DialogActions>
//     //         <DialogTrigger disableButtonEnhancement>
//     //           <Button appearance="secondary" onClick={() => setValid(false)}>Close</Button>
//     //         </DialogTrigger>
//     //       </DialogActions> */}
//     //     </DialogBody>
//     //   </DialogSurface>
//     // </Dialog >
//   );
// };

export default AddToDo;