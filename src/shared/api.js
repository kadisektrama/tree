import { TREE_GUID } from "./constants";

const BASE_URL = "https://test.vmarmysh.com/api.user.tree";

const queryString = (params) => new URLSearchParams(params).toString();

export const getTreeData = async (treeName = TREE_GUID) => {
  const response = await fetch(`${BASE_URL}.get?${queryString({ treeName })}`, {
    method: "POST",
  });

  const data = await response.json();
  return data;
};

export const createTreeNode = (
  nodeName,
  parentNodeId,
  treeName = TREE_GUID
) => {
  return fetch(
    `${BASE_URL}.node.create?${queryString({
      treeName,
      parentNodeId,
      nodeName,
    })}`,
    {
      method: "POST",
    }
  );
};

export const deleteTreeNode = async (nodeId, treeName = TREE_GUID) => {
  return await fetch(
    `${BASE_URL}.node.delete?${queryString({
      treeName,
      nodeId,
    })}`,
    {
      method: "POST",
    }
  );
};

export const renameTreeNode = async (
  nodeId,
  newNodeName,
  treeName = TREE_GUID
) => {
  return fetch(
    `${BASE_URL}.node.rename?${queryString({
      treeName,
      nodeId,
      newNodeName,
    })}`,
    {
      method: "POST",
    }
  );
};
