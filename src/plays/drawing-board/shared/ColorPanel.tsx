import React from "react";
import { useDispatch } from "react-redux";
import { setStrokeColor } from "../modules/currentStroke/slice";

const COLORS = [
  "#000000",
  "#808080",
  "#c0c0c0",
  "#fffff",
  "#FF5733 ",
  "#ab8b04",
  "#df73ff",
  "#00ffff",
  "#4666ff",
  "#67e0b3",
  "#00e2ab",
  "#039d63",
  "#49f9ad",
  "#51a944",
  "#89f98c",
  "#82a8f4",
  "#9ae8e1",
  "#a1d4cf",
  "#f4c2c2",
  "#fc8eac",
  "#6e7b8b",
  "#8b7765",
  "#cdc5bf",
  "#c4c3d0",
  "#1974d2",
  "#9966cc",
  "#ffbf00",
  "#b0bf1a",
  "#431616",
  "#7070ff",
  "#40e0d0",
  "#86b7e8",
  "#f4975f",
  "#d3b393",
  "#c29367",
  "#c9a079",
  "#d59fa8",
  "#fd6b6b",
  "#112d31",
  "#1bfd9c",
  "#4d9385",
  "#c99aa0",
];

export const ColorPanel = () => {
  const dispatch = useDispatch();
  const onColorChange = (color: string) => {
    dispatch(setStrokeColor(color));
  };

  return (
    <div className="window dboard-colors-panel">
      <div className="title-bar">
        <div className="title-bar-text">Colors</div>
      </div>
      <div className="window-body dboard-colors">
        {COLORS.map((color: string) => (
          <div
            key={color}
            onClick={() => {
              onColorChange(color);
            }}
            className="dboard-color"
            style={{ backgroundColor: color }}></div>
        ))}
      </div>
    </div>
  );
};
