import { useState } from "react";
import { Button, Modal, Input, message } from "antd";
import { SignatureOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { renameTreeNode } from "../shared/api";
import { getTree } from "../redux/thunk/tree";

export const RenameTreeNode = ({ nodeId, name: _name }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(_name);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const handleOk = async () => {
    try {
      const data = await renameTreeNode(nodeId, name).then((res) => res.json());
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
        <SignatureOutlined />
      </Button>

      <Modal
        title="Rename Node"
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
