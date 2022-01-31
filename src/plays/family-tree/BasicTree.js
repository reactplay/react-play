import React, { Fragment } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { family } from '../../data/family';

const Card = (props) => {
  return (
    <>
      {
        props.data.map((item,index) => (
        <Fragment key={item.name}>
          <TreeNode label={<div>{item.name}</div>}>
            {item.children?.length && <Card data={item.children} />}
          </TreeNode>
        </Fragment>
      ))}
    </>
  );
};

const BasicTree = () => {
  return (
    <div className="org-tree">
      <h2>Basic Family Tree</h2>
      <p>
        This is a basic family tree. It shows the family tree. The family tree is a hierarchical data structure. It is a tree data
      </p>
      <Tree lineWidth={"2px"} label={<div>{family.name}</div>}>
        <Card data={family.children} />
      </Tree>
    </div>
  );
};

export default BasicTree;
