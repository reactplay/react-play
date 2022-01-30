import React, { Fragment } from "react";
import { family } from '../../data/family';

const Card = (props) => {

  return (
    <ul>
      {props.data.map((item,index) => (
        <Fragment key={item.name}>
          <li>
            <div className="card">
              <div className="card-body">
                <h4>{item.name}</h4>
              </div>
              
              <div></div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const BasicTree = () => {
  return (
    <div className="org-tree">
      <h2>Basic Family Tree</h2>
      <p>
        This is a basic family tree. It shows the family tree. The family tree is a hierarchical data structure. It is a tree data
      </p>
      <Card data={family} />
    </div>
  );
};

export default BasicTree;
