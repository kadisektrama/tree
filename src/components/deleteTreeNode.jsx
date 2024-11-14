import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteTreeNode } from "../shared/api";
import { useDispatch } from "react-redux";
import { getTree } from "../redux/thunk/tree";

export const DeleteTreeNode = ({ nodeId }) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      await deleteTreeNode(nodeId);
    } catch (e) {
      console.log(e);
    }
    dispatch(getTree());
  };

  return (
    <div>
      <Button size="small" danger onClick={handleDelete}>
        <DeleteOutlined />
      </Button>
    </div>
  );
};
