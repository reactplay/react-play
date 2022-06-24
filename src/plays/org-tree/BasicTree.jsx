import PlayHeader from "common/playlists/PlayHeader";
import { org } from "./org";
import React, { Fragment } from "react";
import { Tree, TreeNode } from "react-organizational-chart";

import "./basic-tree.css";

const Card = (props) => {
  return (
    <>
      {props.data.map((item, index) => (
        <Fragment key={item.name}>
          <TreeNode label={<div className="node">{item.name}</div>}>
            {item.children?.length && <Card data={item.children} />}
          </TreeNode>
        </Fragment>
      ))}
    </>
  );
};

const BasicTree = (props) => {
 
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="org-tree">
            <h2>Castro - Organization Tree</h2>
            <p className="about">
              It is a basic organization tree shows the relationship between the
              employee's roles. The tree is a hierarchical data structure. The
              children of each node are shown in the below of the node.
            </p>
            <p className="about">
              The tree structure is created using the 
                {' '} 
                <a 
                  href="https://www.npmjs.com/package/react-organizational-chart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Organizational Chart
                </a> library. Please check the org.js file for the data.
            </p>
            <Tree lineWidth={"2px"} label={<div className="node">{org.name}</div>}>
              <Card data={org.children} />
            </Tree>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicTree;
