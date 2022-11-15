import React from "react";
import { useDispatch } from "react-redux";
import { hide } from "./modules/modals/slice";

export const ProjectSaveModal = () => {
  const dispatch = useDispatch();

  return (
    <div className="window modal-panel">
      <div className="title-bar">
        <div className="title-bar-text">Save</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button onClick={() => dispatch(hide())}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
