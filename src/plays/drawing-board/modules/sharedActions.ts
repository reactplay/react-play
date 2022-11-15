import { createAction } from "@reduxjs/toolkit";
import { Stroke } from "../utils/types";

export type SharedAction = ReturnType<typeof endStroke>;

export const endStroke = createAction<{
  stroke: Stroke;
  historyIndex: number;
}>("endStroke");
