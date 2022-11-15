import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { redo, undo } from "../modules/historyIndex/slice";
import { strokesLengthSelector } from "../modules/strokes/slice";

export const EditPanel = () => {
  const undoLimit = useSelector(strokesLengthSelector);
  const dispatch = useDispatch();

  return (
    <div className="window edit">
      <div className="title-bar">
        <div className="title-bar-text">Edit</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button
            className="button redo"
            onClick={() => dispatch(undo(undoLimit))}>
            Undo
          </button>

          <button className="button undo" onClick={() => dispatch(redo())}>
            Redo
          </button>
        </div>
      </div>
    </div>
  );
};
