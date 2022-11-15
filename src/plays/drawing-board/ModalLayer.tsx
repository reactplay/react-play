import React from "react";
import { useSelector } from "react-redux";
import { ProjectsModal } from "./ProjectsModal";
import { ProjectSaveModal } from "./ProjectSaveModal";
import { modalNameSelector } from "./modules/modals/slice";

export const ModalLayer = () => {
  const modalName = useSelector(modalNameSelector);

  switch (modalName) {
    case "PROJECTS_MODAL": {
      return <ProjectsModal />;
    }
    case "PROJECTS_SAVE_MODAL": {
      return <ProjectSaveModal />;
    }
    default:
      return null;
  }
};
