import { Button, Field } from "@fluentui/react-components";
import { useState } from "react";
// const fd = new FormData();


const Uploader = () => {
  const [formData, setForm] = useState(new FormData());
  const onFileChange = (e: any) => {
    // console.log(e.target.files);
    // const fd = new FormData();
    const file = e?.target?.files[0];
    // add all selected files
    // e.target.files.forEach((file) => {
    if (file) {
      formData.append('pdf', file, file.name);
      console.log(formData);
      setForm(formData);

    }
    // });
  }

  const upload = () => {
    if (formData.has('pdf')) {
      fetch('/avatars', {
        method: 'POST',
        body: formData
      })
    }
  }
  return (<>
    <div style={{ display: 'flex' }}>
      <input type="file" accept="application/pdf,audio/wav" onChange={() => onFileChange(event)} /> <Button onClick={() => upload()}>Upload</Button>
    </div>
  </>)
}

export default Uploader;