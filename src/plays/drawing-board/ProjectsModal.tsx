import React from "react";
import { useDispatch } from "react-redux";
import { hide } from "./modules/modals/slice";

export const ProjectsModal = () => {
  const dispatch = useDispatch();

  return (
    <div className="window modal-panel">
      <div className="title-bar">
        <div className="title-bar-text">Load Project</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={() => dispatch(hide())} />
        </div>
      </div>
      <div className="projects-container">Projects List</div>
    </div>
  );
};
