import PlayHeader from "common/playlists/PlayHeader";
import { useLocation } from "react-router-dom";
import { getPlayById } from "meta/play-meta";
import { family } from "data/family";
import React, { Fragment } from "react";
import { Tree, TreeNode } from "react-organizational-chart";

const Card = (props) => {
  return (
    <>
      {props.data.map((item, index) => (
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
  // The following code is to fetch the current play from the URL
  const location = useLocation();
  const { id } = location.state;
  const play = getPlayById(id);
  
  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          <div className="org-tree">
            <h2>Basic Family Tree</h2>
            <p>
              This is a basic family tree. It shows the family tree. The family
              tree is a hierarchical data structure. It is a tree data
            </p>
            <Tree lineWidth={"2px"} label={<div>{family.name}</div>}>
              <Card data={family.children} />
            </Tree>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicTree;
