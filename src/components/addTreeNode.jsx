import { useState } from "react";
import { Button, Modal, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { getTree } from "../redux/thunk/tree";
import { createTreeNode } from "../shared/api";

export const AddTreeNode = ({ parentNodeId }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("New Node");
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const handleOk = async () => {
    try {
      const data = await createTreeNode(name, parentNodeId).then((res) =>
        res.json()
      );
      if (!data.ok) {
        throw new Error(data.data.message);
      }
      setOpen(false);
    } catch (e) {
      console.log(e);
      messageApi.open({
        type: "error",
        content: e.message,
      });
    }
    dispatch(getTree());
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      {contextHolder}
      <Button size="small" onClick={() => setOpen(true)}>
        +
      </Button>
      <Modal
        title="Add Node"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Node Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Modal>
    </div>
  );
};
