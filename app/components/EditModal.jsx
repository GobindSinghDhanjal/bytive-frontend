import React, { useState } from "react";
import { Button, Modal } from "antd";
import { EditForm } from "./EditForm";

function EditModal({ name, email, phone, website, open, setOpen }) {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 500);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        title="Basic Modal"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Ok
          </Button>,
        ]}
      >
        <EditForm name={name} email={email} phone={phone} website={website}/>
      </Modal>
    </>
  );
}

export default EditModal;
