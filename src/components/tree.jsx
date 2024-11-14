import React, { useState } from "react";
import { AddTreeNode } from "./addTreeNode";
import { DeleteTreeNode } from "./deleteTreeNode";
import { RenameTreeNode } from "./renameTreeNode";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./tree.module.css";

export const TreeNode = ({
  node,
  parentNodeId,
  selectedNode,
  setSelectedNode,
}) => {
  const { children, name, id } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <>
      <div
        onClick={() => setSelectedNode(id)}
        className={`${selectedNode === id && styles.selected} ${
          styles.treeNode
        }`}
      >
        <div style={{ cursor: "pointer" }} onClick={handleClick}>
          {showChildren ? <DownOutlined /> : <RightOutlined />}
        </div>
        <span>{name}</span>
        {selectedNode === id && (
          <div className={styles.actions}>
            <AddTreeNode parentNodeId={parentNodeId} />
            <RenameTreeNode nodeId={id} name={name} />
            <DeleteTreeNode nodeId={id} />
          </div>
        )}
      </div>

      <div style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
        {showChildren && (
          <TreeMapper
            treeData={children}
            selectedNode={selectedNode}
            setSelectedNode={setSelectedNode}
          />
        )}
      </div>
    </>
  );
};

export const TreeMapper = ({ treeData, selectedNode, setSelectedNode }) => {
  return (
    <ul>
      {treeData.map((node) => (
        <TreeNode
          node={node}
          key={node.id}
          parentNodeId={node.id}
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
        />
      ))}
    </ul>
  );
};

export const Tree = ({ treeData }) => {
  const [selectedNode, setSelectedNode] = useState(false);

  return (
    <TreeMapper
      treeData={treeData}
      selectedNode={selectedNode}
      setSelectedNode={setSelectedNode}
    />
  );
};
