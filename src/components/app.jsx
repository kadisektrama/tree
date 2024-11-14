import { Tree } from "./tree";
import { useEffect } from "react";
import { TREE_GUID } from "../shared/constants";
import { useSelector, useDispatch } from "react-redux";
import { getTree } from "../redux/thunk/tree";

export const App = () => {
  const data = useSelector((state) => state.tree.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTree(TREE_GUID));
  }, []);

  return (
    <div className="App">
      <h1>React Tree View</h1>
      <Tree treeData={data} />
    </div>
  );
};

export default App;
